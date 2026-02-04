/**
 * Enterprise-grade Case data model for Supabase
 */

export type CaseCategory = 
  | 'exportacion'
  | 'camaras'
  | 'cumplimiento'
  | 'finanzas'
  | 'operaciones'
  | 'gobierno';

export type CaseSensitivity = 'publico' | 'anonimizado' | 'confidencial';
export type CaseStatus = 'draft' | 'published';

export interface CaseMetric {
  label: string;
  value: string;
}

export interface Case {
  id: string;
  title: string;
  category: CaseCategory;
  summary: string;
  problem: string;
  current_flow: string;
  data_sources: string[];
  approach: string;
  guardrails: string;
  outcome: string;
  metrics: CaseMetric[];
  stack: string[];
  sensitivity: CaseSensitivity;
  status: CaseStatus;
  author_name: string;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: string;
  case_id: string;
  body: string;
  author_name: string;
  created_at: string;
}

export const categoryLabels: Record<CaseCategory, string> = {
  exportacion: 'Exportación',
  camaras: 'Cámaras de Comercio',
  cumplimiento: 'Cumplimiento',
  finanzas: 'Finanzas',
  operaciones: 'Operaciones',
  gobierno: 'Gobierno'
};

export const sensitivityLabels: Record<CaseSensitivity, string> = {
  publico: 'Público',
  anonimizado: 'Anonimizado',
  confidencial: 'Confidencial'
};
