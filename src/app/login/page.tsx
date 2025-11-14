'use client';
import React, { useState } from 'react';

type Props = {
  onSuccess?: (data: any) => void;
};

export default function RegisterForm({ onSuccess }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Por favor informe seu nome.');
      return;
    }
    if (!email.trim()) {
      setError('Por favor informe um email válido.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), password }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Erro ao cadastrar');
      if (onSuccess) onSuccess(json);
      setName('');
      setEmail('');
      setPassword('');
      // opcional: redirecionar ou exibir mensagem de sucesso
    } catch (err: any) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome completo"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@exemplo.com"
        required
      />

      <label htmlFor="password">Senha</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
      />

      {error && <div role="alert" className="error" style={{ color: 'red', marginTop: 8 }}>{error}</div>}

      <button type="submit" disabled={loading} style={{ marginTop: 12 }}>
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </button>
    </form>
  );
}
