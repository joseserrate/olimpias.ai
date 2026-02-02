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
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 items-start">
          {/* Bullet dot - aligned to first line with mt-[0.45em] */}
          <span className="inline-block w-2 h-2 rounded-full bg-[#5B3DF5] flex-shrink-0 mt-[0.45em]"></span>
          {/* Text */}
          <span className="text-slate-700 leading-relaxed flex-1">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
