'use client';

import React from 'react';
import { CaseCategory, categoryLabels } from '@/lib/mock-data/casos';

export interface CategoryFilterProps {
  selectedCategory: CaseCategory | 'all';
  onCategoryChange: (category: CaseCategory | 'all') => void;
  className?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
  className = ''
}) => {
  const categories: Array<{ value: CaseCategory | 'all'; label: string }> = [
    { value: 'all', label: 'Todos los casos' },
    { value: 'exportacion', label: categoryLabels.exportacion },
    { value: 'camaras', label: categoryLabels.camaras },
    { value: 'cumplimiento', label: categoryLabels.cumplimiento },
    { value: 'finanzas', label: categoryLabels.finanzas },
    { value: 'operaciones', label: categoryLabels.operaciones },
    { value: 'gobierno', label: categoryLabels.gobierno },
  ];

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            selectedCategory === cat.value
              ? 'bg-[#5B3DF5] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};
