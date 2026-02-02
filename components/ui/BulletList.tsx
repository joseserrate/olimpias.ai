import React from 'react';

interface BulletListProps {
  items: string[];
  className?: string;
}

/**
 * BulletList using FLEX layout for guaranteed alignment:
 * - Dot and text in separate flex items
 * - Dot uses margin-top for baseline alignment
 * - Wrapped lines flow naturally under text
 */
export const BulletList: React.FC<BulletListProps> = ({ 
  items,
  className = ''
}) => {
  return (
    <ul className={`space-y-3 list-none m-0 p-0 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          {/* Bullet dot - in flex flow with margin-top for alignment */}
          <span 
            className="inline-block w-[6px] h-[6px] rounded-full bg-[#5B3DF5] flex-shrink-0 mt-[0.65em]"
            aria-hidden="true"
          ></span>
          {/* Text - flex-1 allows wrapping, wrapped lines stay under text */}
          <span className="block text-[15px] text-slate-700 leading-[1.7] flex-1">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
