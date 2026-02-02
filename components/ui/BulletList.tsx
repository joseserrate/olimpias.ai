import React from 'react';

interface BulletListProps {
  items: string[];
  className?: string;
}

/**
 * BulletList with guaranteed perfect alignment:
 * - Dot is absolutely positioned with left padding reservation
 * - Wrapped lines indent correctly under the first line
 * - Dot aligns with text baseline using 0.45em offset
 */
export const BulletList: React.FC<BulletListProps> = ({ 
  items,
  className = ''
}) => {
  return (
    <ul className={`space-y-3 list-none m-0 p-0 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="relative pl-6">
          {/* Bullet dot - absolutely positioned at baseline */}
          <span 
            className="absolute left-0 top-[0.45em] w-2 h-2 rounded-full bg-[#5B3DF5] flex-shrink-0"
            aria-hidden="true"
          ></span>
          {/* Text - normal flow, wrapped lines indent correctly */}
          <span className="block text-[15px] text-slate-700 leading-[1.7]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
