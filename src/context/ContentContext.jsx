import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteData as defaultSiteData } from '../data/siteData';

const STORAGE_KEY = 'debaldiet_cms_content_v1';
const AUTH_KEY = 'debaldiet_cms_auth_v1';
const CLOUD_SYNC_KEY = 'debaldiet_cloud_sync_config_v1';

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep merge with defaultSiteData to ensure schema additions never break
        return { ...defaultSiteData, ...parsed };
      }
    } catch (e) {
      console.warn('Could not read cached CMS content:', e);
    }
    return defaultSiteData;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [cloudConfig, setCloudConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(CLOUD_SYNC_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState(null);

  // Attempt Cloud Fetch on Mount if Cloud Config exists (Supabase or Firebase)
  useEffect(() => {
    if (!cloudConfig) return;

    async function fetchRemoteContent() {
      if (cloudConfig.provider === 'supabase' && cloudConfig.supabaseUrl && cloudConfig.supabaseAnonKey) {
        try {
          setIsSyncing(true);
          const res = await fetch(`${cloudConfig.supabaseUrl}/rest/v1/site_content?id=eq.main&select=data`, {
            headers: {
              apikey: cloudConfig.supabaseAnonKey,
              Authorization: `Bearer ${cloudConfig.supabaseAnonKey}`,
            },
          });
          if (res.ok) {
            const data = await res.json();
            if (data && data[0] && data[0].data) {
              const remoteContent = { ...defaultSiteData, ...data[0].data };
              setContent(remoteContent);
              localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteContent));
              setLastSyncTime(new Date().toLocaleTimeString());
            }
          }
        } catch (err) {
          console.warn('Supabase sync fetch error:', err);
        } finally {
          setIsSyncing(false);
        }
      }
    }

    fetchRemoteContent();
  }, [cloudConfig]);

  // Update specific field or section
  const updateContent = (updater) => {
    setContent((prev) => {
      const updated = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Storage quota or save error:', e);
      }

      // If cloud is connected, push update asynchronously
      if (cloudConfig && cloudConfig.provider === 'supabase' && cloudConfig.supabaseUrl && cloudConfig.supabaseAnonKey) {
        fetch(`${cloudConfig.supabaseUrl}/rest/v1/site_content`, {
          method: 'POST',
          headers: {
            apikey: cloudConfig.supabaseAnonKey,
            Authorization: `Bearer ${cloudConfig.supabaseAnonKey}`,
            'Content-Type': 'application/json',
            Prefer: 'resolution=merge-duplicates',
          },
          body: JSON.stringify({ id: 'main', data: updated, updated_at: new Date().toISOString() }),
        })
          .then((r) => {
            if (r.ok) setLastSyncTime(new Date().toLocaleTimeString());
          })
          .catch((err) => console.warn('Supabase cloud push error:', err));
      }

      return updated;
    });
  };

  // Reset to original defaults
  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setContent(defaultSiteData);
  };

  // Auth methods
  const loginAdmin = (password) => {
    // Default master passkey: debaldiet2026! (can be changed anytime in CMS settings)
    const storedPass = localStorage.getItem('debaldiet_admin_pass') || 'debaldiet2026!';
    if (password === storedPass) {
      setIsAdminLoggedIn(true);
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem(AUTH_KEY);
  };

  const saveCloudConfig = (config) => {
    setCloudConfig(config);
    if (config) {
      localStorage.setItem(CLOUD_SYNC_KEY, JSON.stringify(config));
    } else {
      localStorage.removeItem(CLOUD_SYNC_KEY);
    }
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        updateContent,
        resetToDefaults,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        cloudConfig,
        saveCloudConfig,
        isSyncing,
        lastSyncTime,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return ctx;
}
