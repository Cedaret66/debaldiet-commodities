import React from 'react';
import { useCms } from '../../context/CmsContext';
import {
  Edit3,
  Eye,
  Save,
  RotateCcw,
  Sliders,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles
} from 'lucide-react';

export default function AdminToolbar() {
  const {
    isAuthenticated,
    isEditMode,
    toggleEditMode,
    isDirty,
    isSaving,
    saveChanges,
    discardChanges,
    setIsDrawerOpen,
    logout,
    toastMessage,
  } = useCms();

  if (!isAuthenticated) return null;

  return (
    <>
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-[110] animate-fadeIn font-body">
          <div
            className={`px-4 py-2.5 rounded-full backdrop-blur-xl border flex items-center gap-2.5 shadow-2xl text-xs sm:text-sm font-bold tracking-wide ${
              toastMessage.type === 'warning'
                ? 'bg-amber-500/90 border-amber-400 text-white'
                : toastMessage.type === 'info'
                ? 'bg-sky-600/90 border-sky-400 text-white'
                : 'bg-emerald-600/95 border-emerald-400 text-white'
            }`}
          >
            {toastMessage.type === 'warning' ? (
              <AlertCircle className="w-4 h-4 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 shrink-0" />
            )}
            <span>{toastMessage.message}</span>
          </div>
        </div>
      )}

      {/* Floating Bottom Admin Control Capsule (Just like in the screenshot) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] max-w-[95vw] font-body select-none">
        <div className="bg-[#001659]/95 backdrop-blur-2xl border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 sm:gap-3 shadow-[0_12px_40px_rgba(0,0,0,0.6)] text-white">
          
          {/* Admin Status Pill */}
          <div className="flex items-center gap-2 pr-2 border-r border-white/15 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-heading font-black tracking-widest uppercase text-white">CMS</span>
          </div>

          {/* Edit Mode Toggle */}
          <button
            type="button"
            onClick={toggleEditMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all ${
              isEditMode
                ? 'bg-[#ff5e14] text-white shadow-md shadow-[#ff5e14]/40 ring-2 ring-white/20'
                : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
            }`}
            title="Toggle between in-place editing and preview"
          >
            {isEditMode ? (
              <>
                <Edit3 className="w-3.5 h-3.5" />
                <span>Editing ON</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Preview Mode</span>
              </>
            )}
          </button>

          {/* Master Drawer Button */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider transition-all"
            title="Open Master Content Drawer"
          >
            <Sliders className="w-3.5 h-3.5 text-[#ff5e14]" />
            <span className="hidden sm:inline">Sections</span>
          </button>

          {/* Save Changes Button */}
          <button
            type="button"
            onClick={saveChanges}
            disabled={isSaving || !isDirty}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all ${
              isDirty
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md animate-pulse'
                : 'bg-white/5 text-white/40 cursor-default'
            }`}
            title={isDirty ? 'Click to publish all unsaved edits live' : 'All changes saved'}
          >
            {isSaving ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Save className="w-3.5 h-3.5" />
            )}
            <span>{isDirty ? 'Save Edits' : 'Saved'}</span>
          </button>

          {/* Discard Edits (Only shown if changes made) */}
          {isDirty && (
            <button
              type="button"
              onClick={discardChanges}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
              title="Discard unsaved changes"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Logout Button */}
          <div className="pl-1 border-l border-white/15">
            <button
              type="button"
              onClick={logout}
              className="p-1.5 rounded-full bg-white/5 hover:bg-red-500/20 text-white/60 hover:text-red-400 transition-colors"
              title="Log out of CMS"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
