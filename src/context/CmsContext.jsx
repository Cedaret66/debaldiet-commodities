import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { siteData as defaultSiteData } from '../data/siteData';

const STORAGE_KEY = 'debaldiet_cms_content_v2';
const AUTH_KEY = 'debaldiet_cms_auth_v2';
const CLOUD_SYNC_KEY = 'debaldiet_cloud_sync_config_v2';

const CmsContext = createContext(null);

// Get deep property by dot notation (e.g. "slides[0].headline" or "about.subHeadline")
export function getNestedValue(obj, path) {
  if (!obj || !path) return undefined;
  const parts = path.replace(/\[(\w+)\]/g, '.$1').split('.');
  let current = obj;
  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  return current;
}

// Set deep property immutably
export function setNestedValue(obj, path, value) {
  const parts = path.replace(/\[(\w+)\]/g, '.$1').split('.');
  const newObj = JSON.parse(JSON.stringify(obj));
  let current = newObj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!(part in current)) {
      current[part] = {};
    }
    current = current[part];
  }
  current[parts[parts.length - 1]] = value;
  return newObj;
}

export function CmsProvider({ children }) {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // Edit mode toggle (when ON, elements on the live site highlight and are editable inline)
  const [isEditMode, setIsEditMode] = useState(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // Drawer / Side Panel
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Content state (Draft vs Saved)
  const [content, setContent] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultSiteData, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Error reading saved CMS content:', e);
    }
    return defaultSiteData;
  });

  const [savedContent, setSavedContent] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultSiteData, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return defaultSiteData;
  });

  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Image Upload Modal State
  const [imageModalState, setImageModalState] = useState({
    isOpen: false,
    path: '',
    currentUrl: '',
    title: '',
  });

  // Cloud Sync configuration
  const [cloudConfig, setCloudConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(CLOUD_SYNC_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isSyncing, setIsSyncing] = useState(false);

  const showToast = useCallback((message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  }, []);

  // Check dirty state (unsaved changes)
  const isDirty = JSON.stringify(content) !== JSON.stringify(savedContent);

  // Sync from cloud if configured
  useEffect(() => {
    if (!cloudConfig || !cloudConfig.supabaseUrl || !cloudConfig.supabaseAnonKey) return;

    async function fetchRemote() {
      try {
        setIsSyncing(true);
        const res = await fetch(`${cloudConfig.supabaseUrl}/rest/v1/site_content?id=eq.main&select=data`, {
          headers: {
            apikey: cloudConfig.supabaseAnonKey,
            Authorization: `Bearer ${cloudConfig.supabaseAnonKey}`,
          },
        });
        if (res.ok) {
          const rows = await res.json();
          if (rows?.[0]?.data) {
            const merged = { ...defaultSiteData, ...rows[0].data };
            setContent(merged);
            setSavedContent(merged);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          }
        }
      } catch (err) {
        console.warn('Cloud pull error:', err);
      } finally {
        setIsSyncing(false);
      }
    }

    fetchRemote();
  }, [cloudConfig]);

  // Update a single field path (e.g. "slides[0].headline", "about.subHeadline")
  const updateField = (path, value) => {
    setContent((prev) => {
      const next = setNestedValue(prev, path, value);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.warn('Storage quota error:', e);
      }
      return next;
    });
  };

  // Direct batch updater
  const updateContent = (updater) => {
    setContent((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.warn('Storage quota error:', e);
      }
      return next;
    });
  };

  // Save changes explicitly
  const saveChanges = async () => {
    setIsSaving(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
      setSavedContent(content);

      // Cloud push if configured
      if (cloudConfig?.supabaseUrl && cloudConfig?.supabaseAnonKey) {
        await fetch(`${cloudConfig.supabaseUrl}/rest/v1/site_content`, {
          method: 'POST',
          headers: {
            apikey: cloudConfig.supabaseAnonKey,
            Authorization: `Bearer ${cloudConfig.supabaseAnonKey}`,
            'Content-Type': 'application/json',
            Prefer: 'resolution=merge-duplicates',
          },
          body: JSON.stringify({ id: 'main', data: content, updated_at: new Date().toISOString() }),
        });
      }

      showToast('All changes saved and published live!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Failed to save changes.', 'warning');
    } finally {
      setIsSaving(false);
    }
  };

  // Discard changes
  const discardChanges = () => {
    setContent(savedContent);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedContent));
    } catch {}
    showToast('Unsaved changes discarded.', 'info');
  };

  // Reset to factory defaults
  const resetToDefault = () => {
    if (window.confirm('Reset all website content back to factory defaults?')) {
      setContent(defaultSiteData);
      setSavedContent(defaultSiteData);
      localStorage.removeItem(STORAGE_KEY);
      showToast('Content reset to default.', 'info');
    }
  };

  // Auth methods
  const login = (password) => {
    const validPass = localStorage.getItem('debaldiet_admin_pass') || 'debaldiet2026!';
    if (password === validPass) {
      setIsAuthenticated(true);
      setIsEditMode(true);
      localStorage.setItem(AUTH_KEY, 'true');
      showToast('Welcome back, Admin! In-place editing is now ON.', 'success');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsEditMode(false);
    setIsDrawerOpen(false);
    localStorage.removeItem(AUTH_KEY);
    showToast('Logged out of CMS.', 'info');
  };

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  // Image Upload Modal controls
  const openImageUpload = (path, currentUrl, title) => {
    setImageModalState({
      isOpen: true,
      path,
      currentUrl: currentUrl || '',
      title: title || 'Change Image',
    });
  };

  const closeImageUpload = () => {
    setImageModalState({
      isOpen: false,
      path: '',
      currentUrl: '',
      title: '',
    });
  };

  const uploadImageFile = async (file, path) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result;
        if (base64) {
          updateField(path, base64);
          showToast('Image updated successfully!', 'success');
        }
        closeImageUpload();
        resolve(base64);
      };
      reader.readAsDataURL(file);
    });
  };

  const saveCloudConfig = (cfg) => {
    setCloudConfig(cfg);
    if (cfg) {
      localStorage.setItem(CLOUD_SYNC_KEY, JSON.stringify(cfg));
    } else {
      localStorage.removeItem(CLOUD_SYNC_KEY);
    }
  };

  return (
    <CmsContext.Provider
      value={{
        isAuthenticated,
        isEditMode,
        toggleEditMode,
        isDrawerOpen,
        setIsDrawerOpen,
        content,
        updateField,
        updateContent,
        getNestedValue: (path) => getNestedValue(content, path),
        saveChanges,
        discardChanges,
        isDirty,
        isSaving,
        resetToDefault,
        login,
        logout,
        toastMessage,
        showToast,
        imageModalState,
        openImageUpload,
        closeImageUpload,
        uploadImageFile,
        cloudConfig,
        saveCloudConfig,
        isSyncing,
        isAdminLoggedIn: isAuthenticated,
        loginAdmin: login,
        logoutAdmin: logout,
      }}
    >
      {children}
    </CmsContext.Provider>
  );
}

