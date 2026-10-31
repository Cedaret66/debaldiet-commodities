import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Clock, Truck, Award } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import EditableText from './cms/EditableText';

export default function ProjectManagement() {
  const { content } = useCms();
  const scheme7030 = content.scheme7030 || {};
  const operationalExcellence = content.operationalExcellence || [];

  return (
    <section id="car-import" className="w-full py-[110px] bg-[#f8f9fa] border-y border-[#e8e8e9] font-body">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="font-heading uppercase text-[13px] font-bold tracking-[2px] text-[#ff5e14] block mb-3">
            <EditableText path="scheme7030.tagline" as="span">
              {scheme7030.tagline || '70/30 SPLIT FINANCING FOR VEHICLE IMPORTS'}
            </EditableText>
          </span>
          <EditableText
            path="scheme7030.headline"
            as="h2"
            className="font-heading font-black text-[36px] sm:text-[48px] lg:text-[54px] text-[#001659] leading-[1.12] mb-5 block"
          >
            {scheme7030.headline || "Don't Have the Full Amount Upfront? Our 70/30 Plan Closes the Gap."}
          </EditableText>
          <EditableText
            path="scheme7030.intro"
            as="p"
            multiline
            className="font-body text-[17px] text-[#565969] leading-relaxed block"
          >
            {scheme7030.intro || 'Many buyers want a quality Chinese SUV or vehicle but do not have 100% of the capital ready today.'}
          </EditableText>
        </div>

        {/* 4-Step Progressive Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {(scheme7030.steps || []).map((item, idx) => (
            <div
              key={item.step || idx}
              className="relative bg-white p-7 border border-[#e8e8e9] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#001659] text-white flex items-center justify-center font-heading font-black text-lg mb-5">
                  {item.step || idx + 1}
                </div>
                <EditableText
                  path={`scheme7030.steps[${idx}].title`}
                  as="h3"
                  className="font-heading font-bold text-[20px] text-[#001659] mb-3 block"
                >
                  {item.title}
                </EditableText>
                <EditableText
                  path={`scheme7030.steps[${idx}].desc`}
                  as="p"
                  multiline
                  className="font-body text-[14px] text-[#565969] leading-relaxed block"
                >
                  {item.desc}
                </EditableText>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center text-xs font-heading font-bold text-[#ff5e14] uppercase tracking-wider">
                <span>Phase 0{item.step || idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Excellence & Dual-Stage Inspection */}
        <div className="bg-white border border-[#e8e8e9] p-8 lg:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-gray-100">
            <div>
              <span className="font-heading uppercase text-[12px] font-bold tracking-[2px] text-[#ff5e14] block mb-1">
                TRUST BADGES
              </span>
              <h3 className="font-heading font-black text-[26px] sm:text-[32px] text-[#001659]">
                Operational Excellence & Dual-Stage Inspection
              </h3>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-heading font-bold uppercase tracking-widest text-[#ff5e14]">
              <ShieldCheck className="w-5 h-5 text-[#ff5e14]" />
              <span>Full Accountability Guarantee</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {operationalExcellence.map((op, idx) => (
              <div key={idx} className="space-y-3">
                <EditableText
                  path={`operationalExcellence[${idx}].stage`}
                  as="span"
                  className="font-heading uppercase text-[11px] font-bold tracking-[1.5px] text-[#ff5e14] block"
                >
                  {op.stage}
                </EditableText>
                <EditableText
                  path={`operationalExcellence[${idx}].title`}
                  as="h4"
                  className="font-heading font-bold text-[20px] text-[#001659] block"
                >
                  {op.title}
                </EditableText>
                <EditableText
                  path={`operationalExcellence[${idx}].desc`}
                  as="p"
                  multiline
                  className="font-body text-[14px] text-[#565969] leading-relaxed block"
                >
                  {op.desc}
                </EditableText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
