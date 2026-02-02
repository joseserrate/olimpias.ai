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
    <Card className="h-full flex flex-col" hover={false}>
      {/* Number eyebrow - more space below */}
      <div className="text-[11px] font-medium tracking-[0.15em] text-slate-400 uppercase mb-8">
        {number}
      </div>
      
      {/* Title - larger, more prominent */}
      <h3 className="text-2xl sm:text-[28px] font-semibold text-slate-900 tracking-tight leading-tight mb-4">
        {title}
      </h3>
      
      {/* Keywords - more subtle, more space */}
      <p className="text-[13px] text-slate-500 font-normal mb-10 tracking-wide">
        {keywords.join(' · ')}
      </p>
      
      {/* Bullets - generous space around */}
      <div className="flex-grow mb-12">
        <BulletList items={bullets} />
      </div>
      
      {/* Deliverable - clear separation, premium treatment */}
      <div className="pt-8 border-t border-slate-200/50">
        <div className="text-[11px] font-medium tracking-[0.15em] text-slate-400 uppercase mb-3">
          Entregable
        </div>
        <p className="text-[15px] text-slate-900 font-medium leading-[1.6]">
          {deliverable}
        </p>
      </div>
    </Card>
  );
};
