"use client"

import { MapPin, Phone, Mail, Clock, Star, Calendar, Instagram, Globe, Waves, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { clubes, aulas } from "@/lib/data"
import { notFound } from "next/navigation"
import { use } from "react"

export default function ClubePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const clube = clubes.find(c => c.id === id)
  
  if (!clube) {
    notFound()
  }

  const aulasDoClube = aulas.filter(a => a.clubeId === clube.id)

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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/explorar" className="flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Voltar para explorar</span>
        </Link>
      </div>

      {/* Hero do Clube */}
      <section className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          {/* Imagem de Capa */}
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-700">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-white/90 text-sm mb-3">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">{clube.cidade}, {clube.estado}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {clube.nome}
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-medium">{clube.avaliacao}</span>
                  <span className="text-white/80 text-sm">({clube.avaliacoes} avaliações)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-6 md:p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Coluna Principal */}
              <div className="lg:col-span-2 space-y-8">
                {/* Sobre */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Sobre o clube</h2>
                  <p className="text-slate-600 leading-relaxed">
                    {clube.descricao}
                  </p>
                </div>

                {/* Horários */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Horários de treino</h2>
                  <div className="space-y-3">
                    {clube.horarios.map((horario, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                        <Clock className="w-5 h-5 text-cyan-600 mt-0.5" />
                        <span className="text-slate-700">{horario}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Próximas Aulas */}
                {aulasDoClube.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Próximas aulas</h2>
                    <div className="space-y-4">
                      {aulasDoClube.map((aula) => {
                        const dataFormatada = new Date(aula.data).toLocaleDateString('pt-BR', {
                          timeZone: 'UTC'
                        })
                        
                        return (
                          <div key={aula.id} className="p-6 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl border border-cyan-100">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                              <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{aula.titulo}</h3>
                                <div className="flex items-center gap-4 text-sm text-slate-600">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {dataFormatada}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {aula.horario} ({aula.duracao})
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  aula.nivel === "Iniciante" ? "bg-green-100 text-green-700" :
                                  aula.nivel === "Intermediário" ? "bg-yellow-100 text-yellow-700" :
                                  "bg-red-100 text-red-700"
                                }`}>
                                  {aula.nivel}
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-slate-600">
                                <span className="font-medium">Instrutor:</span> {aula.instrutor}
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="text-sm">
                                  <span className={`font-medium ${aula.vagasDisponiveis === 0 ? 'text-red-600' : 'text-slate-700'}`}>
                                    {aula.vagasDisponiveis === 0 ? 'Esgotado' : `${aula.vagasDisponiveis} vagas`}
                                  </span>
                                </div>
                                <button 
                                  disabled={aula.vagasDisponiveis === 0}
                                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                                    aula.vagasDisponiveis === 0 
                                      ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                                      : 'bg-gradient-to-r from-blue-900 to-cyan-600 text-white hover:shadow-lg'
                                  }`}
                                >
                                  {aula.vagasDisponiveis === 0 ? 'Esgotado' : `Reservar - R$ ${aula.valor}`}
                                </button>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Informações de Contato */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-6 border border-cyan-100 sticky top-24">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Informações de contato</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-cyan-600 mt-0.5" />
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Endereço</div>
                        <div className="text-slate-700">{clube.endereco}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-cyan-600 mt-0.5" />
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Telefone</div>
                        <a href={`tel:${clube.telefone}`} className="text-slate-700 hover:text-cyan-600 transition-colors">
                          {clube.telefone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-cyan-600 mt-0.5" />
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Email</div>
                        <a href={`mailto:${clube.email}`} className="text-slate-700 hover:text-cyan-600 transition-colors break-all">
                          {clube.email}
                        </a>
                      </div>
                    </div>

                    {clube.instagram && (
                      <div className="flex items-start gap-3">
                        <Instagram className="w-5 h-5 text-cyan-600 mt-0.5" />
                        <div>
                          <div className="text-sm text-slate-500 mb-1">Instagram</div>
                          <a href={`https://instagram.com/${clube.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-cyan-600 transition-colors">
                            {clube.instagram}
                          </a>
                        </div>
                      </div>
                    )}

                    {clube.site && (
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-cyan-600 mt-0.5" />
                        <div>
                          <div className="text-sm text-slate-500 mb-1">Site</div>
                          <a href={clube.site} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-cyan-600 transition-colors">
                            Visitar site
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {clube.valores && (
                    <div className="mt-6 pt-6 border-t border-cyan-200">
                      <div className="text-sm text-slate-500 mb-2">Valores</div>
                      <div className="text-lg font-bold text-slate-900">{clube.valores}</div>
                    </div>
                  )}

                  <div className="mt-6 space-y-3">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-xl hover:shadow-xl transition-all font-medium">
                      Entrar em contato
                    </button>
                    <button className="w-full px-6 py-3 bg-white text-cyan-700 rounded-xl hover:shadow-lg transition-all font-medium border border-cyan-200">
                      Adicionar aos favoritos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 py-12 mt-16">
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
