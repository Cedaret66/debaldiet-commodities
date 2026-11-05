import React from 'react';
import { useCms } from '../../context/CmsContext';
import { Bookmark, Eye, Sliders } from 'lucide-react';

export default function CmsSection({
  id,
  name,
  children,
  className = '',
  as: Component = 'section',
  ...rest
}) {
  const { isEditMode, setIsDrawerOpen } = useCms();

  if (!isEditMode) {
    return (
      <Component id={id} data-cms-section={name} className={className} {...rest}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      id={id}
      data-cms-section={name}
      data-cms-section-id={id}
      className={`relative group/cms-section outline-2 outline-dashed outline-[#ff5e14]/50 hover:outline-[#ff5e14] transition-all duration-200 ${className}`}
      {...rest}
    >
      {/* Sleek Admin Demarcation Banner */}
      <div className="absolute top-2 left-2 z-40 flex items-center gap-1.5 bg-[#001659]/90 hover:bg-[#001659] text-white backdrop-blur-md px-3 py-1 rounded shadow-lg border border-white/20 select-none text-[11px] font-heading font-bold uppercase tracking-wider transition-opacity opacity-85 group-hover/cms-section:opacity-100">
        <Bookmark className="w-3.5 h-3.5 text-[#ff5e14]" />
        <span>SECTION: {name}</span>
        <span className="text-white/40 text-[9px] font-mono">#{id}</span>
      </div>

      {children}
    </Component>
  );
}
