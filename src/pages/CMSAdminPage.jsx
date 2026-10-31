import React, { useState } from 'react';
import { 
  Save, 
  RotateCcw, 
  LogOut, 
  Sliders, 
  Image as ImageIcon, 
  Type, 
  Database, 
  Check, 
  Sparkles, 
  Phone, 
  Car, 
  HelpCircle,
  ExternalLink,
  Layers,
  FileText
} from 'lucide-react';
import { useContent } from '../context/ContentContext';
import ImageField from '../components/cms/ImageField';

export default function CMSAdminPage() {
  const {
    content,
    updateContent,
    resetToDefaults,
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    cloudConfig,
    saveCloudConfig,
    isSyncing,
    lastSyncTime
  } = useContent();

  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('hero');
  const [saveAlert, setSaveAlert] = useState(false);

  // Cloud integration modal / fields
  const [supabaseUrl, setSupabaseUrl] = useState(cloudConfig?.supabaseUrl || '');
  const [supabaseKey, setSupabaseKey] = useState(cloudConfig?.supabaseAnonKey || '');
  const [cloudStatusMsg, setCloudStatusMsg] = useState('');

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const success = loginAdmin(passwordInput);
    if (success) {
      setLoginError('');
      setPasswordInput('');
    } else {
      setLoginError('Invalid Passkey. Please verify and try again.');
    }
  };

  const triggerSaveNotification = () => {
    setSaveAlert(true);
    setTimeout(() => setSaveAlert(false), 2500);
  };

  // 1. Unauthenticated Login Gate
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-[#001659] flex items-center justify-center p-6 font-body">
        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 sm:p-10 border border-white/10">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#ff5e14] text-white rounded-md mx-auto flex items-center justify-center font-heading font-black text-2xl mb-3 shadow-lg">
              DC
            </div>
            <h1 className="font-heading font-black text-2xl text-[#001659]">
              DeBaldiet CMS Portal
            </h1>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-heading">
              Secure Content Management Suite
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-2">
                Administrator Passkey
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter access code..."
                autoFocus
                className="w-full h-12 px-4 bg-[#f8f9fa] border border-[#d2d4d8] rounded-sm text-sm focus:outline-none focus:border-[#001659] focus:bg-white transition-all"
              />
              <p className="text-[11px] text-gray-400 mt-1.5">
                Default Master Passkey: <code className="text-[#ff5e14]">debaldiet2026!</code>
              </p>
            </div>

            {loginError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full h-12 bg-[#001659] hover:bg-[#ff5e14] text-white font-heading font-bold text-sm uppercase tracking-wider transition-colors duration-200 rounded-sm shadow-md"
            >
              Sign In to CMS
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <a
              href="/"
              className="text-xs font-heading font-bold text-gray-500 hover:text-[#001659] uppercase tracking-wider"
            >
              ← Back to Main Website
            </a>
          </div>
        </div>
      </div>
    );
  }

  // 2. Authenticated CMS Dashboard
  return (
    <div className="min-h-screen bg-[#f4f5f7] font-body text-[#303030]">
      {/* Top CMS Bar */}
      <header className="sticky top-0 z-50 bg-[#001659] text-white border-b border-white/10 px-6 py-3 shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-9 h-9 bg-[#ff5e14] text-white flex items-center justify-center font-heading font-black text-lg rounded-sm">
            DC
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-heading font-black text-lg leading-none">DeBaldiet CMS</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-400/30">
                LIVE EDITING
              </span>
            </div>
            <span className="text-[11px] text-white/60">
              Changes reflect instantaneously across all website pages
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {saveAlert && (
            <div className="bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-sm flex items-center space-x-1 animate-pulse">
              <Check className="w-3.5 h-3.5" />
              <span>Saved Successfully</span>
            </div>
          )}

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider rounded-sm transition-colors"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={logoutAdmin}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-red-600/80 hover:bg-red-600 text-white text-xs font-heading font-bold uppercase tracking-wider rounded-sm transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main CMS Container */}
      <div className="max-w-[1300px] mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-3 space-y-2">
          <div className="bg-white p-3 rounded-lg border border-[#e2e4e8] shadow-sm space-y-1">
            <span className="text-[10px] font-heading font-bold text-gray-400 uppercase tracking-widest px-3 py-1 block">
              CONTENT SECTIONS
            </span>

            {[
              { id: 'hero', label: 'Hero Slides & SUVs', icon: <Car className="w-4 h-4" /> },
              { id: 'pillars', label: '3 Core Verticals', icon: <Layers className="w-4 h-4" /> },
              { id: 'scheme', label: '70/30 Financing', icon: <Sliders className="w-4 h-4" /> },
              { id: 'about', label: 'About Page & Scope', icon: <Type className="w-4 h-4" /> },
              { id: 'contact', label: 'Company & Contact', icon: <Phone className="w-4 h-4" /> },
              { id: 'database', label: 'Cloud Database Sync', icon: <Database className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-md font-heading font-bold text-xs uppercase tracking-wider transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#001659] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className={activeTab === tab.id ? 'text-[#ff5e14]' : 'text-gray-400'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white p-4 rounded-lg border border-[#e2e4e8] shadow-sm space-y-3">
            <span className="text-[10px] font-heading font-bold text-gray-400 uppercase tracking-widest block">
              DATA RECOVERY
            </span>
            <button
              onClick={() => {
                if (window.confirm('Reset all website content back to factory defaults? Any custom edits will be reverted.')) {
                  resetToDefaults();
                  triggerSaveNotification();
                }
              }}
              className="w-full flex items-center justify-center space-x-2 py-2 px-3 border border-red-200 text-red-600 hover:bg-red-50 text-xs font-heading font-bold uppercase tracking-wider rounded-sm transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All to Defaults</span>
            </button>
          </div>
        </aside>

        {/* Content Form Editor Pane */}
        <main className="lg:col-span-9">
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#e2e4e8] shadow-sm">
            {/* 1. HERO SLIDES EDITOR */}
            {activeTab === 'hero' && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading font-black text-2xl text-[#001659]">
                    Hero Slider & Chinese SUV Imagery
                  </h2>
                  <p className="text-sm text-gray-500">
                    Edit headlines, descriptions, button text, and background images for the 3 homepage hero slides.
                  </p>
                </div>

                <div className="space-y-8 divide-y divide-gray-100">
                  {content.slides.map((slide, idx) => (
                    <div key={slide.id} className="pt-6 first:pt-0 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#ff5e14]">
                          Slide #{idx + 1} — {slide.pillar}
                        </span>
                      </div>

                      {/* Headline */}
                      <div>
                        <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                          Main Headline
                        </label>
                        <input
                          type="text"
                          value={slide.headline}
                          onChange={(e) => {
                            const newSlides = [...content.slides];
                            newSlides[idx].headline = e.target.value;
                            updateContent({ slides: newSlides });
                            triggerSaveNotification();
                          }}
                          className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm focus:outline-none focus:border-[#001659]"
                        />
                      </div>

                      {/* Body Description */}
                      <div>
                        <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                          Body Copy
                        </label>
                        <textarea
                          rows={3}
                          value={slide.body}
                          onChange={(e) => {
                            const newSlides = [...content.slides];
                            newSlides[idx].body = e.target.value;
                            updateContent({ slides: newSlides });
                            triggerSaveNotification();
                          }}
                          className="w-full p-3 bg-white border border-[#e8e8e9] rounded-sm text-sm focus:outline-none focus:border-[#001659]"
                        />
                      </div>

                      {/* Slide Image */}
                      <ImageField
                        label="Background Image (Upload new or specify URL / local file)"
                        value={slide.bgImage}
                        onChange={(newVal) => {
                          const newSlides = [...content.slides];
                          newSlides[idx].bgImage = newVal;
                          updateContent({ slides: newSlides });
                          triggerSaveNotification();
                        }}
                        helperText="Standard images: /chinese-suv-byd.jpg, /chinese-suv-geely.jpg, /chinese-suv-haval.jpg, /chinese-suv-tank300.jpg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. THREE CORE VERTICALS EDITOR */}
            {activeTab === 'pillars' && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading font-black text-2xl text-[#001659]">
                    Core Verticals & Service Pillars
                  </h2>
                  <p className="text-sm text-gray-500">
                    Edit titles, summaries, and imagery for the 3 main business pillars.
                  </p>
                </div>

                <div className="space-y-8 divide-y divide-gray-100">
                  {content.corePillars.map((pillar, idx) => (
                    <div key={pillar.id} className="pt-6 first:pt-0 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#ff5e14]">
                          {pillar.vertical}
                        </span>
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                          Pillar Title
                        </label>
                        <input
                          type="text"
                          value={pillar.title}
                          onChange={(e) => {
                            const newPillars = [...content.corePillars];
                            newPillars[idx].title = e.target.value;
                            updateContent({ corePillars: newPillars });
                            triggerSaveNotification();
                          }}
                          className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm focus:outline-none focus:border-[#001659]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                          Summary Description
                        </label>
                        <textarea
                          rows={2}
                          value={pillar.summary}
                          onChange={(e) => {
                            const newPillars = [...content.corePillars];
                            newPillars[idx].summary = e.target.value;
                            updateContent({ corePillars: newPillars });
                            triggerSaveNotification();
                          }}
                          className="w-full p-3 bg-white border border-[#e8e8e9] rounded-sm text-sm focus:outline-none focus:border-[#001659]"
                        />
                      </div>

                      <ImageField
                        label="Pillar Feature Image"
                        value={pillar.image}
                        onChange={(newVal) => {
                          const newPillars = [...content.corePillars];
                          newPillars[idx].image = newVal;
                          updateContent({ corePillars: newPillars });
                          triggerSaveNotification();
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. 70/30 FINANCING EDITOR */}
            {activeTab === 'scheme' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-black text-2xl text-[#001659]">
                    70/30 Split Financing Scheme
                  </h2>
                  <p className="text-sm text-gray-500">
                    Update the headline, introductory pitch, and the 4 breakdown steps.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                    Section Tagline
                  </label>
                  <input
                    type="text"
                    value={content.scheme7030.tagline}
                    onChange={(e) => {
                      updateContent({
                        scheme7030: { ...content.scheme7030, tagline: e.target.value }
                      });
                      triggerSaveNotification();
                    }}
                    className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm focus:outline-none focus:border-[#001659]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                    Main Headline
                  </label>
                  <input
                    type="text"
                    value={content.scheme7030.headline}
                    onChange={(e) => {
                      updateContent({
                        scheme7030: { ...content.scheme7030, headline: e.target.value }
                      });
                      triggerSaveNotification();
                    }}
                    className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm focus:outline-none focus:border-[#001659]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                    Scheme Overview Description
                  </label>
                  <textarea
                    rows={3}
                    value={content.scheme7030.intro}
                    onChange={(e) => {
                      updateContent({
                        scheme7030: { ...content.scheme7030, intro: e.target.value }
                      });
                      triggerSaveNotification();
                    }}
                    className="w-full p-3 bg-white border border-[#e8e8e9] rounded-sm text-sm focus:outline-none focus:border-[#001659]"
                  />
                </div>
              </div>
            )}

            {/* 4. ABOUT PAGE & VALUES EDITOR */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-black text-2xl text-[#001659]">
                    About Page, Story & Core Values
                  </h2>
                  <p className="text-sm text-gray-500">
                    Update company history, executive quote, and foundational values.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                    About Banner Sub-headline
                  </label>
                  <input
                    type="text"
                    value={content.about.subHeadline}
                    onChange={(e) => {
                      updateContent({
                        about: { ...content.about, subHeadline: e.target.value }
                      });
                      triggerSaveNotification();
                    }}
                    className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm focus:outline-none focus:border-[#001659]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                    Executive Profile Quote (Joshua King Kotey)
                  </label>
                  <textarea
                    rows={3}
                    value={content.about.leadership.quote}
                    onChange={(e) => {
                      updateContent({
                        about: {
                          ...content.about,
                          leadership: { ...content.about.leadership, quote: e.target.value }
                        }
                      });
                      triggerSaveNotification();
                    }}
                    className="w-full p-3 bg-white border border-[#e8e8e9] rounded-sm text-sm focus:outline-none focus:border-[#001659]"
                  />
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-4">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#001659]">
                    The 4 Foundational Pillars
                  </h3>
                  {content.about.coreValues.map((val, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-sm space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-5 h-5 rounded-full bg-[#001659] text-white flex items-center justify-center text-[10px] font-bold">
                          {idx + 1}
                        </span>
                        <input
                          type="text"
                          value={val.value}
                          onChange={(e) => {
                            const newVals = [...content.about.coreValues];
                            newVals[idx].value = e.target.value;
                            updateContent({ about: { ...content.about, coreValues: newVals } });
                            triggerSaveNotification();
                          }}
                          className="flex-1 h-9 px-3 bg-white border border-gray-300 text-xs font-bold font-heading uppercase text-[#001659]"
                        />
                      </div>
                      <textarea
                        rows={2}
                        value={val.meaning}
                        onChange={(e) => {
                          const newVals = [...content.about.coreValues];
                          newVals[idx].meaning = e.target.value;
                          updateContent({ about: { ...content.about, coreValues: newVals } });
                          triggerSaveNotification();
                        }}
                        className="w-full p-2.5 bg-white border border-gray-300 text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. COMPANY & CONTACT INFO */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-black text-2xl text-[#001659]">
                    Company Information & Hotlines
                  </h2>
                  <p className="text-sm text-gray-500">
                    Edit phone numbers, WhatsApp, emails, location, and operating schedule.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                      Office Location
                    </label>
                    <input
                      type="text"
                      value={content.company.headquarters}
                      onChange={(e) => {
                        updateContent({
                          company: { ...content.company, headquarters: e.target.value, address: e.target.value }
                        });
                        triggerSaveNotification();
                      }}
                      className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                      Phone Hotline
                    </label>
                    <input
                      type="text"
                      value={content.company.phoneHotline}
                      onChange={(e) => {
                        updateContent({
                          company: { ...content.company, phoneHotline: e.target.value }
                        });
                        triggerSaveNotification();
                      }}
                      className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                      WhatsApp Channel
                    </label>
                    <input
                      type="text"
                      value={content.company.whatsapp}
                      onChange={(e) => {
                        updateContent({
                          company: { ...content.company, whatsapp: e.target.value }
                        });
                        triggerSaveNotification();
                      }}
                      className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                      Official Email
                    </label>
                    <input
                      type="email"
                      value={content.company.email}
                      onChange={(e) => {
                        updateContent({
                          company: { ...content.company, email: e.target.value }
                        });
                        triggerSaveNotification();
                      }}
                      className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                    Operating Schedule
                  </label>
                  <input
                    type="text"
                    value={content.company.hours}
                    onChange={(e) => {
                      updateContent({
                        company: { ...content.company, hours: e.target.value }
                      });
                      triggerSaveNotification();
                    }}
                    className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm"
                  />
                </div>
              </div>
            )}

            {/* 6. CLOUD DATABASE SYNC (SUPABASE / POSTGRES) */}
            {activeTab === 'database' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-black text-2xl text-[#001659]">
                    Cloud Database Real-Time Sync
                  </h2>
                  <p className="text-sm text-gray-500">
                    Connect your free Supabase or PostgreSQL cloud project so edits synchronize in real-time across every computer, phone, and browser automatically.
                  </p>
                </div>

                <div className="p-5 bg-blue-50 border border-blue-200 rounded-sm space-y-3 text-xs text-blue-900">
                  <div className="font-heading font-bold uppercase tracking-wider flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-[#ff5e14]" />
                    <span>How it works</span>
                  </div>
                  <p>
                    1. Create a free project at <a href="https://supabase.com" target="_blank" rel="noreferrer" className="underline font-bold">supabase.com</a>.
                  </p>
                  <p>
                    2. In the Supabase SQL editor, run: <br />
                    <code className="bg-white/80 p-1.5 rounded block my-1 font-mono text-[11px] select-all">
                      create table if not exists site_content (id text primary key, data jsonb, updated_at timestamptz default now());
                      insert into site_content (id, data) values ('main', '{}'::jsonb) on conflict do nothing;
                      alter table site_content enable row level security;
                      create policy "Public read" on site_content for select using (true);
                      create policy "Allow all updates" on site_content for all using (true) with check (true);
                    </code>
                  </p>
                  <p>
                    3. Paste your <strong>Project URL</strong> and <strong>anon public API key</strong> below:
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                      Supabase Project URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://xyzcompany.supabase.co"
                      value={supabaseUrl}
                      onChange={(e) => setSupabaseUrl(e.target.value)}
                      className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-1">
                      Supabase Anon Public API Key
                    </label>
                    <input
                      type="password"
                      placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                      value={supabaseKey}
                      onChange={(e) => setSupabaseKey(e.target.value)}
                      className="w-full h-11 px-3.5 bg-white border border-[#e8e8e9] rounded-sm text-sm"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (!supabaseUrl || !supabaseKey) {
                          setCloudStatusMsg('Please fill in both Supabase URL and Anon Key.');
                          return;
                        }
                        saveCloudConfig({
                          provider: 'supabase',
                          supabaseUrl: supabaseUrl.trim(),
                          supabaseAnonKey: supabaseKey.trim(),
                        });
                        setCloudStatusMsg('Cloud credentials saved! Content will now synchronize automatically.');
                        setTimeout(() => setCloudStatusMsg(''), 4000);
                      }}
                      className="h-11 px-6 bg-[#001659] hover:bg-[#ff5e14] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-sm transition-colors"
                    >
                      Connect & Save Cloud Keys
                    </button>

                    {cloudConfig && (
                      <button
                        type="button"
                        onClick={() => {
                          saveCloudConfig(null);
                          setSupabaseUrl('');
                          setSupabaseKey('');
                          setCloudStatusMsg('Disconnected from cloud. CMS will operate locally.');
                        }}
                        className="h-11 px-4 border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-heading font-bold uppercase tracking-wider rounded-sm transition-colors"
                      >
                        Disconnect Cloud
                      </button>
                    )}
                  </div>

                  {cloudStatusMsg && (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-sm">
                      {cloudStatusMsg}
                    </div>
                  )}

                  {lastSyncTime && (
                    <p className="text-xs text-gray-500">
                      Last synchronized with cloud at: <strong>{lastSyncTime}</strong>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
