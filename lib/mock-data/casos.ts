/**
 * Mock data for Biblioteca de Casos
 * Used for frontend development before Supabase integration
 */

export type CaseCategory = 
  | 'exportacion'
  | 'camaras'
  | 'cumplimiento'
  | 'finanzas'
  | 'operaciones'
  | 'gobierno';

export type CaseStatus = 'draft' | 'submitted' | 'published' | 'archived';
export type CaseSensitivity = 'publicable' | 'anonimizado' | 'privado';

export interface CaseOwner {
  id: string;
  display_name: string;
  email?: string;
}

export interface Comment {
  id: string;
  case_id: string;
  user_id: string;
  user_name: string;
  body: string;
  created_at: string;
}

export interface Case {
  id: string;
  owner_id: string;
  owner: CaseOwner;
  title: string;
  category: CaseCategory;
  summary: string;
  problem: string;
  current_flow: string;
  sources: string;
  desired_outcome: string;
  constraints: string;
  sensitivity: CaseSensitivity;
  status: CaseStatus;
  featured_rank?: number;
  created_at: string;
  updated_at: string;
}

// Mock cases aligned with Olimpias wedge (RAG-first, Bolivia context)
export const mockCases: Case[] = [
  {
    id: '1',
    owner_id: 'user-1',
    owner: {
      id: 'user-1',
      display_name: 'María González',
      email: 'maria@example.com'
    },
    title: 'Asistente RAG de Normativa de Exportación',
    category: 'exportacion',
    summary: 'Sistema RAG para consultas de normativa con fuentes citadas y respuestas auditables',
    problem: 'Equipos comerciales pierden 4-6 horas semanales buscando normativas actualizadas en PDFs dispersos. Respuestas incorrectas generan multas y retrasos en aduanas.',
    current_flow: 'Búsqueda manual en carpetas compartidas con PDFs de normativas de SENASAG, ADEPCOCA y circulares internas. Consultas por WhatsApp al área legal que demoran 24-48 horas.',
    sources: 'PDFs internos (normativas 2020-2025), portal ADEPCOCA, circulares SENASAG, manuales de procedimientos',
    desired_outcome: 'Respuestas en <30 segundos con citas exactas a documentos fuente. Confianza del 95%+ en precisión. Auditoría completa de consultas.',
    constraints: 'Datos sensibles: nombres de clientes y valores comerciales deben quedar privados. Sistema debe funcionar sin conexión constante a internet (oficinas rurales).',
    sensitivity: 'publicable',
    status: 'published',
    featured_rank: 1,
    created_at: '2025-01-15T10:30:00Z',
    updated_at: '2025-01-20T14:22:00Z'
  },
  {
    id: '2',
    owner_id: 'user-2',
    owner: {
      id: 'user-2',
      display_name: 'Carlos Mendoza',
      email: 'carlos@example.com'
    },
    title: 'Expediente de Embarque Automatizado',
    category: 'exportacion',
    summary: 'Generación automática de "Shipment Packet" desde PDFs, emails y WhatsApp con validaciones',
    problem: 'Consolidar documentos de embarque (factura comercial, packing list, certificados) toma 2-3 horas por embarque. Errores en documentos causan retenciones de 5-7 días en puerto.',
    current_flow: 'Recopilación manual de PDFs por email, WhatsApp y carpetas. Operador crea Word con copiar/pegar, convierte a PDF, revisa inconsistencias manualmente.',
    sources: 'Emails con facturas y certificados, mensajes de WhatsApp con fotos de documentos, sistema ERP (exports CSV), plantillas Word internas',
    desired_outcome: 'Sistema que consolide documentos automáticamente, valide consistencia entre factura/packing list/certificado, genere PDF final en <5 minutos con alertas de inconsistencias.',
    constraints: 'Formatos de entrada variados (PDF escaneado, foto de celular, CSV). Validación crítica: peso total, número de bultos, partidas arancelarias deben coincidir entre documentos.',
    sensitivity: 'anonimizado',
    status: 'published',
    featured_rank: 2,
    created_at: '2025-01-18T09:15:00Z',
    updated_at: '2025-01-25T11:40:00Z'
  },
  {
    id: '3',
    owner_id: 'user-3',
    owner: {
      id: 'user-3',
      display_name: 'Ana Patiño',
      email: 'ana@example.com'
    },
    title: 'Chatbot Institucional para Cámaras de Comercio',
    category: 'camaras',
    summary: 'Asistente RAG para miembros de cámaras: reglamentos, servicios, trámites con analítica de preguntas',
    problem: 'Recepcionistas y asistentes responden 40-60 consultas diarias sobre servicios, trámites, reglamentos. 70% son repetitivas. Tiempo promedio: 8 minutos por consulta.',
    current_flow: 'Consultas presenciales, por teléfono y WhatsApp. Personal busca información en manuales físicos, PDFs y carpetas compartidas. Respuestas inconsistentes entre personal.',
    sources: 'Reglamento interno (PDF 120 páginas), catálogo de servicios (web + PDF), guías de trámites, circulares mensuales, FAQ histórico',
    desired_outcome: 'Chatbot web que responda consultas en <10 segundos con enlaces a secciones exactas de reglamentos. Dashboard de preguntas frecuentes para identificar mejoras en comunicación.',
    constraints: 'Lenguaje formal pero accesible. Sistema debe escalar a 500+ consultas/día. Información debe estar siempre actualizada (circulares mensuales).',
    sensitivity: 'publicable',
    status: 'published',
    featured_rank: 3,
    created_at: '2025-01-22T14:00:00Z',
    updated_at: '2025-01-28T16:30:00Z'
  },
  {
    id: '4',
    owner_id: 'user-4',
    owner: {
      id: 'user-4',
      display_name: 'Roberto Salazar',
      email: 'roberto@example.com'
    },
    title: 'Soporte de Cumplimiento con Respuestas Auditables',
    category: 'cumplimiento',
    summary: 'Sistema RAG para consultas de políticas internas con trazabilidad completa para auditorías',
    problem: 'Área de compliance recibe 20-30 consultas semanales sobre políticas (viajes, gastos, conflictos de interés). Respuestas demoran 24-48 horas. Auditorías requieren evidencia documental de cada respuesta.',
    current_flow: 'Consultas por email al compliance officer. Búsqueda manual en política de 200 páginas y normativas. Respuesta por email con copia a supervisor. Archivo manual de consultas en carpeta compartida.',
    sources: 'Manual de Políticas Corporativas (PDF), Código de Ética, normativas laborales bolivianas, precedentes de consultas (Excel con 300+ casos)',
    desired_outcome: 'Sistema que responda consultas con cita exacta a política aplicable, genere registro automático de consulta con timestamp, y compile reporte mensual de consultas por categoría.',
    constraints: 'Auditoría completa: quién preguntó, qué respondió el sistema, fecha/hora, documento fuente. Confidencialidad: no exponer casos de otros usuarios.',
    sensitivity: 'anonimizado',
    status: 'published',
    featured_rank: 4,
    created_at: '2025-02-01T08:45:00Z',
    updated_at: '2025-02-01T08:45:00Z'
  },
  {
    id: '5',
    owner_id: 'user-5',
    owner: {
      id: 'user-5',
      display_name: 'Lucía Morales',
      email: 'lucia@example.com'
    },
    title: 'Minutas y Seguimiento de Acuerdos',
    category: 'operaciones',
    summary: 'Captura automática de reuniones, extracción de acuerdos y seguimiento de cumplimiento',
    problem: 'Reuniones de directorio y comités generan 8-12 acuerdos mensuales. 40% de acuerdos no se cumplen por falta de seguimiento. Secretaria toma notas a mano y transcribe, 2-3 horas post-reunión.',
    current_flow: 'Grabación de audio (celular), transcripción manual por secretaria, identificación de acuerdos, envío de minuta por email, seguimiento manual en Excel.',
    sources: 'Audio de reuniones (español), plantilla de minutas (Word), Excel de seguimiento de acuerdos',
    desired_outcome: 'Sistema que transcriba reunión, identifique automáticamente acuerdos y responsables, genere minuta en <30 minutos, y envíe recordatorios automáticos a responsables una semana antes de vencimiento.',
    constraints: 'Precisión crítica en nombres de responsables y fechas de vencimiento. Confidencialidad: minutas solo para asistentes. Audio puede tener ruido ambiental y acentos regionales.',
    sensitivity: 'privado',
    status: 'published',
    featured_rank: 5,
    created_at: '2025-02-03T11:20:00Z',
    updated_at: '2025-02-03T11:20:00Z'
  },
  {
    id: '6',
    owner_id: 'user-6',
    owner: {
      id: 'user-6',
      display_name: 'Diego Rojas',
      email: 'diego@example.com'
    },
    title: 'Clasificación Automática de Facturas',
    category: 'finanzas',
    summary: 'Extracción de datos y categorización de facturas desde PDFs y fotos',
    problem: 'Contabilidad procesa 200-300 facturas mensuales. Entrada manual toma 5-8 minutos por factura. Errores en categorización causan retrabajos en cierre mensual.',
    current_flow: 'Facturas llegan por email, WhatsApp y físicas. Asistente escanea/fotografía, abre cada factura, captura datos en sistema contable manualmente, categoriza según plan de cuentas.',
    sources: 'Facturas (PDF digital + PDF escaneado + fotos), plan de cuentas (Excel), historial de categorizaciones (sistema contable)',
    desired_outcome: 'Sistema que extraiga automáticamente NIT, monto, fecha, concepto de cualquier formato de factura, sugiera categorización basada en historial, y valide duplicados.',
    constraints: 'Formatos de factura muy variados. Precisión del 98%+ en monto y fecha (crítico para impuestos). Sistema debe aprender de correcciones manuales.',
    sensitivity: 'privado',
    status: 'submitted',
    created_at: '2025-02-05T09:30:00Z',
    updated_at: '2025-02-05T09:30:00Z'
  },
  {
    id: '7',
    owner_id: 'user-1',
    owner: {
      id: 'user-1',
      display_name: 'María González',
      email: 'maria@example.com'
    },
    title: 'Traducción de Documentación Técnica con Contexto',
    category: 'operaciones',
    summary: 'Traducción español-inglés de manuales técnicos preservando terminología especializada',
    problem: 'Manuales de operación y documentación técnica deben traducirse para socios extranjeros. Traductores externos no conocen terminología específica del sector. Revisión consume 3-4 horas.',
    current_flow: 'Exportar a Word, contratar traductor, revisar traducción, corregir términos técnicos, ajustar formato.',
    sources: 'Manuales técnicos (PDF/Word), glosario de términos específicos (Excel 200+ términos), traducciones previas aprobadas',
    desired_outcome: 'Sistema que traduzca preservando términos técnicos según glosario, mantenga formato original, y resalte secciones con baja confianza para revisión humana.',
    constraints: 'Terminología crítica: nombres de procesos, certificaciones, normativas deben usar traducciones oficiales del glosario.',
    sensitivity: 'anonimizado',
    status: 'draft',
    created_at: '2025-02-06T15:00:00Z',
    updated_at: '2025-02-06T15:00:00Z'
  },
  {
    id: '8',
    owner_id: 'user-7',
    owner: {
      id: 'user-7',
      display_name: 'Carmen Vega',
      email: 'carmen@example.com'
    },
    title: 'Análisis de Contratos y Extracción de Cláusulas',
    category: 'cumplimiento',
    summary: 'Identificación automática de cláusulas críticas en contratos comerciales',
    problem: 'Legal revisa 15-20 contratos mensuales. Identificar cláusulas de penalización, garantías y plazos toma 45-60 minutos por contrato. Riesgo de omitir cláusulas críticas.',
    current_flow: 'Lectura completa de contrato (30-80 páginas), resaltado manual de cláusulas importantes, creación de resumen ejecutivo en Word.',
    sources: 'Contratos (PDF + Word), plantilla de análisis (Word), base de cláusulas problemáticas históricas',
    desired_outcome: 'Sistema que identifique y extraiga automáticamente: plazos de pago, penalizaciones, garantías, confidencialidad, jurisdicción. Genere resumen ejecutivo con alertas de cláusulas inusuales.',
    constraints: 'Lenguaje legal complejo. Contratos en español e inglés. Variabilidad alta en redacción.',
    sensitivity: 'privado',
    status: 'draft',
    created_at: '2025-02-07T10:15:00Z',
    updated_at: '2025-02-07T10:15:00Z'
  }
];