export function useCms() {
  const ctx = useContext(CmsContext);
  if (!ctx) {
    return {
      content: defaultSiteData,
      isAuthenticated: false,
      isEditMode: false,
      toggleEditMode: () => {},
      isDrawerOpen: false,
      setIsDrawerOpen: () => {},
      updateField: () => {},
      updateContent: () => {},
      getNestedValue: (path) => getNestedValue(defaultSiteData, path),
      saveChanges: () => {},
      discardChanges: () => {},
      isDirty: false,
      isSaving: false,
      resetToDefault: () => {},
      login: () => false,
      logout: () => {},
      toastMessage: null,
      showToast: () => {},
      imageModalState: { isOpen: false },
      openImageUpload: () => {},
      closeImageUpload: () => {},
      uploadImageFile: async () => {},
      cloudConfig: null,
      saveCloudConfig: () => {},
      isSyncing: false,
      isAdminLoggedIn: false,
      loginAdmin: () => false,
      logoutAdmin: () => {},
    };
  }
  return {
    ...ctx,
    isAdminLoggedIn: ctx.isAuthenticated,
    loginAdmin: ctx.login,
    logoutAdmin: ctx.logout,
  };
}

// Backward compatibility alias for useContent
export const useContent = useCms;
export const ContentProvider = CmsProvider;
