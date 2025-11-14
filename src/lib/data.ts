export interface Clube {
  id: string
  nome: string
  cidade: string
  estado: string
  descricao: string
  avaliacao: number
  avaliacoes: number
  proximasAulas: number
  endereco: string
  telefone: string
  email: string
  horarios: string[]
  valores?: string
  instagram?: string
  site?: string
}

export interface Aula {
  id: string
  clubeId: string
  titulo: string
  data: string
  horario: string
  duracao: string
  vagas: number
  vagasDisponiveis: number
  nivel: "Iniciante" | "Intermediário" | "Avançado"
  instrutor: string
  valor?: number
}

export const clubes: Clube[] = [
  {
    id: "1",
    nome: "Vaʻa Rio",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    descricao: "Clube tradicional de canoagem havaiana com mais de 10 anos de história. Localizado na Lagoa Rodrigo de Freitas, oferecemos treinos para todos os níveis.",
    avaliacao: 4.8,
    avaliacoes: 127,
    proximasAulas: 8,
    endereco: "Av. Borges de Medeiros, 1424 - Lagoa, Rio de Janeiro - RJ",
    telefone: "(21) 99999-0001",
    email: "contato@vaario.com.br",
    horarios: ["Seg-Sex: 6h-8h, 17h-19h", "Sáb: 7h-11h", "Dom: 7h-10h"],
    valores: "A partir de R$ 150/mês",
    instagram: "@vaario",
  },
  {
    id: "2",
    nome: "São Paulo Outrigger",
    cidade: "São Paulo",
    estado: "SP",
    descricao: "Maior clube de vaʻa de São Paulo. Treinos na Represa Guarapiranga com equipe profissional e estrutura completa para atletas de todos os níveis.",
    avaliacao: 4.9,
    avaliacoes: 203,
    proximasAulas: 12,
    endereco: "Av. Atlântica, 1000 - Interlagos, São Paulo - SP",
    telefone: "(11) 98888-0002",
    email: "contato@spoutrigger.com.br",
    horarios: ["Seg-Sex: 6h-8h, 18h-20h", "Sáb-Dom: 7h-12h"],
    valores: "A partir de R$ 180/mês",
    instagram: "@spoutrigger",
  },
  {
    id: "3",
    nome: "Floripa Vaʻa Club",
    cidade: "Florianópolis",
    estado: "SC",
    descricao: "Clube de canoagem havaiana em Florianópolis. Treinos na Lagoa da Conceição com vista privilegiada e ambiente acolhedor para iniciantes.",
    avaliacao: 4.7,
    avaliacoes: 89,
    proximasAulas: 6,
    endereco: "Av. das Rendeiras, 1500 - Lagoa da Conceição, Florianópolis - SC",
    telefone: "(48) 97777-0003",
    email: "contato@floripavaa.com.br",
    horarios: ["Ter-Qui: 7h-9h, 17h-19h", "Sáb: 8h-12h"],
    valores: "A partir de R$ 140/mês",
    instagram: "@floripavaa",
  },
  {
    id: "4",
    nome: "Salvador Paddlers",
    cidade: "Salvador",
    estado: "BA",
    descricao: "Clube de vaʻa na Baía de Todos os Santos. Águas calmas perfeitas para iniciantes e treinos técnicos para atletas avançados.",
    avaliacao: 4.6,
    avaliacoes: 64,
    proximasAulas: 5,
    endereco: "Av. Contorno, 2500 - Comércio, Salvador - BA",
    telefone: "(71) 96666-0004",
    email: "contato@salvadorpaddlers.com.br",
    horarios: ["Seg-Qua-Sex: 6h-8h", "Sáb: 7h-10h"],
    valores: "A partir de R$ 120/mês",
    instagram: "@salvadorpaddlers",
  },
  {
    id: "5",
    nome: "Brasília Vaʻa",
    cidade: "Brasília",
    estado: "DF",
    descricao: "Primeiro clube de canoagem havaiana do Centro-Oeste. Treinos no Lago Paranoá com equipe dedicada e foco em competições.",
    avaliacao: 4.8,
    avaliacoes: 112,
    proximasAulas: 7,
    endereco: "SHIS QI 11 - Lago Sul, Brasília - DF",
    telefone: "(61) 95555-0005",
    email: "contato@brasiliavaa.com.br",
    horarios: ["Seg-Sex: 6h-8h, 18h-20h", "Sáb: 7h-11h"],
    valores: "A partir de R$ 160/mês",
    instagram: "@brasiliavaa",
  },
  {
    id: "6",
    nome: "Recife Ocean Club",
    cidade: "Recife",
    estado: "PE",
    descricao: "Clube de vaʻa em Recife com treinos no mar e na lagoa. Ambiente familiar e aulas para todas as idades.",
    avaliacao: 4.5,
    avaliacoes: 78,
    proximasAulas: 4,
    endereco: "Av. Boa Viagem, 3000 - Boa Viagem, Recife - PE",
    telefone: "(81) 94444-0006",
    email: "contato@recifeocean.com.br",
    horarios: ["Ter-Qui-Sáb: 6h-8h", "Dom: 7h-10h"],
    valores: "A partir de R$ 130/mês",
    instagram: "@recifeocean",
  },
]

export const aulas: Aula[] = [
  {
    id: "a1",
    clubeId: "1",
    titulo: "Aula Iniciante - Técnica Básica",
    data: "2025-02-15",
    horario: "07:00",
    duracao: "2h",
    vagas: 6,
    vagasDisponiveis: 2,
    nivel: "Iniciante",
    instrutor: "Carlos Silva",
    valor: 80,
  },
  {
    id: "a2",
    clubeId: "1",
    titulo: "Treino Avançado - Preparação Competição",
    data: "2025-02-15",
    horario: "17:00",
    duracao: "2h",
    vagas: 6,
    vagasDisponiveis: 0,
    nivel: "Avançado",
    instrutor: "Marina Costa",
    valor: 100,
  },
  {
    id: "a3",
    clubeId: "2",
    titulo: "Aula Intermediário - Remada Longa",
    data: "2025-02-16",
    horario: "06:00",
    duracao: "3h",
    vagas: 6,
    vagasDisponiveis: 4,
    nivel: "Intermediário",
    instrutor: "João Santos",
    valor: 90,
  },
]
