"use client"

import { useState } from "react"
import { Waves, Calendar, Heart, Trophy, Users, MapPin, Clock, Star, Plus, Search, Filter, Bell, User, LogOut, Home, Bookmark, Award, CreditCard, DollarSign, CheckCircle, XCircle, Download } from "lucide-react"
import Link from "next/link"

export default function DashboardAluno() {
  const [activeTab, setActiveTab] = useState<"feed" | "agenda" | "favoritos" | "eventos" | "pagamentos">("feed")

  // Dados simulados
  const minhasAulas = [
    {
      id: 1,
      titulo: "Treino de Va'a - Iniciante",
      clube: "Clube Náutico Carioca",
      data: "2025-02-20",
      horario: "07:00",
      instrutor: "Carlos Silva"
    },
    {
      id: 2,
      titulo: "Técnica de Remada Avançada",
      clube: "Associação de Canoagem SP",
      data: "2025-02-22",
      horario: "09:00",
      instrutor: "Ana Costa"
    }
  ]

  const clubesFavoritos = [
    {
      id: 1,
      nome: "Clube Náutico Carioca",
      cidade: "Rio de Janeiro",
      avaliacao: 4.8,
      imagem: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      nome: "Associação de Canoagem SP",
      cidade: "São Paulo",
      avaliacao: 4.9,
      imagem: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&h=300&fit=crop"
    }
  ]

  const eventosProximos = [
    {
      id: 1,
      titulo: "Campeonato Estadual de Va'a",
      data: "2025-03-15",
      local: "Lagoa Rodrigo de Freitas - RJ",
      participantes: 45,
      tipo: "Campeonato"
    },
    {
      id: 2,
      titulo: "Remada Coletiva - Amanhecer",
      data: "2025-02-25",
      local: "Praia de Copacabana - RJ",
      participantes: 28,
      tipo: "Evento Social"
    }
  ]

  const feedPosts = [
    {
      id: 1,
      autor: "Carlos Silva",
      clube: "Clube Náutico Carioca",
      tempo: "2h atrás",
      conteudo: "Treino incrível hoje! A turma está evoluindo muito. Parabéns a todos! 🚣‍♂️",
      imagem: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=400&fit=crop",
      curtidas: 24,
      comentarios: 5
    },
    {
      id: 2,
      autor: "Ana Costa",
      clube: "Associação de Canoagem SP",
      tempo: "5h atrás",
      conteudo: "Preparação para o campeonato estadual está a todo vapor! Quem vai participar? 🏆",
      curtidas: 18,
      comentarios: 8
    },
    {
      id: 3,
      autor: "Marina Santos",
      clube: "Clube de Remo Floripa",
      tempo: "1 dia atrás",
      conteudo: "Aula especial de técnica de remada neste sábado! Vagas limitadas.",
      imagem: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      curtidas: 32,
      comentarios: 12
    }
  ]

  // Dados de pagamentos do aluno
  const meusPagamentos = [
    {
      id: 1,
      clube: "Clube Náutico Carioca",
      descricao: "Mensalidade - Fevereiro 2025",
      valor: 350.00,
      status: "pago",
      data: "2025-02-10",
      metodo: "Cartão de Crédito",
      vencimento: "2025-02-05"
    },
    {
      id: 2,
      clube: "Associação de Canoagem SP",
      descricao: "Pacote 10 aulas",
      valor: 800.00,
      status: "pago",
      data: "2025-02-08",
      metodo: "PIX",
      vencimento: "2025-02-08"
    },
    {
      id: 3,
      clube: "Clube Náutico Carioca",
      descricao: "Mensalidade - Março 2025",
      valor: 350.00,
      status: "pendente",
      data: null,
      metodo: "Boleto",
      vencimento: "2025-03-05"
    },
    {
      id: 4,
      clube: "Clube de Remo Floripa",
      descricao: "Inscrição Campeonato",
      valor: 200.00,
      status: "pendente",
      data: null,
      metodo: "PIX",
      vencimento: "2025-02-20"
    }
  ]

  const totalPago = meusPagamentos.filter(p => p.status === "pago").reduce((acc, p) => acc + p.valor, 0)
  const totalPendente = meusPagamentos.filter(p => p.status === "pendente").reduce((acc, p) => acc + p.valor, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Waves className="w-8 h-8 text-cyan-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">
                Vaʻa<span className="font-normal">Hub</span>
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l">
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-medium text-slate-900">João Silva</div>
                  <div className="text-xs text-slate-500">Aluno</div>
                </div>
                <button className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                  JS
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("feed")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === "feed"
                      ? "bg-gradient-to-r from-blue-900 to-cyan-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Feed</span>
                </button>

                <button
                  onClick={() => setActiveTab("agenda")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === "agenda"
                      ? "bg-gradient-to-r from-blue-900 to-cyan-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Minha Agenda</span>
                </button>

                <button
                  onClick={() => setActiveTab("favoritos")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === "favoritos"
                      ? "bg-gradient-to-r from-blue-900 to-cyan-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">Favoritos</span>
                </button>

                <button
                  onClick={() => setActiveTab("eventos")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === "eventos"
                      ? "bg-gradient-to-r from-blue-900 to-cyan-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Trophy className="w-5 h-5" />
                  <span className="font-medium">Eventos</span>
                </button>

                <button
                  onClick={() => setActiveTab("pagamentos")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === "pagamentos"
                      ? "bg-gradient-to-r from-blue-900 to-cyan-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="font-medium">Pagamentos</span>
                </button>

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <Link
                    href="/explorar"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-all"
                  >
                    <Search className="w-5 h-5" />
                    <span className="font-medium">Explorar Clubes</span>
                  </Link>

                  <Link
                    href="/"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-all"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Sair</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="lg:col-span-3">
            {/* Feed */}
            {activeTab === "feed" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">Feed da Comunidade</h1>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all">
                    <Plus className="w-5 h-5" />
                    <span className="hidden sm:inline">Nova publicação</span>
                  </button>
                </div>

                {/* Posts */}
                <div className="space-y-6">
                  {feedPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                      {/* Header do Post */}
                      <div className="p-6 pb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                            {post.autor.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-slate-900">{post.autor}</div>
                            <div className="text-sm text-slate-500">{post.clube} • {post.tempo}</div>
                          </div>
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className="px-6 pb-4">
                        <p className="text-slate-700">{post.conteudo}</p>
                      </div>

                      {/* Imagem */}
                      {post.imagem && (
                        <img
                          src={post.imagem}
                          alt="Post"
                          className="w-full h-80 object-cover"
                        />
                      )}

                      {/* Ações */}
                      <div className="p-6 pt-4 flex items-center gap-6">
                        <button className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                          <span className="text-sm font-medium">{post.curtidas}</span>
                        </button>
                        <button className="flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors">
                          <Users className="w-5 h-5" />
                          <span className="text-sm font-medium">{post.comentarios} comentários</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Agenda */}
            {activeTab === "agenda" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">Minha Agenda</h1>
                  <Link
                    href="/explorar"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    <Plus className="w-5 h-5" />
                    <span className="hidden sm:inline">Reservar aula</span>
                  </Link>
                </div>

                {minhasAulas.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                    <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-slate-900 mb-2">Nenhuma aula agendada</h3>
                    <p className="text-slate-500 mb-6">Explore os clubes e reserve sua primeira aula!</p>
                    <Link
                      href="/explorar"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      Explorar clubes
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {minhasAulas.map((aula) => (
                      <div key={aula.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{aula.titulo}</h3>
                            <div className="space-y-1 text-sm text-slate-600">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{aula.clube}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(aula.data).toLocaleDateString("pt-BR")}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{aula.horario}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Instrutor: {aula.instrutor}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col gap-2">
                            <button className="flex-1 sm:flex-none px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition-colors text-sm font-medium">
                              Ver detalhes
                            </button>
                            <button className="flex-1 sm:flex-none px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium">
                              Cancelar
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Favoritos */}
            {activeTab === "favoritos" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">Clubes Favoritos</h1>
                </div>

                {clubesFavoritos.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                    <Heart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-slate-900 mb-2">Nenhum favorito ainda</h3>
                    <p className="text-slate-500 mb-6">Adicione clubes aos favoritos para acompanhar novidades!</p>
                    <Link
                      href="/explorar"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      Explorar clubes
                    </Link>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-6">
                    {clubesFavoritos.map((clube) => (
                      <div key={clube.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all">
                        <img
                          src={clube.imagem}
                          alt={clube.nome}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{clube.nome}</h3>
                          <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                            <MapPin className="w-4 h-4" />
                            <span>{clube.cidade}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium text-slate-700">{clube.avaliacao}</span>
                          </div>
                          <div className="flex gap-2">
                            <Link
                              href={`/clube/${clube.id}`}
                              className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all text-center text-sm font-medium"
                            >
                              Ver clube
                            </Link>
                            <button className="px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
                              <Heart className="w-5 h-5 fill-current" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Eventos */}
            {activeTab === "eventos" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">Eventos e Campeonatos</h1>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                    <Filter className="w-5 h-5" />
                    <span className="hidden sm:inline">Filtrar</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {eventosProximos.map((evento) => (
                    <div key={evento.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
                              <Trophy className="w-6 h-6 text-cyan-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-slate-900">{evento.titulo}</h3>
                              <span className="text-sm text-cyan-600 font-medium">{evento.tipo}</span>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(evento.data).toLocaleDateString("pt-BR", { dateStyle: "long" })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{evento.local}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>{evento.participantes} participantes confirmados</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col gap-2">
                          <button className="flex-1 sm:flex-none px-6 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium whitespace-nowrap">
                            Participar
                          </button>
                          <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                            <Bookmark className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pagamentos */}
            {activeTab === "pagamentos" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">Meus Pagamentos</h1>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all">
                    <Download className="w-5 h-5" />
                    <span className="hidden sm:inline">Extrato</span>
                  </button>
                </div>

                {/* Cards de Resumo */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        R$ {totalPago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div className="text-sm text-slate-600">Total Pago</div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        R$ {totalPendente.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div className="text-sm text-slate-600">Pagamentos Pendentes</div>
                  </div>
                </div>

                {/* Filtros */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Buscar pagamentos..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                    <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                      <option value="">Todos os status</option>
                      <option value="pago">Pagos</option>
                      <option value="pendente">Pendentes</option>
                    </select>
                  </div>
                </div>

                {/* Lista de Pagamentos */}
                <div className="space-y-4">
                  {meusPagamentos.map((pagamento) => (
                    <div key={pagamento.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <div className={`p-2 rounded-lg ${
                              pagamento.status === "pago" 
                                ? "bg-green-50" 
                                : "bg-orange-50"
                            }`}>
                              {pagamento.status === "pago" ? (
                                <CheckCircle className="w-6 h-6 text-green-600" />
                              ) : (
                                <Clock className="w-6 h-6 text-orange-600" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-slate-900 mb-1">{pagamento.descricao}</h3>
                              <p className="text-sm text-slate-600">{pagamento.clube}</p>
                            </div>
                          </div>
                          
                          <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 mb-4">
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4" />
                              <span className="font-medium text-slate-900">
                                R$ {pagamento.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CreditCard className="w-4 h-4" />
                              <span>{pagamento.metodo}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>Vencimento: {new Date(pagamento.vencimento).toLocaleDateString("pt-BR")}</span>
                            </div>
                            {pagamento.data && (
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>Pago em: {new Date(pagamento.data).toLocaleDateString("pt-BR")}</span>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                              pagamento.status === "pago" 
                                ? "bg-green-100 text-green-700" 
                                : "bg-orange-100 text-orange-700"
                            }`}>
                              {pagamento.status === "pago" ? "Pago" : "Pendente"}
                            </span>
                          </div>
                        </div>

                        <div className="flex sm:flex-col gap-2">
                          {pagamento.status === "pendente" ? (
                            <button className="flex-1 sm:flex-none px-6 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium whitespace-nowrap">
                              Pagar agora
                            </button>
                          ) : (
                            <button className="flex-1 sm:flex-none px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium whitespace-nowrap">
                              Ver comprovante
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
