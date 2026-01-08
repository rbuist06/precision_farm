'use client';

import { supabase } from '@/lib/supabase/client';
import { useState } from 'react';

export default function AddClientPage() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    setResult(null);

    console.log('🚀 Tentando criar cliente:', { name, location });

    const { data, error } = await supabase
      .from('clients')
      .insert({ name: name.trim(), location: location.trim() || null })
      .select()
      .single();

    if (error) {
      console.error('❌ Erro do caralho ao criar cliente:', error);
      setResult(`Erro: ${error.message}`);
    } else {
      console.log('✅ Cliente criado com sucesso, seu corno!', data);
      setResult(`Cliente "${data.name}" criado com ID ${data.id}!`);
      setName('');
      setLocation('');
    }

    setLoading(false);
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-4xl mb-8">Criar Novo Cliente (Fazenda)</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg mb-2">Nome da Fazenda</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded border text-black"
            placeholder="Fazenda do Tio Zé"
            required
          />
        </div>
        <div>
          <label className="block text-lg mb-2">Localização (opcional)</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 rounded border text-black"
            placeholder="Castro, PR"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-green-600 text-white text-xl rounded hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? 'Criando...' : 'Criar Fazenda'}
        </button>
      </form>

      {result && (
        <div className="mt-8 p-6 bg-gray-800 rounded text-lg">
          {result}
        </div>
      )}
    </div>
  );
}