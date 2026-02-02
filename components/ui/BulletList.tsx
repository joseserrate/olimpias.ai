import React from 'react';

interface BulletListProps {
  items: string[];
  className?: string;
}

/**
 * Premium BulletList with generous spacing:
 * - More vertical space between items
 * - Larger gap between dot and text
 * - Better line height for readability
 */
export const BulletList: React.FC<BulletListProps> = ({ 
  items,
  className = ''
}) => {
  return (
    <ul className={`space-y-4 list-none m-0 p-0 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-4">
          {/* Bullet dot - aligned with text baseline */}
          <span 
            className="inline-block w-[6px] h-[6px] rounded-full bg-[#5B3DF5] flex-shrink-0"
            style={{ marginTop: '10px' }}
            aria-hidden="true"
          ></span>
          {/* Text - larger, better leading */}
          <span className="block text-[15px] text-slate-700 leading-[1.7] flex-1">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
