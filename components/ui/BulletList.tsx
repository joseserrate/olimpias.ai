import React from 'react';

interface BulletListProps {
  items: string[];
  className?: string;
}

/**
 * BulletList with GUARANTEED no-overlap:
 * - Dot positioned BELOW baseline to avoid overlap
 * - Extra left padding for safety
 * - Smaller dot for subtlety
 */
export const BulletList: React.FC<BulletListProps> = ({ 
  items,
  className = ''
}) => {
  return (
    <ul className={`space-y-3 list-none m-0 p-0 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="relative pl-[28px]">
          {/* Bullet dot - positioned LOWER to avoid overlap */}
          <span 
            className="absolute left-[2px] top-[0.7em] w-[6px] h-[6px] rounded-full bg-[#5B3DF5]"
            aria-hidden="true"
          ></span>
          {/* Text - normal flow */}
          <span className="block text-[15px] text-slate-700 leading-[1.7]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
