import React from 'react';

interface BulletListProps {
  items: string[];
  variant?: 'primary' | 'neutral';
  size?: 'sm' | 'md';
}

export const BulletList: React.FC<BulletListProps> = ({ 
  items, 
  variant = 'neutral',
  size = 'md'
}) => {
  const bulletColor = variant === 'primary' ? 'bg-[#5B3DF5]' : 'bg-[#1D1D1F]';
  const textSize = size === 'sm' ? 'text-[14px]' : 'text-[15px]';

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 items-start">
          {/* Bullet dot - perfectly aligned with first line */}
          <span className={`inline-block w-1.5 h-1.5 rounded-full ${bulletColor} flex-shrink-0 mt-[0.6em]`}></span>
          {/* Text */}
          <span className={`${textSize} text-[#1D1D1F] leading-[1.5] font-normal flex-1`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
