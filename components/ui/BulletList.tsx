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
    <ul className={`space-y-4 list-none p-0 m-0 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          {/* Bullet dot - aligned with mt-2 to match leading-relaxed baseline */}
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#5B3DF5] flex-shrink-0 mt-2"></span>
          {/* Text with proper leading for alignment */}
          <span className="text-slate-700 leading-relaxed flex-1">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
