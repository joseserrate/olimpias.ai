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
      <div className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-5">
        {number}
      </div>
      
      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-tight mb-3">
        {title}
      </h3>
      
      {/* Keywords */}
      <p className="text-sm text-slate-500 font-normal mb-6">
        {keywords.join(' · ')}
      </p>
      
      {/* Bullets - flex-grow pushes deliverable to bottom */}
      <div className="flex-grow mb-8">
        <BulletList items={bullets} />
      </div>
      
      {/* Deliverable - visually separated with consistent spacing */}
      <div className="pt-6 border-t border-slate-200/60 mt-auto">
        <div className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-2">
          Entregable
        </div>
        <p className="text-[15px] text-slate-900 font-medium leading-[1.7]">
          {deliverable}
        </p>
      </div>
    </Card>
  );
};
