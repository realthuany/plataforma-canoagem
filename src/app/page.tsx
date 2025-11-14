"use client"

import { Search, MapPin, Calendar, Star, Waves } from "lucide-react"
import Link from "next/link"
import { clubes } from "@/lib/data"

export default function Home() {
  const clubesDestaque = clubes.slice(0, 3)

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
            <Link href="/explorar" className="text-slate-700 hover:text-cyan-600 transition-colors">
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Encontre sua próxima
            <span className="block bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-500 bg-clip-text text-transparent">
              remada perfeita
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A plataforma oficial da canoagem havaiana no Brasil. Conecte-se com clubes, reserve aulas e faça parte da comunidade Vaʻa.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl shadow-xl border border-slate-200">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl">
                <MapPin className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cidade ou estado"
                  className="flex-1 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                />
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                <span className="font-medium">Buscar</span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">50+</div>
              <div className="text-sm text-slate-600">Clubes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">200+</div>
              <div className="text-sm text-slate-600">Aulas/mês</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">1000+</div>
              <div className="text-sm text-slate-600">Praticantes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubes em Destaque */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Clubes em Destaque</h2>
            <p className="text-slate-600 mt-2">Descubra os melhores clubes da sua região</p>
          </div>
          <Link 
            href="/explorar"
            className="hidden sm:block px-6 py-3 text-cyan-700 hover:bg-cyan-50 rounded-lg transition-colors font-medium"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubesDestaque.map((clube) => (
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

        <div className="text-center mt-8 sm:hidden">
          <Link 
            href="/explorar"
            className="inline-block px-6 py-3 text-cyan-700 hover:bg-cyan-50 rounded-lg transition-colors font-medium"
          >
            Ver todos os clubes
          </Link>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
            <p className="text-cyan-100 text-lg">Comece sua jornada em 3 passos simples</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">1. Encontre</h3>
              <p className="text-cyan-100">Busque clubes e aulas perto de você</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">2. Reserve</h3>
              <p className="text-cyan-100">Escolha horário e confirme sua vaga</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                <Waves className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">3. Reme</h3>
              <p className="text-cyan-100">Aproveite sua experiência no mar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-cyan-50 rounded-3xl p-8 md:p-12 text-center border border-cyan-100">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Pronto para começar?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Junte-se à maior comunidade de canoagem havaiana do Brasil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explorar"
              className="px-8 py-4 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-xl hover:shadow-xl transition-all font-medium"
            >
              Explorar clubes
            </Link>
            <Link href="/login" className="px-8 py-4 bg-white text-cyan-700 rounded-xl hover:shadow-lg transition-all font-medium border border-cyan-200">
              Sou um clube
            </Link>
          </div>
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
