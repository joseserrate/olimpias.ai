'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with Supabase auth
    // const { data, error } = await supabase.auth.signUp({
    //   email: formData.email,
    //   password: formData.password,
    //   options: {
    //     data: {
    //       display_name: formData.displayName
    //     }
    //   }
    // })
    // if (error) {
    //   alert(error.message)
    //   setIsSubmitting(false)
    //   return
    // }
    // router.push('/casos')

    console.log('Signup attempt:', formData);
    
    setTimeout(() => {
      alert('Signup mock - Supabase auth próximamente');
      router.push('/casos');
    }, 500);
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-md mx-auto px-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Crear cuenta
          </h1>
          <p className="text-slate-600">
            Únete a Olimpias AI
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-slate-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="displayName"
                value={formData.displayName}
                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                minLength={6}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent"
              />
              <p className="text-xs text-slate-500 mt-1">Mínimo 6 caracteres</p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-[#5B3DF5] text-white rounded-md hover:bg-[#4A2FD5] transition-colors disabled:opacity-50 font-medium"
            >
              {isSubmitting ? 'Creando cuenta...' : 'Crear cuenta'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              ¿Ya tienes cuenta?{' '}
              <Link href="/login" className="text-[#5B3DF5] hover:underline font-medium">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
