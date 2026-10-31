import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import {
  X,
  Sliders,
  Car,
  Layers,
  Sparkles,
  Phone,
  Type,
  RotateCcw,
  Save,
  Check,
  Upload,
  ExternalLink,
  Database,
  Wrench,
  Building2,
  Users
} from 'lucide-react';
import ImageField from './ImageField';

export default function CmsDrawer() {
  const {
    isDrawerOpen,
    setIsDrawerOpen,
    content,
    updateContent,
    saveChanges,
    isDirty,
    isSaving,
    resetToDefault,
    cloudConfig,
    saveCloudConfig
  } = useCms();

  const [activeTab, setActiveTab] = useState('hero');
  const [supabaseUrl, setSupabaseUrl] = useState(cloudConfig?.supabaseUrl || '');
  const [supabaseKey, setSupabaseKey] = useState(cloudConfig?.supabaseAnonKey || '');

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[115] flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn font-body">
      <div className="w-full max-w-xl h-full bg-[#f8f9fa] border-l border-gray-300 flex flex-col shadow-2xl overflow-hidden text-[#303030]">
        {/* Header */}
        <div className="p-5 border-b border-gray-200 bg-[#001659] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#ff5e14] flex items-center justify-center font-heading font-black text-white">
              DC
            </div>
            <div>
              <h2 className="text-base font-heading font-black text-white">CMS Sections Panel</h2>
              <p className="text-xs text-white/60">Edit website data or configure cloud database</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={resetToDefault}
              className="p-1.5 rounded bg-white/10 hover:bg-red-500/20 text-white/60 hover:text-red-400 transition-colors"
              title="Reset to factory defaults"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Close panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="flex gap-1 p-2 bg-[#e8e8e9] overflow-x-auto border-b border-gray-300 shrink-0">
          {[
            { id: 'hero', label: 'Hero Slides', icon: Car },
            { id: 'pillars', label: '3 Verticals', icon: Layers },
            { id: 'scheme', label: '70/30 Plan', icon: Sliders },
            { id: 'about', label: 'About & Values', icon: Type },
            { id: 'buyandspec', label: 'Buy & Spec', icon: Wrench },
            { id: 'partnerships', label: 'Partnerships', icon: Building2 },
            { id: 'team', label: 'Team', icon: Users },
            { id: 'contact', label: 'Contact', icon: Phone },
            { id: 'cloud', label: 'Cloud DB', icon: Database },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#001659] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-white hover:text-[#001659]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${activeTab === tab.id ? 'text-[#ff5e14]' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Body Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Hero Tab */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              {content.slides.map((slide, idx) => (
                <div key={slide.id} className="p-4 bg-white border border-gray-200 rounded-md shadow-sm space-y-3">
                  <span className="text-xs font-heading font-bold text-[#ff5e14] uppercase tracking-wider block">
                    Slide #{idx + 1} ({slide.pillar})
                  </span>
                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                      Headline
                    </label>
                    <input
                      type="text"
                      value={slide.headline}
                      onChange={(e) => {
                        const newSlides = [...content.slides];
                        newSlides[idx].headline = e.target.value;
                        updateContent({ slides: newSlides });
                      }}
                      className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                      Body Copy
                    </label>
                    <textarea
                      rows={2}
                      value={slide.body}
                      onChange={(e) => {
                        const newSlides = [...content.slides];
                        newSlides[idx].body = e.target.value;
                        updateContent({ slides: newSlides });
                      }}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded text-xs"
                    />
                  </div>
                  <ImageField
                    label="Background SUV Image"
                    value={slide.bgImage}
                    onChange={(newVal) => {
                      const newSlides = [...content.slides];
                      newSlides[idx].bgImage = newVal;
                      updateContent({ slides: newSlides });
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Pillars Tab */}
          {activeTab === 'pillars' && (
            <div className="space-y-6">
              {content.corePillars.map((pillar, idx) => (
                <div key={pillar.id} className="p-4 bg-white border border-gray-200 rounded-md shadow-sm space-y-3">
                  <span className="text-xs font-heading font-bold text-[#ff5e14] uppercase tracking-wider block">
                    {pillar.vertical}
                  </span>
                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={pillar.title}
                      onChange={(e) => {
                        const newPillars = [...content.corePillars];
                        newPillars[idx].title = e.target.value;
                        updateContent({ corePillars: newPillars });
                      }}
                      className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                      Summary
                    </label>
                    <textarea
                      rows={2}
                      value={pillar.summary}
                      onChange={(e) => {
                        const newPillars = [...content.corePillars];
                        newPillars[idx].summary = e.target.value;
                        updateContent({ corePillars: newPillars });
                      }}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded text-xs"
                    />
                  </div>
                  <ImageField
                    label="Feature Image"
                    value={pillar.image}
                    onChange={(newVal) => {
                      const newPillars = [...content.corePillars];
                      newPillars[idx].image = newVal;
                      updateContent({ corePillars: newPillars });
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Scheme 70/30 Tab */}
          {activeTab === 'scheme' && (
            <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm space-y-4">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Headline
                </label>
                <input
                  type="text"
                  value={content.scheme7030.headline}
                  onChange={(e) =>
                    updateContent({ scheme7030: { ...content.scheme7030, headline: e.target.value } })
                  }
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Overview Copy
                </label>
                <textarea
                  rows={3}
                  value={content.scheme7030.intro}
                  onChange={(e) =>
                    updateContent({ scheme7030: { ...content.scheme7030, intro: e.target.value } })
                  }
                  className="w-full p-2.5 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
            </div>
          )}

          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm space-y-4">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Sub-Headline
                </label>
                <input
                  type="text"
                  value={content.about.subHeadline}
                  onChange={(e) =>
                    updateContent({ about: { ...content.about, subHeadline: e.target.value } })
                  }
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Executive Quote (Joshua King Kotey)
                </label>
                <textarea
                  rows={3}
                  value={content.about.leadership.quote}
                  onChange={(e) =>
                    updateContent({
                      about: {
                        ...content.about,
                        leadership: { ...content.about.leadership, quote: e.target.value },
                      },
                    })
                  }
                  className="w-full p-2.5 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
            </div>
          )}

          {/* Buy & Spec Tab */}
          {activeTab === 'buyandspec' && (
            <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm space-y-4">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  value={content.buyAndSpec?.hero?.tagline || ''}
                  onChange={(e) =>
                    updateContent({
                      buyAndSpec: {
                        ...content.buyAndSpec,
                        hero: { ...content.buyAndSpec?.hero, tagline: e.target.value }
                      }
                    })
                  }
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Headline
                </label>
                <input
                  type="text"
                  value={content.buyAndSpec?.hero?.headline || ''}
                  onChange={(e) =>
                    updateContent({
                      buyAndSpec: {
                        ...content.buyAndSpec,
                        hero: { ...content.buyAndSpec?.hero, headline: e.target.value }
                      }
                    })
                  }
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Intro Description
                </label>
                <textarea
                  rows={3}
                  value={content.buyAndSpec?.hero?.intro || ''}
                  onChange={(e) =>
                    updateContent({
                      buyAndSpec: {
                        ...content.buyAndSpec,
                        hero: { ...content.buyAndSpec?.hero, intro: e.target.value }
                      }
                    })
                  }
                  className="w-full p-2.5 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
            </div>
          )}

          {/* Partnerships Tab */}
          {activeTab === 'partnerships' && (
            <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm space-y-4">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Headline
                </label>
                <input
                  type="text"
                  value={content.partnerships?.headline || ''}
                  onChange={(e) =>
                    updateContent({
                      partnerships: { ...content.partnerships, headline: e.target.value }
                    })
                  }
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Executive Proposal Summary
                </label>
                <textarea
                  rows={3}
                  value={content.partnerships?.summary || ''}
                  onChange={(e) =>
                    updateContent({
                      partnerships: { ...content.partnerships, summary: e.target.value }
                    })
                  }
                  className="w-full p-2.5 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm space-y-4">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Managing Director Name
                </label>
                <input
                  type="text"
                  value={content.about?.leadership?.name || ''}
                  onChange={(e) =>
                    updateContent({
                      about: {
                        ...content.about,
                        leadership: { ...content.about?.leadership, name: e.target.value }
                      }
                    })
                  }
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Managing Director Role
                </label>
                <input
                  type="text"
                  value={content.about?.leadership?.role || ''}
                  onChange={(e) =>
                    updateContent({
                      about: {
                        ...content.about,
                        leadership: { ...content.about?.leadership, role: e.target.value }
                      }
                    })
                  }
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm space-y-4">
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Office Location
                </label>
                <input
                  type="text"
                  value={content.company.headquarters}
                  onChange={(e) =>
                    updateContent({
                      company: { ...content.company, headquarters: e.target.value, address: e.target.value },
                    })
                  }
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Phone Hotline
                </label>
                <input
                  type="text"
                  value={content.company.phoneHotline}
                  onChange={(e) =>
                    updateContent({
                      company: { ...content.company, phoneHotline: e.target.value },
                    })
                  }
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  WhatsApp
                </label>
                <input
                  type="text"
                  value={content.company.whatsapp}
                  onChange={(e) =>
                    updateContent({
                      company: { ...content.company, whatsapp: e.target.value },
                    })
                  }
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
            </div>
          )}

          {/* Cloud Sync Tab */}
          {activeTab === 'cloud' && (
            <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm space-y-4">
              <span className="text-xs font-heading font-bold text-[#001659] uppercase tracking-wider block">
                Connect Free Supabase Project
              </span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Add your Supabase project credentials to synchronize in-place edits across all devices automatically.
              </p>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Supabase Project URL
                </label>
                <input
                  type="text"
                  value={supabaseUrl}
                  onChange={(e) => setSupabaseUrl(e.target.value)}
                  placeholder="https://xyz.supabase.co"
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase text-[#001659] mb-1">
                  Anon API Key
                </label>
                <input
                  type="password"
                  value={supabaseKey}
                  onChange={(e) => setSupabaseKey(e.target.value)}
                  placeholder="eyJhbGci..."
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded text-xs"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  saveCloudConfig({
                    provider: 'supabase',
                    supabaseUrl: supabaseUrl.trim(),
                    supabaseAnonKey: supabaseKey.trim(),
                  });
                  alert('Cloud keys saved!');
                }}
                className="w-full h-10 bg-[#001659] hover:bg-[#ff5e14] text-white text-xs font-heading font-bold uppercase tracking-wider rounded transition-colors"
              >
                Save Cloud Credentials
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gray-300 bg-white flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(false)}
            className="px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider text-gray-600 hover:text-gray-900"
          >
            Close
          </button>
          <button
            type="button"
            onClick={saveChanges}
            disabled={!isDirty || isSaving}
            className={`px-6 py-2.5 rounded text-xs font-heading font-bold uppercase tracking-wider text-white transition-all flex items-center gap-1.5 ${
              isDirty ? 'bg-[#ff5e14] hover:bg-[#e04e0a] shadow-md' : 'bg-gray-300 cursor-default'
            }`}
          >
            <Save className="w-3.5 h-3.5" />
            <span>{isDirty ? 'Publish Changes Live' : 'All Changes Saved'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
