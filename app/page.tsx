'use client';

import { useState, useMemo } from 'react';
import { AppleHero } from '@/components/sections';
import { mockCases, mockComments } from '@/lib/mock-casos';
import { Case, Comment, CaseCategory, categoryLabels, CaseMetric } from '@/lib/types/casos';

export default function Home() {
  // State
  const [cases, setCases] = useState<Case[]>(mockCases);
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [editingCase, setEditingCase] = useState<Case | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CaseCategory | 'all'>('all');
  
  // Auth form
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');

  // Filtered cases
  const filteredCases = useMemo(() => {
    let filtered = cases.filter(c => c.status === 'published');
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(c => c.category === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(c => 
        c.title.toLowerCase().includes(query) || 
        c.summary.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [cases, selectedCategory, searchQuery]);

  // Case comments
  const caseComments = useMemo(() => {
    if (!selectedCase) return [];
    return comments.filter(c => c.case_id === selectedCase.id);
  }, [comments, selectedCase]);

  // Handlers
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Replace with Supabase auth
    // if (authMode === 'signin') {
    //   const { data, error } = await supabase.auth.signInWithPassword({
    //     email: authEmail,
    //     password: authPassword
    //   })
    // } else {
    //   const { data, error } = await supabase.auth.signUp({
    //     email: authEmail,
    //     password: authPassword
    //   })
    // }
    
    console.log('Auth:', authMode, { email: authEmail });
    setIsAuthenticated(true);
    setShowAuthModal(false);
    setAuthEmail('');
    setAuthPassword('');
  };

  const handleSignOut = () => {
    // TODO: await supabase.auth.signOut()
    setIsAuthenticated(false);
  };

  const handleCreateCase = (newCase: Case) => {
    // TODO: Replace with Supabase insert
    // const { data, error } = await supabase.from('cases').insert([newCase])
    
    console.log('Creating case:', newCase);
    setCases([...cases, newCase]);
    setShowCreateModal(false);
    setSelectedCase(newCase);
  };

  const handleUpdateCase = (updated: Case) => {
    // TODO: Replace with Supabase update
    // const { data, error } = await supabase.from('cases').update(updated).eq('id', updated.id)
    
    console.log('Updating case:', updated);
    setCases(cases.map(c => c.id === updated.id ? updated : c));
    setEditingCase(null);
    setSelectedCase(updated);
  };

  const handleDeleteCase = (id: string) => {
    if (!confirm('¿Eliminar este caso?')) return;
    
    // TODO: Replace with Supabase delete
    // const { error } = await supabase.from('cases').delete().eq('id', id)
    
    console.log('Deleting case:', id);
    setCases(cases.filter(c => c.id !== id));
    setSelectedCase(null);
  };

  const handleAddComment = (body: string) => {
    if (!selectedCase) return;
    
    const newComment: Comment = {
      id: Date.now().toString(),
      case_id: selectedCase.id,
      body,
      author_name: isAuthenticated ? 'Usuario' : 'Anónimo',
      created_at: new Date().toISOString()
    };
    
    // TODO: Replace with Supabase insert
    // const { data, error } = await supabase.from('comments').insert([newComment])
    
    console.log('Adding comment:', newComment);
    setComments([...comments, newComment]);
  };

  return (
    <>
      <AppleHero />
      
      <main className="bg-white">
        {/* Casos Section */}
        <section id="casos" className="py-16">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Biblioteca de Casos
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Casos reales de IA empresarial en Bolivia. Implementaciones documentadas con métricas y stack técnico.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-8 space-y-4">
              <input
                type="text"
                placeholder="Buscar casos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
              />
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-[#5B3DF5] text-white'
                      : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Todos
                </button>
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key as CaseCategory)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedCategory === key
                        ? 'bg-[#5B3DF5] text-white'
                        : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredCases.map((caso) => (
                <button
                  key={caso.id}
                  onClick={() => setSelectedCase(caso)}
                  className="text-left border border-slate-200 rounded-xl p-6 bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-xs font-medium text-[#5B3DF5] uppercase tracking-wide">
                    {categoryLabels[caso.category]}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-2">
                    {caso.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {caso.summary}
                  </p>
                  <div className="mt-4 text-xs text-slate-500">
                    {new Date(caso.created_at).toLocaleDateString('es-BO')}
                  </div>
                </button>
              ))}
            </div>

            {filteredCases.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                No se encontraron casos.
              </div>
            )}
          </div>
        </section>

        {/* Detail Drawer */}
        {selectedCase && (
          <DetailDrawer
            caso={selectedCase}
            comments={caseComments}
            isAuthenticated={isAuthenticated}
            onClose={() => setSelectedCase(null)}
            onEdit={() => {
              setEditingCase(selectedCase);
              setSelectedCase(null);
            }}
            onDelete={() => handleDeleteCase(selectedCase.id)}
            onAddComment={handleAddComment}
          />
        )}

        {/* Create/Edit Modal */}
        {(showCreateModal || editingCase) && (
          <CaseFormModal
            caso={editingCase}
            onClose={() => {
              setShowCreateModal(false);
              setEditingCase(null);
            }}
            onSave={(c) => editingCase ? handleUpdateCase(c) : handleCreateCase(c)}
          />
        )}

        {/* Auth Modal */}
        {showAuthModal && (
          <AuthModal
            mode={authMode}
            email={authEmail}
            password={authPassword}
            onModeChange={setAuthMode}
            onEmailChange={setAuthEmail}
            onPasswordChange={setAuthPassword}
            onSubmit={handleAuth}
            onClose={() => setShowAuthModal(false)}
          />
        )}

        {/* Floating Actions */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-3">
          {isAuthenticated && (
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-[#5B3DF5] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#4A2FD5] transition-colors"
              title="Crear caso"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          )}
        </div>
      </main>
    </>
  );
}

// Detail Drawer Component
function DetailDrawer({
  caso,
  comments,
  isAuthenticated,
  onClose,
  onEdit,
  onDelete,
  onAddComment
}: {
  caso: Case;
  comments: Comment[];
  isAuthenticated: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onAddComment: (body: string) => void;
}) {
  const [commentBody, setCommentBody] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentBody.trim()) return;
    onAddComment(commentBody);
    setCommentBody('');
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end" onClick={onClose}>
      <div
        className="bg-white w-full max-w-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-xs font-medium text-[#5B3DF5] uppercase tracking-wide">
                {categoryLabels[caso.category]}
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">
                {caso.title}
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Por {caso.author_name} • {new Date(caso.created_at).toLocaleDateString('es-BO')}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Actions */}
          {isAuthenticated && (
            <div className="flex gap-3 mb-6">
              <button
                onClick={onEdit}
                className="px-4 py-2 border border-slate-300 rounded-md text-sm font-medium hover:bg-slate-50"
              >
                Editar
              </button>
              <button
                onClick={onDelete}
                className="px-4 py-2 border border-red-300 text-red-600 rounded-md text-sm font-medium hover:bg-red-50"
              >
                Eliminar
              </button>
            </div>
          )}

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Resumen</h3>
              <p className="text-slate-700">{caso.summary}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Problema</h3>
              <p className="text-slate-700">{caso.problem}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Flujo Actual</h3>
              <p className="text-slate-700">{caso.current_flow}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Fuentes de Datos</h3>
              <div className="flex flex-wrap gap-2">
                {caso.data_sources.map((source, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md">
                    {source}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Enfoque</h3>
              <p className="text-slate-700">{caso.approach}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Guardrails</h3>
              <p className="text-slate-700">{caso.guardrails}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Resultado</h3>
              <p className="text-slate-700">{caso.outcome}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Métricas</h3>
              <div className="space-y-2">
                {caso.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                    <span className="text-slate-700">{metric.label}</span>
                    <span className="font-semibold text-slate-900">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Stack Técnico</h3>
              <div className="flex flex-wrap gap-2">
                {caso.stack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-[#5B3DF5]/10 text-[#5B3DF5] text-sm rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div className="border-t pt-6 mt-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Comentarios ({comments.length})
              </h3>

              {/* Comment Form */}
              <form onSubmit={handleSubmitComment} className="mb-6">
                <textarea
                  value={commentBody}
                  onChange={(e) => setCommentBody(e.target.value)}
                  placeholder="Escribe un comentario..."
                  rows={3}
                  className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
                />
                <button
                  type="submit"
                  className="mt-2 bg-[#5B3DF5] text-white rounded-md px-5 py-2.5 text-sm font-medium hover:bg-[#4A2FD5]"
                >
                  Comentar
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-l-2 border-slate-200 pl-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-medium text-slate-900 text-sm">
                        {comment.author_name}
                      </span>
                      <span className="text-xs text-slate-500">
                        {new Date(comment.created_at).toLocaleDateString('es-BO')}
                      </span>
                    </div>
                    <p className="text-slate-700 text-sm">{comment.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Case Form Modal Component
function CaseFormModal({
  caso,
  onClose,
  onSave
}: {
  caso: Case | null;
  onClose: () => void;
  onSave: (c: Case) => void;
}) {
  const [formData, setFormData] = useState<Case>(
    caso || {
      id: Date.now().toString(),
      title: '',
      category: 'exportacion',
      summary: '',
      problem: '',
      current_flow: '',
      data_sources: [],
      approach: '',
      guardrails: '',
      outcome: '',
      metrics: [],
      stack: [],
      sensitivity: 'publico',
      status: 'published',
      author_name: 'Usuario',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  );

  const [newDataSource, setNewDataSource] = useState('');
  const [newStack, setNewStack] = useState('');
  const [newMetricLabel, setNewMetricLabel] = useState('');
  const [newMetricValue, setNewMetricValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...formData, updated_at: new Date().toISOString() });
  };

  const addDataSource = () => {
    if (newDataSource.trim()) {
      setFormData({ ...formData, data_sources: [...formData.data_sources, newDataSource.trim()] });
      setNewDataSource('');
    }
  };

  const removeDataSource = (index: number) => {
    setFormData({ ...formData, data_sources: formData.data_sources.filter((_, i) => i !== index) });
  };

  const addStack = () => {
    if (newStack.trim()) {
      setFormData({ ...formData, stack: [...formData.stack, newStack.trim()] });
      setNewStack('');
    }
  };

  const removeStack = (index: number) => {
    setFormData({ ...formData, stack: formData.stack.filter((_, i) => i !== index) });
  };

  const addMetric = () => {
    if (newMetricLabel.trim() && newMetricValue.trim()) {
      setFormData({
        ...formData,
        metrics: [...formData.metrics, { label: newMetricLabel.trim(), value: newMetricValue.trim() }]
      });
      setNewMetricLabel('');
      setNewMetricValue('');
    }
  };

  const removeMetric = (index: number) => {
    setFormData({ ...formData, metrics: formData.metrics.filter((_, i) => i !== index) });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              {caso ? 'Editar Caso' : 'Crear Caso'}
            </h2>
            <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Título *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Categoría *</label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as CaseCategory })}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
              >
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            {/* Summary */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Resumen *</label>
              <textarea
                required
                rows={3}
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
              />
            </div>

            {/* Problem */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Problema *</label>
              <textarea
                required
                rows={3}
                value={formData.problem}
                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
              />
            </div>

            {/* Current Flow */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Flujo Actual *</label>
              <textarea
                required
                rows={2}
                value={formData.current_flow}
                onChange={(e) => setFormData({ ...formData, current_flow: e.target.value })}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
              />
            </div>

            {/* Data Sources (Chips) */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Fuentes de Datos</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newDataSource}
                  onChange={(e) => setNewDataSource(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addDataSource())}
                  placeholder="Agregar fuente..."
                  className="flex-1 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#5B3DF5]/20 outline-none"
                />
                <button
                  type="button"
                  onClick={addDataSource}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm hover:bg-slate-200"
                >
                  Agregar
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.data_sources.map((source, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md flex items-center gap-2">
                    {source}
                    <button type="button" onClick={() => removeDataSource(i)} className="text-slate-400 hover:text-slate-600">×</button>
                  </span>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Enfoque *</label>
              <textarea
                required
                rows={3}
                value={formData.approach}
                onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
              />
            </div>

            {/* Guardrails */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Guardrails *</label>
              <textarea
                required
                rows={2}
                value={formData.guardrails}
                onChange={(e) => setFormData({ ...formData, guardrails: e.target.value })}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
              />
            </div>

            {/* Outcome */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Resultado *</label>
              <textarea
                required
                rows={2}
                value={formData.outcome}
                onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
              />
            </div>

            {/* Metrics */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Métricas</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newMetricLabel}
                  onChange={(e) => setNewMetricLabel(e.target.value)}
                  placeholder="Etiqueta"
                  className="flex-1 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#5B3DF5]/20 outline-none"
                />
                <input
                  type="text"
                  value={newMetricValue}
                  onChange={(e) => setNewMetricValue(e.target.value)}
                  placeholder="Valor"
                  className="flex-1 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#5B3DF5]/20 outline-none"
                />
                <button
                  type="button"
                  onClick={addMetric}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm hover:bg-slate-200"
                >
                  Agregar
                </button>
              </div>
              <div className="space-y-2">
                {formData.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                    <span className="text-sm text-slate-700">{metric.label}: <strong>{metric.value}</strong></span>
                    <button type="button" onClick={() => removeMetric(i)} className="text-slate-400 hover:text-slate-600">×</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack (Chips) */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Stack Técnico</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newStack}
                  onChange={(e) => setNewStack(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addStack())}
                  placeholder="Agregar tecnología..."
                  className="flex-1 border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#5B3DF5]/20 outline-none"
                />
                <button
                  type="button"
                  onClick={addStack}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm hover:bg-slate-200"
                >
                  Agregar
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.stack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-[#5B3DF5]/10 text-[#5B3DF5] text-sm rounded-md flex items-center gap-2">
                    {tech}
                    <button type="button" onClick={() => removeStack(i)} className="text-[#5B3DF5]/60 hover:text-[#5B3DF5]">×</button>
                  </span>
                ))}
              </div>
            </div>

            {/* Sensitivity */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Sensibilidad *</label>
              <select
                required
                value={formData.sensitivity}
                onChange={(e) => setFormData({ ...formData, sensitivity: e.target.value as any })}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
              >
                <option value="publico">Público</option>
                <option value="anonimizado">Anonimizado</option>
                <option value="confidencial">Confidencial</option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-[#5B3DF5] text-white rounded-md px-5 py-2.5 font-medium hover:bg-[#4A2FD5]"
              >
                {caso ? 'Actualizar' : 'Crear'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 border border-slate-300 rounded-md font-medium hover:bg-slate-50"
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Auth Modal Component
function AuthModal({
  mode,
  email,
  password,
  onModeChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onClose
}: {
  mode: 'signin' | 'signup';
  email: string;
  password: string;
  onModeChange: (m: 'signin' | 'signup') => void;
  onEmailChange: (e: string) => void;
  onPasswordChange: (p: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-xl w-full max-w-md p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            {mode === 'signin' ? 'Iniciar sesión' : 'Crear cuenta'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b">
          <button
            type="button"
            onClick={() => onModeChange('signin')}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              mode === 'signin'
                ? 'border-[#5B3DF5] text-[#5B3DF5]'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            onClick={() => onModeChange('signup')}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              mode === 'signup'
                ? 'border-[#5B3DF5] text-[#5B3DF5]'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Crear cuenta
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Contraseña</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5B3DF5] text-white rounded-md px-5 py-2.5 font-medium hover:bg-[#4A2FD5]"
          >
            {mode === 'signin' ? 'Iniciar sesión' : 'Crear cuenta'}
          </button>
        </form>
      </div>
    </div>
  );
}
