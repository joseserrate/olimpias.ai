'use client';

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
      {/* Number eyebrow */}
      <div 
        className="text-[11px] font-medium tracking-[0.15em] text-slate-400 uppercase"
        style={{ marginBottom: '12px' }}
      >
        {number}
      </div>
      
      {/* Title */}
      <h3 
        className="text-2xl sm:text-[28px] font-semibold text-slate-900 tracking-tight leading-tight"
        style={{ marginBottom: '8px' }}
      >
        {title}
      </h3>
      
      {/* Keywords */}
      <p 
        className="text-[13px] text-slate-500 font-normal tracking-wide"
        style={{ marginBottom: '16px' }}
      >
        {keywords.join(' · ')}
      </p>
      
      {/* Bullets */}
      <div className="flex-grow" style={{ marginBottom: '24px' }}>
        <BulletList items={bullets} />
      </div>
      
      {/* Deliverable - clear separation, premium treatment */}
      <div 
        className="border-t border-slate-200/50"
        style={{ paddingTop: 0 }}
      >
        <div 
          className="text-[11px] font-medium tracking-[0.15em] text-slate-400 uppercase"
          style={{ marginTop: 0, marginBottom: '12px' }}
        >
          Entregable
        </div>
        <p className="text-[15px] text-slate-900 font-medium leading-[1.6]">
          {deliverable}
        </p>
      </div>
    </Card>
  );
};
