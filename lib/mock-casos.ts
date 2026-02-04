import { Case, Comment } from './types/casos';

export const mockCases: Case[] = [
  {
    id: '1',
    title: 'Asistente RAG de Normativa de Exportación',
    category: 'exportacion',
    summary: 'Sistema de consulta automatizada de normativas de exportación usando RAG para reducir tiempo de respuesta de 2 días a 5 minutos.',
    problem: 'Los analistas pasaban 2-3 días buscando normativas en PDFs dispersos y correos',
    current_flow: 'Búsqueda manual en carpetas, correos y repositorios sin indexar',
    data_sources: ['PDFs normativos', 'Correos históricos', 'Manuales internos'],
    approach: 'RAG con embeddings de documentos normativos y LLM para síntesis',
    guardrails: 'Validación humana final, citas de fuentes obligatorias',
    outcome: 'Tiempo de respuesta reducido de 2 días a 5 minutos promedio',
    metrics: [
      { label: 'Tiempo de respuesta', value: '-95%' },
      { label: 'Consultas/día', value: '+300%' }
    ],
    stack: ['RAG', 'OpenAI', 'Pinecone', 'Next.js'],
    sensitivity: 'publico',
    status: 'published',
    author_name: 'María González',
    created_at: '2025-01-15T10:00:00Z',
    updated_at: '2025-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Clasificador Automático de Facturas',
    category: 'finanzas',
    summary: 'Clasificación automática de facturas en categorías contables con 94% de precisión',
    problem: 'Personal contable clasificaba manualmente 500+ facturas diarias',
    current_flow: 'Revisión visual y entrada manual en sistema ERP',
    data_sources: ['Facturas históricas', 'Catálogo contable', 'ERP data'],
    approach: 'Fine-tuned vision model + validación con reglas de negocio',
    guardrails: 'Revisión humana para montos >$1000, auditoría mensual',
    outcome: '94% precisión, 6 horas/día liberadas del equipo contable',
    metrics: [
      { label: 'Precisión', value: '94%' },
      { label: 'Ahorro tiempo', value: '6 hrs/día' }
    ],
    stack: ['GPT-4V', 'Python', 'Supabase'],
    sensitivity: 'anonimizado',
    status: 'published',
    author_name: 'Anónimo',
    created_at: '2025-01-10T14:30:00Z',
    updated_at: '2025-01-10T14:30:00Z'
  },
  {
    id: '3',
    title: 'Chatbot de Servicios de Cámara de Comercio',
    category: 'camaras',
    summary: 'Asistente conversacional 24/7 para consultas sobre servicios y trámites',
    problem: 'Recepción saturada con consultas repetitivas sobre horarios y requisitos',
    current_flow: 'Llamadas telefónicas y correos respondidos manualmente',
    data_sources: ['FAQs', 'Manuales de servicios', 'Historial de tickets'],
    approach: 'LLM con retrieval de documentación oficial',
    guardrails: 'Escalamiento a humano cuando no hay respuesta clara, log de interacciones',
    outcome: '70% de consultas resueltas sin intervención humana',
    metrics: [
      { label: 'Resolución automática', value: '70%' },
      { label: 'Tiempo respuesta', value: '<2 min' }
    ],
    stack: ['OpenAI', 'Vercel AI SDK', 'Supabase'],
    sensitivity: 'publico',
    status: 'published',
    author_name: 'Juan Pérez',
    created_at: '2025-01-05T09:15:00Z',
    updated_at: '2025-01-05T09:15:00Z'
  }
];

export const mockComments: Comment[] = [
  {
    id: 'c1',
    case_id: '1',
    body: '¿Qué modelo de embeddings usaron? ¿Ada-002 o text-embedding-3?',
    author_name: 'Carlos M.',
    created_at: '2025-01-16T10:30:00Z'
  },
  {
    id: 'c2',
    case_id: '1',
    body: 'Usamos text-embedding-3-small por costo/performance. Para 10k documentos funciona perfecto.',
    author_name: 'María González',
    created_at: '2025-01-16T11:00:00Z'
  },
  {
    id: 'c3',
    case_id: '2',
    body: 'Muy interesante. ¿Cómo manejan facturas con formato no estándar?',
    author_name: 'Ana R.',
    created_at: '2025-01-11T08:45:00Z'
  }
];