// Mock comments
export const mockComments: Comment[] = [
  {
    id: 'c1',
    case_id: '1',
    user_id: 'user-10',
    user_name: 'Pedro Álvarez',
    body: '¿Este sistema podría integrarse con nuestro portal interno de documentos? Usamos SharePoint.',
    created_at: '2025-01-21T09:15:00Z'
  },
  {
    id: 'c2',
    case_id: '1',
    user_id: 'user-1',
    user_name: 'María González',
    body: 'Sí, el sistema RAG puede conectarse a SharePoint como fuente documental. La integración es directa.',
    created_at: '2025-01-21T14:30:00Z'
  },
  {
    id: 'c3',
    case_id: '2',
    user_id: 'user-11',
    user_name: 'Sofía Quispe',
    body: 'Excelente caso. ¿Cuánto tiempo tomó implementar la validación automática entre documentos?',
    created_at: '2025-01-26T11:00:00Z'
  },
  {
    id: 'c4',
    case_id: '3',
    user_id: 'user-12',
    user_name: 'Fernando Paz',
    body: 'Esto sería perfecto para nuestra cámara. ¿El sistema puede manejar documentos que se actualizan mensualmente?',
    created_at: '2025-01-29T16:45:00Z'
  },
  {
    id: 'c5',
    case_id: '3',
    user_id: 'user-3',
    user_name: 'Ana Patiño',
    body: 'Sí, el sistema detecta cambios en documentos fuente y actualiza el índice automáticamente. Hay un proceso de re-indexación configurable.',
    created_at: '2025-01-30T08:20:00Z'
  }
];

