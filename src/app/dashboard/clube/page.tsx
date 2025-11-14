"use client"

import { useState } from "react"
import { Waves, Calendar, Users, Trophy, Plus, Edit, Trash2, Bell, LogOut, Home, BarChart3, Settings, MapPin, Clock, DollarSign, Image as ImageIcon, Save, CreditCard, TrendingUp, Download, Search } from "lucide-react"
import Link from "next/link"

export default function DashboardClube() {
  const [activeTab, setActiveTab] = useState<"overview" | "aulas" | "eventos" | "alunos" | "clube" | "pagamentos">("overview")
  const [showNewAulaModal, setShowNewAulaModal] = useState(false)
  const [showNewEventoModal, setShowNewEventoModal] = useState(false)
  const [showEditClubeModal, setShowEditClubeModal] = useState(false)

  // Dados simulados do clube
  const clubeInfo = {
    nome: "Clube Náutico Carioca",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    endereco: "Av. Atlântica, 1500 - Copacabana",
    telefone: "(21) 98765-4321",
    email: "contato@nauticocarioca.com.br",
    instagram: "@nauticocarioca",
    site: "www.nauticocarioca.com.br"
  }

  const estatisticas = {
    totalAlunos: 127,
    aulasAgendadas: 18,
    eventosProximos: 3,
    avaliacaoMedia: 4.8
  }

  const proximasAulas = [
    {
      id: 1,
      titulo: "Treino de Va'a - Iniciante",
      data: "2025-02-20",
      horario: "07:00",
      duracao: "2h",
      instrutor: "Carlos Silva",
      vagas: 8,
      inscritos: 6
    },
    {
      id: 2,
      titulo: "Técnica de Remada Avançada",
      data: "2025-02-22",
      horario: "09:00",
      duracao: "1h30",
      instrutor: "Ana Costa",
      vagas: 10,
      inscritos: 10
    }
  ]

  const proximosEventos = [
    {
      id: 1,
      titulo: "Campeonato Interno de Va'a",
      data: "2025-03-10",
      local: "Lagoa Rodrigo de Freitas",
      participantes: 32,
      tipo: "Campeonato"
    },
    {
      id: 2,
      titulo: "Remada Coletiva - Amanhecer",
      data: "2025-02-28",
      local: "Praia de Copacabana",
      participantes: 18,
      tipo: "Evento Social"
    }
  ]

  const alunos = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao@email.com",
      telefone: "(21) 99999-1111",
      nivel: "Iniciante",
      aulasRealizadas: 12
    },
    {
      id: 2,
      nome: "Maria Santos",
      email: "maria@email.com",
      telefone: "(21) 99999-2222",
      nivel: "Intermediário",
      aulasRealizadas: 28
    },
    {
      id: 3,
      nome: "Pedro Costa",
      email: "pedro@email.com",
      telefone: "(21) 99999-3333",
      nivel: "Avançado",
      aulasRealizadas: 45
    }
  ]

  // Dados de pagamentos
  const estatisticasPagamentos = {
    receitaMensal: 12450.00,
    receitaTotal: 87320.00,
    pagamentosPendentes: 3,
    taxaConversao: 94.5
  }

  const transacoes = [
    {
      id: 1,
      aluno: "João Silva",
      descricao: "Mensalidade - Fevereiro 2025",
      valor: 350.00,
      status: "pago",
      data: "2025-02-10",
      metodo: "Cartão de Crédito"
    },
    {
      id: 2,
      aluno: "Maria Santos",
      descricao: "Pacote 10 aulas",
      valor: 800.00,
      status: "pago",
      data: "2025-02-08",
      metodo: "PIX"
    },
    {
      id: 3,
      aluno: "Pedro Costa",
      descricao: "Mensalidade - Fevereiro 2025",
      valor: 350.00,
      status: "pendente",
      data: "2025-02-15",
      metodo: "Boleto"
    },
    {
      id: 4,
      aluno: "Ana Oliveira",
      descricao: "Aula avulsa",
      valor: 120.00,
      status: "pago",
      data: "2025-02-12",
      metodo: "PIX"
    },
    {
      id: 5,
      aluno: "Carlos Mendes",
      descricao: "Inscrição Campeonato",
      valor: 200.00,
      status: "pendente",
      data: "2025-02-14",
      metodo: "Cartão de Débito"
    }
  ]

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
                  <div className="text-sm font-medium text-slate-900">{clubeInfo.nome}</div>
                  <div className="text-xs text-slate-500">Administrador</div>
                </div>
                <button className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                  CN
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
                  onClick={() => setActiveTab("overview")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === "overview"
                      ? "bg-gradient-to-r from-blue-900 to-cyan-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Visão Geral</span>
                </button>

                <button
                  onClick={() => setActiveTab("aulas")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === "aulas"
                      ? "bg-gradient-to-r from-blue-900 to-cyan-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Aulas</span>
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
                  onClick={() => setActiveTab("alunos")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === "alunos"
                      ? "bg-gradient-to-r from-blue-900 to-cyan-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Alunos</span>
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

                <button
                  onClick={() => setActiveTab("clube")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === "clube"
                      ? "bg-gradient-to-r from-blue-900 to-cyan-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Meu Clube</span>
                </button>

                <div className="pt-4 mt-4 border-t border-slate-200">
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
            {/* Overview */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-slate-900">Visão Geral</h1>

                {/* Cards de Estatísticas */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{estatisticas.totalAlunos}</div>
                    </div>
                    <div className="text-sm text-slate-600">Total de Alunos</div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-cyan-50 rounded-lg">
                        <Calendar className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{estatisticas.aulasAgendadas}</div>
                    </div>
                    <div className="text-sm text-slate-600">Aulas Agendadas</div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Trophy className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{estatisticas.eventosProximos}</div>
                    </div>
                    <div className="text-sm text-slate-600">Eventos Próximos</div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-yellow-50 rounded-lg">
                        <BarChart3 className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{estatisticas.avaliacaoMedia}</div>
                    </div>
                    <div className="text-sm text-slate-600">Avaliação Média</div>
                  </div>
                </div>

                {/* Próximas Aulas */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900">Próximas Aulas</h2>
                    <button
                      onClick={() => setShowNewAulaModal(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all text-sm"
                    >
                      <Plus className="w-4 h-4" />
                      Nova aula
                    </button>
                  </div>
                  <div className="space-y-4">
                    {proximasAulas.slice(0, 3).map((aula) => (
                      <div key={aula.id} className="p-4 bg-slate-50 rounded-xl">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-medium text-slate-900 mb-2">{aula.titulo}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(aula.data).toLocaleDateString("pt-BR")}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {aula.horario}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {aula.inscritos}/{aula.vagas} vagas
                              </span>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                            <Edit className="w-4 h-4 text-slate-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Próximos Eventos */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900">Próximos Eventos</h2>
                    <button
                      onClick={() => setShowNewEventoModal(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all text-sm"
                    >
                      <Plus className="w-4 h-4" />
                      Novo evento
                    </button>
                  </div>
                  <div className="space-y-4">
                    {proximosEventos.map((evento) => (
                      <div key={evento.id} className="p-4 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-xl border border-cyan-100">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-medium text-slate-900">{evento.titulo}</h3>
                              <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full">{evento.tipo}</span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(evento.data).toLocaleDateString("pt-BR")}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {evento.local}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {evento.participantes} participantes
                              </span>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-cyan-100 rounded-lg transition-colors">
                            <Edit className="w-4 h-4 text-cyan-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Aulas */}
            {activeTab === "aulas" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">Gerenciar Aulas</h1>
                  <button
                    onClick={() => setShowNewAulaModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    <Plus className="w-5 h-5" />
                    Nova aula
                  </button>
                </div>

                <div className="space-y-4">
                  {proximasAulas.map((aula) => (
                    <div key={aula.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-3">{aula.titulo}</h3>
                          <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(aula.data).toLocaleDateString("pt-BR")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{aula.horario} ({aula.duracao})</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>Instrutor: {aula.instrutor}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span className={aula.inscritos === aula.vagas ? "text-red-600 font-medium" : ""}>
                                {aula.inscritos}/{aula.vagas} vagas preenchidas
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition-colors">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Eventos */}
            {activeTab === "eventos" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">Gerenciar Eventos</h1>
                  <button
                    onClick={() => setShowNewEventoModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    <Plus className="w-5 h-5" />
                    Novo evento
                  </button>
                </div>

                <div className="space-y-4">
                  {proximosEventos.map((evento) => (
                    <div key={evento.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <h3 className="text-lg font-bold text-slate-900">{evento.titulo}</h3>
                            <span className="text-sm px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">{evento.tipo}</span>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
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
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition-colors">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Alunos */}
            {activeTab === "alunos" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">Alunos Cadastrados</h1>
                  <div className="text-sm text-slate-600">
                    Total: <span className="font-bold text-slate-900">{alunos.length}</span> alunos
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Nome</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Email</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Telefone</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Nível</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Aulas</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {alunos.map((aluno) => (
                          <tr key={aluno.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 text-sm text-slate-900 font-medium">{aluno.nome}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">{aluno.email}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">{aluno.telefone}</td>
                            <td className="px-6 py-4">
                              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                aluno.nivel === "Iniciante" ? "bg-green-100 text-green-700" :
                                aluno.nivel === "Intermediário" ? "bg-yellow-100 text-yellow-700" :
                                "bg-red-100 text-red-700"
                              }`}>
                                {aluno.nivel}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">{aluno.aulasRealizadas}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Pagamentos */}
            {activeTab === "pagamentos" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">Gestão de Pagamentos</h1>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all">
                    <Download className="w-5 h-5" />
                    <span className="hidden sm:inline">Exportar relatório</span>
                  </button>
                </div>

                {/* Cards de Estatísticas Financeiras */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        R$ {estatisticasPagamentos.receitaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div className="text-sm text-slate-600">Receita Mensal</div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        R$ {estatisticasPagamentos.receitaTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div className="text-sm text-slate-600">Receita Total</div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{estatisticasPagamentos.pagamentosPendentes}</div>
                    </div>
                    <div className="text-sm text-slate-600">Pagamentos Pendentes</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <BarChart3 className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{estatisticasPagamentos.taxaConversao}%</div>
                    </div>
                    <div className="text-sm text-slate-600">Taxa de Conversão</div>
                  </div>
                </div>

                {/* Filtros e Busca */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Buscar por aluno ou descrição..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                    <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                      <option value="">Todos os status</option>
                      <option value="pago">Pagos</option>
                      <option value="pendente">Pendentes</option>
                      <option value="atrasado">Atrasados</option>
                    </select>
                    <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                      <option value="">Todos os métodos</option>
                      <option value="pix">PIX</option>
                      <option value="cartao">Cartão</option>
                      <option value="boleto">Boleto</option>
                    </select>
                  </div>
                </div>

                {/* Lista de Transações */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Aluno</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Descrição</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Valor</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Data</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Método</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Status</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Ações</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {transacoes.map((transacao) => (
                          <tr key={transacao.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 text-sm text-slate-900 font-medium">{transacao.aluno}</td>
                            <td className="px-6 py-4 text-sm text-slate-600">{transacao.descricao}</td>
                            <td className="px-6 py-4 text-sm font-medium text-slate-900">
                              R$ {transacao.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">
                              {new Date(transacao.data).toLocaleDateString("pt-BR")}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">{transacao.metodo}</td>
                            <td className="px-6 py-4">
                              <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                                transacao.status === "pago" 
                                  ? "bg-green-100 text-green-700" 
                                  : "bg-orange-100 text-orange-700"
                              }`}>
                                {transacao.status === "pago" ? "Pago" : "Pendente"}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <button className="text-cyan-600 hover:text-cyan-700 text-sm font-medium">
                                Ver detalhes
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Meu Clube */}
            {activeTab === "clube" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">Informações do Clube</h1>
                  <button
                    onClick={() => setShowEditClubeModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    <Edit className="w-5 h-5" />
                    Editar
                  </button>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nome do Clube</label>
                      <div className="text-lg text-slate-900">{clubeInfo.nome}</div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Cidade</label>
                        <div className="text-slate-900">{clubeInfo.cidade}</div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Estado</label>
                        <div className="text-slate-900">{clubeInfo.estado}</div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Endereço</label>
                      <div className="text-slate-900">{clubeInfo.endereco}</div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
                        <div className="text-slate-900">{clubeInfo.telefone}</div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <div className="text-slate-900">{clubeInfo.email}</div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Instagram</label>
                        <div className="text-slate-900">{clubeInfo.instagram}</div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Site</label>
                        <div className="text-slate-900">{clubeInfo.site}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Nova Aula (Simplificado) */}
      {showNewAulaModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Nova Aula</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Título da aula</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Data</label>
                  <input type="date" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Horário</label>
                  <input type="time" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setShowNewAulaModal(false)} className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium">
                  Cancelar
                </button>
                <button type="submit" className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all font-medium">
                  Criar aula
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Novo Evento (Simplificado) */}
      {showNewEventoModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Novo Evento</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Título do evento</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tipo</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option>Campeonato</option>
                  <option>Evento Social</option>
                  <option>Treino Especial</option>
                </select>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setShowNewEventoModal(false)} className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium">
                  Cancelar
                </button>
                <button type="submit" className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all font-medium">
                  Criar evento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
