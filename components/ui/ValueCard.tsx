import React from 'react';

interface ValueCardProps {
  number: string;
  title: string;
  keywords: string[];
  bullets: string[];
  deliverable: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ 
  number,
  title, 
  keywords, 
  bullets, 
  deliverable,
}) => {
  return (
    <div className="group relative bg-white border border-[#E0E0E6] rounded-xl p-10 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#D2D2D7] h-full flex flex-col">
      {/* Number eyebrow */}
      <div className="text-[13px] font-medium tracking-[0.06em] text-[#86868B] mb-8">
        {number}
      </div>
      
      {/* Title */}
      <h3 className="text-[32px] md:text-[36px] font-semibold text-[#1D1D1F] mb-4 tracking-[-0.015em] leading-[1.1]">
        {title}
      </h3>
      
      {/* Keywords */}
      <p className="text-[15px] text-[#86868B] mb-8 font-normal tracking-[0.01em]">
        {keywords.join(' · ')}
      </p>
      
      {/* Bullets */}
      <ul className="space-y-3 mb-10 flex-grow">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex gap-3 items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5B3DF5] flex-shrink-0 mt-2"></span>
            <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">{bullet}</span>
          </li>
        ))}
      </ul>
      
      {/* Deliverable */}
      <div className="pt-6 border-t border-[#E0E0E6]">
        <div className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-2">
          Entregable
        </div>
        <p className="text-[15px] text-[#1D1D1F] font-medium leading-[1.4]">
          {deliverable}
        </p>
      </div>
    </div>
  );
};
