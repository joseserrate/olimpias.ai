import React from 'react';

interface BulletListProps {
  items: string[];
  className?: string;
}

/**
 * BulletList using FLEX layout with pixel-perfect alignment:
 * - Dot positioned with exact pixel margin-top
 * - Aligns with text optical baseline
 */
export const BulletList: React.FC<BulletListProps> = ({ 
  items,
  className = ''
}) => {
  return (
    <ul className={`space-y-3 list-none m-0 p-0 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          {/* Bullet dot - aligned with text baseline using pixel margin */}
          <span 
            className="inline-block w-[6px] h-[6px] rounded-full bg-[#5B3DF5] flex-shrink-0"
            style={{ marginTop: '8px' }}
            aria-hidden="true"
          ></span>
          {/* Text - flex-1 allows wrapping */}
          <span className="block text-[15px] text-slate-700 leading-[1.7] flex-1">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
