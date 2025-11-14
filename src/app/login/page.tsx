"use client"

import { useState } from "react"
import { Waves, Mail, Lock, User, Building2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [userType, setUserType] = useState<"aluno" | "dono">("aluno")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    clubName: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulação de login - em produção, conectar com backend
    if (isLogin) {
      // Login
      if (userType === "dono") {
        router.push("/dashboard/clube")
      } else {
        router.push("/dashboard/aluno")
      }
    } else {
      // Cadastro
      if (userType === "dono") {
        router.push("/dashboard/clube")
      } else {
        router.push("/dashboard/aluno")
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-700 to-blue-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <Waves className="w-10 h-10 text-white" />
            <span className="text-3xl font-bold text-white">
              Vaʻa<span className="font-normal">Hub</span>
            </span>
          </Link>
          <p className="text-cyan-100">Conectando a comunidade de canoagem</p>
        </div>

        {/* Card de Login/Cadastro */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Toggle Login/Cadastro */}
          <div className="flex gap-2 mb-6 bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-md font-medium transition-all ${
                isLogin
                  ? "bg-white text-cyan-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Entrar
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-md font-medium transition-all ${
                !isLogin
                  ? "bg-white text-cyan-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Cadastrar
            </button>
          </div>

          {/* Seletor de Tipo de Usuário */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Você é:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserType("aluno")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  userType === "aluno"
                    ? "border-cyan-600 bg-cyan-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <User className={`w-6 h-6 mx-auto mb-2 ${
                  userType === "aluno" ? "text-cyan-600" : "text-slate-400"
                }`} />
                <div className={`text-sm font-medium ${
                  userType === "aluno" ? "text-cyan-700" : "text-slate-600"
                }`}>
                  Aluno
                </div>
              </button>
              <button
                type="button"
                onClick={() => setUserType("dono")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  userType === "dono"
                    ? "border-cyan-600 bg-cyan-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <Building2 className={`w-6 h-6 mx-auto mb-2 ${
                  userType === "dono" ? "text-cyan-600" : "text-slate-400"
                }`} />
                <div className={`text-sm font-medium ${
                  userType === "dono" ? "text-cyan-700" : "text-slate-600"
                }`}>
                  Dono de Clube
                </div>
              </button>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nome completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Seu nome"
                    required
                  />
                </div>
              </div>
            )}

            {!isLogin && userType === "dono" && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nome do clube
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={formData.clubName}
                    onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Nome do seu clube"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg font-medium hover:shadow-xl transition-all"
            >
              {isLogin ? "Entrar" : "Criar conta"}
            </button>
          </form>

          {/* Link alternativo */}
          <div className="mt-6 text-center text-sm text-slate-600">
            {isLogin ? (
              <>
                Não tem uma conta?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  Cadastre-se
                </button>
              </>
            ) : (
              <>
                Já tem uma conta?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  Entrar
                </button>
              </>
            )}
          </div>
        </div>

        {/* Link para voltar */}
        <div className="text-center mt-6">
          <Link href="/" className="text-cyan-100 hover:text-white transition-colors text-sm">
            ← Voltar para home
          </Link>
        </div>
      </div>
    </div>
  )
}
