import React from 'react';

interface BulletListProps {
  items: string[];
  className?: string;
}

export const BulletList: React.FC<BulletListProps> = ({ 
  items,
  className = ''
}) => {
  return (
    <ul className={`space-y-3 list-none p-0 m-0 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="grid grid-cols-[12px,1fr] gap-3 items-start">
          {/* Bullet dot - aligned with mt-[0.55em] to match text baseline */}
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#5B3DF5] flex-shrink-0 mt-[0.55em]"></span>
          {/* Text with proper leading */}
          <span className="text-slate-700 leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
