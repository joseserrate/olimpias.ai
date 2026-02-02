import React from 'react';
import { Card } from './Card';
import { BulletList } from './BulletList';

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
    <Card className="h-full flex flex-col">
      {/* Number eyebrow */}
      <div className="text-[13px] font-medium tracking-[0.06em] text-[#86868B] mb-6">
        {number}
      </div>
      
      {/* Title */}
      <h3 className="text-[28px] md:text-[32px] font-semibold text-[#1D1D1F] mb-3 tracking-[-0.015em] leading-[1.15]">
        {title}
      </h3>
      
      {/* Keywords */}
      <p className="text-[14px] text-[#86868B] mb-8 font-normal tracking-[0.01em]">
        {keywords.join(' · ')}
      </p>
      
      {/* Bullets - using BulletList */}
      <div className="mb-10 flex-grow">
        <BulletList items={bullets} variant="primary" />
      </div>
      
      {/* Deliverable */}
      <div className="pt-6 border-t border-[#E0E0E6] mt-auto">
        <div className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-2">
          Entregable
        </div>
        <p className="text-[15px] text-[#1D1D1F] font-medium leading-[1.4]">
          {deliverable}
        </p>
      </div>
    </Card>
  );
};