// Helper functions
export function getCaseById(id: string): Case | undefined {
  return mockCases.find(c => c.id === id);
}

export function getPublishedCases(): Case[] {
  return mockCases.filter(c => c.status === 'published');
}

export function getFeaturedCases(): Case[] {
  return mockCases
    .filter(c => c.status === 'published' && c.featured_rank)
    .sort((a, b) => (a.featured_rank || 999) - (b.featured_rank || 999));
}

export function getCasesByCategory(category: CaseCategory): Case[] {
  return mockCases.filter(c => c.category === category && c.status === 'published');
}

export function getUserCases(userId: string): Case[] {
  return mockCases.filter(c => c.owner_id === userId);
}

export function getCommentsByCase(caseId: string): Comment[] {
  return mockComments.filter(c => c.case_id === caseId);
}

export const categoryLabels: Record<CaseCategory, string> = {
  exportacion: 'Exportación y Comercio',
  camaras: 'Cámaras y Asociaciones',
  cumplimiento: 'Cumplimiento y Riesgo',
  finanzas: 'Finanzas e Ingresos',
  operaciones: 'Operaciones Internas',
  gobierno: 'Gobierno y Servicio Público'
};

export const statusLabels: Record<CaseStatus, string> = {
  draft: 'Borrador',
  submitted: 'Enviado',
  published: 'Publicado',
  archived: 'Archivado'
};
