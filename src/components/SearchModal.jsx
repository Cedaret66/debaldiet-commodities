import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function SearchModal({ isOpen, onClose, onSelectProject }) {
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Handle native dialog open / close
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Handle click on backdrop to close
  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  // Search results
  const q = query.toLowerCase().trim();
  const matchedProjects = q ? siteData.projects.filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) : [];
  const matchedServices = q ? siteData.servicesDetailedList.filter(s => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) : [];
  const matchedNews = q ? siteData.blogArticles.filter(n => n.title.toLowerCase().includes(q) || n.category?.toLowerCase().includes(q)) : [];

  const totalMatches = matchedProjects.length + matchedServices.length + matchedNews.length;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      className="m-auto rounded-none border-t-4 border-brand-orange bg-white p-0 shadow-2xl max-w-2xl w-[92vw] text-brand-navy"
    >
      <div className="p-6 sm:p-8">
        {/* Header & Close */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-brand-orange" />
            <span className="font-heading uppercase text-xs font-bold tracking-widest text-brand-navy">
              Search Bridge Website
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-brand-orange hover:bg-gray-100 transition-colors"
            aria-label="Close Search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type keywords (e.g. Planning, Interior, Projects, Mining)..."
            className="w-full text-base sm:text-lg border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-orange text-brand-navy font-heading font-medium"
          />
        </div>

        {/* Results Area */}
        <div className="max-h-[360px] overflow-y-auto space-y-4">
          {q && totalMatches === 0 && (
            <p className="text-sm text-gray-500 py-6 text-center">
              No results found for "{query}". Try searching for "Contracting", "Planning", or "Architecture".
            </p>
          )}

          {!q && (
            <div className="py-4 text-xs text-gray-400 font-heading uppercase tracking-wider">
              Popular searches: <span className="text-brand-orange cursor-pointer hover:underline" onClick={() => setQuery('Planning')}>Planning</span>, <span className="text-brand-orange cursor-pointer hover:underline" onClick={() => setQuery('Contracting')}>Contracting</span>, <span className="text-brand-orange cursor-pointer hover:underline" onClick={() => setQuery('Buildings')}>Buildings</span>
            </div>
          )}

          {/* Matched Projects */}
          {matchedProjects.length > 0 && (
            <div>
              <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-brand-orange block mb-2">
                Projects ({matchedProjects.length})
              </span>
              <div className="space-y-2">
                {matchedProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onSelectProject && onSelectProject(p);
                    }}
                    className="flex items-center justify-between p-3 bg-gray-50 hover:bg-brand-navy hover:text-white cursor-pointer transition-colors group"
                  >
                    <div>
                      <div className="font-heading font-bold text-sm uppercase">{p.title}</div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-300">{p.category}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-orange" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Services */}
          {matchedServices.length > 0 && (
            <div>
              <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-brand-orange block mb-2">
                Services ({matchedServices.length})
              </span>
              <div className="space-y-2">
                {matchedServices.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => {
                      onClose();
                      navigate('/our-services');
                    }}
                    className="flex items-center justify-between p-3 bg-gray-50 hover:bg-brand-navy hover:text-white cursor-pointer transition-colors group"
                  >
                    <div>
                      <div className="font-heading font-bold text-sm uppercase">{s.title}</div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-300">{s.description.slice(0, 60)}...</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-orange" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched News */}
          {matchedNews.length > 0 && (
            <div>
              <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-brand-orange block mb-2">
                Articles ({matchedNews.length})
              </span>
              <div className="space-y-2">
                {matchedNews.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => {
                      onClose();
                      navigate('/blog');
                    }}
                    className="flex items-center justify-between p-3 bg-gray-50 hover:bg-brand-navy hover:text-white cursor-pointer transition-colors group"
                  >
                    <div>
                      <div className="font-heading font-bold text-sm uppercase">{n.title}</div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-300">{n.category}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-orange" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
