import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [project]);

  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      className="m-auto rounded-none border-t-4 border-brand-orange bg-white p-0 shadow-2xl max-w-3xl w-[94vw] text-brand-navy"
    >
      <div className="relative">
        {/* Project Image */}
        <div className="relative aspect-[16/9] w-full bg-brand-navy overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-navy/80 hover:bg-brand-orange text-white flex items-center justify-center transition-colors shadow-lg"
            aria-label="Close Project Details"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 bg-brand-orange text-white font-heading font-bold uppercase text-xs tracking-widest px-3 py-1">
            {project.category}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6 sm:p-8">
          <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-brand-navy mb-4">
            {project.title}
          </h2>

          <p className="font-body text-base text-brand-text leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-b border-gray-200 mb-6 text-xs font-heading">
            <div>
              <span className="text-gray-400 uppercase tracking-wider block">Client</span>
              <span className="font-bold uppercase text-brand-navy">Industrial Corp Ltd</span>
            </div>
            <div>
              <span className="text-gray-400 uppercase tracking-wider block">Year</span>
              <span className="font-bold uppercase text-brand-navy">2023 - 2024</span>
            </div>
            <div>
              <span className="text-gray-400 uppercase tracking-wider block">Location</span>
              <span className="font-bold uppercase text-brand-navy">New York, NY</span>
            </div>
            <div>
              <span className="text-gray-400 uppercase tracking-wider block">Sector</span>
              <span className="font-bold uppercase text-brand-navy">{project.category}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-brand-orange" />
              <span>Full compliance & engineering warranty</span>
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="btn-primary w-full sm:w-auto text-xs"
            >
              <span>Inquire About Similar Project</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
