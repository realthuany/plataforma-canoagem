"use client"

import { useState } from "react"
import { Search, MapPin, Calendar, Star, Waves, Filter } from "lucide-react"
import Link from "next/link"
import { clubes } from "@/lib/data"

export default function ExplorarPage() {
  const [busca, setBusca] = useState("")
  const [estadoFiltro, setEstadoFiltro] = useState("todos")

  const estados = ["todos", ...Array.from(new Set(clubes.map(c => c.estado)))]

  const clubesFiltrados = clubes.filter(clube => {
    const matchBusca = clube.nome.toLowerCase().includes(busca.toLowerCase()) ||
                       clube.cidade.toLowerCase().includes(busca.toLowerCase()) ||
                       clube.estado.toLowerCase().includes(busca.toLowerCase())
    const matchEstado = estadoFiltro === "todos" || clube.estado === estadoFiltro
    return matchBusca && matchEstado
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Waves className="w-8 h-8 text-cyan-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">
              Vaʻa<span className="font-normal">Hub</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/explorar" className="text-cyan-600 font-medium">
              Explorar
            </Link>
            <Link href="#" className="text-slate-700 hover:text-cyan-600 transition-colors">
              Agenda
            </Link>
            <Link href="#" className="text-slate-700 hover:text-cyan-600 transition-colors">
              Favoritos
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:block px-4 py-2 text-cyan-700 hover:bg-cyan-50 rounded-lg transition-colors">
              Entrar
            </Link>
            <Link href="/login" className="px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all">
              Cadastrar
            </Link>
          </div>
        </div>
      </header>

      {/* Hero com Busca */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold">
              Explore Clubes de Vaʻa
            </h1>
            <p className="text-cyan-100 text-lg">
              Encontre o clube perfeito para começar sua jornada na canoagem havaiana
            </p>

            {/* Busca e Filtros */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl">
                  <Search className="w-5 h-5 text-white/70" />
                  <input
                    type="text"
                    placeholder="Buscar por nome, cidade ou estado..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white placeholder:text-white/60"
                  />
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl">
                  <Filter className="w-5 h-5 text-white/70" />
                  <select
                    value={estadoFiltro}
                    onChange={(e) => setEstadoFiltro(e.target.value)}
                    className="bg-transparent outline-none text-white cursor-pointer"
                  >
                    <option value="todos" className="text-slate-900">Todos os estados</option>
                    {estados.filter(e => e !== "todos").map(estado => (
                      <option key={estado} value={estado} className="text-slate-900">{estado}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-sm text-cyan-100">
                {clubesFiltrados.length} {clubesFiltrados.length === 1 ? 'clube encontrado' : 'clubes encontrados'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Clubes */}
      <section className="container mx-auto px-4 py-12">
        {clubesFiltrados.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Nenhum clube encontrado</h3>
            <p className="text-slate-600">Tente ajustar os filtros ou buscar por outra região</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubesFiltrados.map((clube) => (
              <Link
                key={clube.id}
                href={`/clube/${clube.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-slate-200"
              >
                <div className="relative h-48 bg-gradient-to-br from-cyan-400 to-blue-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{clube.cidade}, {clube.estado}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {clube.nome}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {clube.descricao}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-700">{clube.avaliacao}</span>
                      <span className="text-sm text-slate-500">({clube.avaliacoes})</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>{clube.proximasAulas} aulas</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-cyan-50 rounded-3xl p-8 md:p-12 text-center border border-cyan-100">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Não encontrou seu clube?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Cadastre seu clube no VaʻaHub e alcance mais praticantes
          </p>
          <Link href="/login" className="px-8 py-4 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-xl hover:shadow-xl transition-all font-medium">
            Cadastrar meu clube
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Waves className="w-6 h-6 text-cyan-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">
                Vaʻa<span className="font-normal">Hub</span>
              </span>
            </div>
            <div className="flex gap-6 text-sm text-slate-600">
              <Link href="#" className="hover:text-cyan-600 transition-colors">Sobre</Link>
              <Link href="#" className="hover:text-cyan-600 transition-colors">Contato</Link>
              <Link href="#" className="hover:text-cyan-600 transition-colors">Termos</Link>
              <Link href="#" className="hover:text-cyan-600 transition-colors">Privacidade</Link>
            </div>
            <p className="text-sm text-slate-500">
              © 2025 VaʻaHub. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
