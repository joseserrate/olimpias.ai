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
    <ul className={`space-y-4 list-none m-0 p-0 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="relative pl-7">
          {/* Bullet dot - absolutely positioned for perfect wrapping */}
          <span className="absolute left-0 top-[0.6em] w-2.5 h-2.5 rounded-full bg-[#5B3DF5] flex-shrink-0"></span>
          {/* Text with proper leading - wrapped lines indent correctly */}
          <span className="block text-slate-700 leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
