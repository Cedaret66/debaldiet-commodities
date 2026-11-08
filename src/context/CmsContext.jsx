import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { siteData as defaultSiteData } from '../data/siteData';

const STORAGE_KEY = 'debaldiet_cms_content_v4';
const AUTH_KEY = 'debaldiet_cms_auth_v2';
const CLOUD_SYNC_KEY = 'debaldiet_cloud_sync_config_v2';

const LEGACY_STORAGE_KEYS = [
  'debaldiet_cms_content_v4',
  'debaldiet_cms_content_v3',
  'debaldiet_cms_content_v2',
  'debaldiet_cms_content_v1',
  'debaldiet_cms_content',
  'debaldiet_content',
];

function loadPersistedContent() {
  for (const key of LEGACY_STORAGE_KEYS) {
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          // Always ensure the active key has the latest data
          if (key !== STORAGE_KEY) {
            localStorage.setItem(STORAGE_KEY, saved);
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn(`Error reading stored key ${key}:`, e);
    }
  }
  return null;
}

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

function deepMerge(target, source) {
  const output = { ...target };
  if (source && typeof source === 'object' && !Array.isArray(source)) {
    Object.keys(source).forEach((key) => {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) && key in target) {
        output[key] = deepMerge(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

const DEFAULT_SUPABASE_URL = 'https://rquximezzpgqdfschjba.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdXhpbWV6enBncWRmc2NoamJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQxNDIzMzUsImV4cCI6MjEwOTcxODMzNX0.MnNJ2qYTLaw6CwIxAk1Ngf7VZ-RoCfVpYQXzHIyF14k';

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
      const saved = loadPersistedContent();
      if (saved) {
        return deepMerge(defaultSiteData, saved);
      }
    } catch (e) {
      console.warn('Error reading saved CMS content:', e);
    }
    return defaultSiteData;
  });

  const [savedContent, setSavedContent] = useState(() => {
    try {
      const saved = loadPersistedContent();
      if (saved) {
        return deepMerge(defaultSiteData, saved);
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
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.supabaseUrl && parsed?.supabaseAnonKey) return parsed;
      }
      const url = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
      const key = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;
      if (url && key) {
        return {
          provider: 'supabase',
          supabaseUrl: url,
          supabaseAnonKey: key,
        };
      }
      return null;
    } catch {
      return {
        provider: 'supabase',
        supabaseUrl: DEFAULT_SUPABASE_URL,
        supabaseAnonKey: DEFAULT_SUPABASE_ANON_KEY,
      };
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

    let isMounted = true;
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
          if (rows?.[0]?.data && isMounted) {
            const merged = { ...defaultSiteData, ...rows[0].data };
            setContent(merged);
            setSavedContent(merged);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          }
        }
      } catch (err) {
        console.warn('Cloud pull error:', err);
      } finally {
        if (isMounted) setIsSyncing(false);
      }
    }

    fetchRemote();

    // Auto-sync polling every 20 seconds to keep all devices and users in sync
    const interval = setInterval(fetchRemote, 20000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
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

  // Add a new item to a showcase array (cars, hair, agriculture)
  const addShowcaseItem = (category, newItem) => {
    setContent((prev) => {
      const showcase = prev.showcases?.[category] || {};
      const currentItems = showcase.items || [];
      const updatedItems = [newItem, ...currentItems];
      const next = {
        ...prev,
        showcases: {
          ...prev.showcases,
          [category]: {
            ...showcase,
            items: updatedItems,
          },
        },
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.warn('Storage quota error:', e);
      }
      return next;
    });
    showToast(`Added new item to ${category} showcase!`, 'success');
  };

  // Delete an item from a showcase array
  const deleteShowcaseItem = (category, index) => {
    setContent((prev) => {
      const showcase = prev.showcases?.[category] || {};
      const currentItems = showcase.items || [];
      const updatedItems = currentItems.filter((_, idx) => idx !== index);
      const next = {
        ...prev,
        showcases: {
          ...prev.showcases,
          [category]: {
            ...showcase,
            items: updatedItems,
          },
        },
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.warn('Storage quota error:', e);
      }
      return next;
    });
    showToast(`Item removed from ${category} showcase.`, 'info');
  };

  // Duplicate an item in a showcase array
  const duplicateShowcaseItem = (category, index) => {
    setContent((prev) => {
      const showcase = prev.showcases?.[category] || {};
      const currentItems = showcase.items || [];
      const itemToClone = currentItems[index];
      if (!itemToClone) return prev;
      
      const clonedItem = {
        ...JSON.parse(JSON.stringify(itemToClone)),
        id: `${itemToClone.id || 'item'}-copy-${Date.now()}`,
        name: `${itemToClone.name || 'Item'} (Copy)`,
      };
      
      const updatedItems = [
        ...currentItems.slice(0, index + 1),
        clonedItem,
        ...currentItems.slice(index + 1),
      ];

      const next = {
        ...prev,
        showcases: {
          ...prev.showcases,
          [category]: {
            ...showcase,
            items: updatedItems,
          },
        },
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.warn('Storage quota error:', e);
      }
      return next;
    });
    showToast(`Item duplicated in ${category} showcase!`, 'success');
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
  const MASTER_ADMIN_PASS = '_debaldiet@2026!';

  const login = (password) => {
    const validPass = localStorage.getItem('debaldiet_admin_pass') || MASTER_ADMIN_PASS;
    if (password === validPass || password === MASTER_ADMIN_PASS) {
      setIsAuthenticated(true);
      setIsEditMode(true);
      localStorage.setItem(AUTH_KEY, 'true');
      localStorage.setItem('debaldiet_admin_pass', MASTER_ADMIN_PASS);
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
    // If Supabase cloud is configured, upload directly to public storage for fast CDN delivery
    if (cloudConfig?.supabaseUrl && cloudConfig?.supabaseAnonKey && file) {
      try {
        const cleanName = (file.name || 'image.jpg').replace(/[^a-zA-Z0-9.-]/g, '_');
        const fileName = `${Date.now()}-${cleanName}`;
        const uploadRes = await fetch(`${cloudConfig.supabaseUrl}/storage/v1/object/cms-media/${fileName}`, {
          method: 'POST',
          headers: {
            apikey: cloudConfig.supabaseAnonKey,
            Authorization: `Bearer ${cloudConfig.supabaseAnonKey}`,
            'Content-Type': file.type || 'image/jpeg',
          },
          body: file,
        });

        if (uploadRes.ok) {
          const publicUrl = `${cloudConfig.supabaseUrl}/storage/v1/object/public/cms-media/${fileName}`;
          if (path) updateField(path, publicUrl);
          showToast('Image uploaded to cloud CDN successfully!', 'success');
          closeImageUpload();
          return publicUrl;
        }
      } catch (err) {
        console.warn('Storage upload failed, falling back to local base64:', err);
      }
    }

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result;
        if (base64) {
          if (path) updateField(path, base64);
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
        addShowcaseItem,
        deleteShowcaseItem,
        duplicateShowcaseItem,
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
      addShowcaseItem: () => {},
      deleteShowcaseItem: () => {},
      duplicateShowcaseItem: () => {},
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
