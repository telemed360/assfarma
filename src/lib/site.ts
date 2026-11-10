/* -------------------------------------------------------------------------
 *  ARQUIVO CENTRAL DE CONTEÚDO
 *  Tudo que muda com frequência (contato, preços, textos, depoimentos, FAQ)
 *  fica aqui. Não é preciso mexer nos componentes para atualizar o site.
 * ---------------------------------------------------------------------- */

export const site = {
  name: "Assfarma",
  shortName: "Assfarma",
  /** Domínio na Cloudflare: assfarma.com.br */
  domain: "assfarma.com.br",
  url: "https://www.assfarma.com.br",
  /** E-mail de suporte/SAC da empresa. */
  email: "sac@assfarma.com.br",

  /** WhatsApp de atendimento. Formato internacional, só dígitos. */
  whatsapp: "5531990996657",
  whatsappLabel: "(31) 99099-6657",

  /** Plataforma de teleconsulta (consultório virtual) da Assfarma. */
  clinicUrl: "https://clinica.assfarma.com.br",

  /** Dados jurídicos que aparecem no rodapé. Campo vazio não aparece no site. */
  legal: {
    razaoSocial: "Conect Invest Capital",
    projeto: "Projeto Assfarma Saúde Social",
    /** ⚠️ AGUARDANDO: CNPJ da Conect Invest Capital. */
    cnpj: "",
    responsavelTecnico: "José Lafaiete Barbosa",
  },

  description:
    "Consultas médicas online 24h por dia, com pronto atendimento, mais de 30 especialidades, nutrição e saúde mental. Planos a partir de R$ 49,90/mês com crédito mensal para medicamentos, sem carência e 100% digital.",

  hours: {
    urgencia: "Pronto atendimento 24h, todos os dias",
    administrativo: "Administrativo: segunda a sexta, 9h às 18h",
  },
} as const;

export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

/* ------------------------------------------------------------------ NAV */
export const navLinks = [
  { label: "Medicamentos", href: "#medicamentos" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Planos", href: "#planos" },
  { label: "Carreira", href: "#consultor" },
  // { label: "Saúde Visual", href: "#saude-visual" },
] as const;

/* ---------------------------------------------------------------- STATS */
export const heroHighlights = [
  "Médico online em poucos minutos",
  "Crédito mensal para medicamentos",
  "Atendimento 24h, todos os dias",
  "+30 especialidades médicas",
  "Regulamentado pelo CFM",
  "Cobertura nacional",
] as const;

export const stats = [
  { value: 24, suffix: "h", label: "Pronto atendimento", hint: "Clínico Geral, Generalista, Médico da Família, Pediatra e Geriatra." },
  { value: 30, prefix: "+", label: "Especialidades", hint: "Da Alergologia a Urologia." },
  { value: 0, suffix: "", label: "Carência e coparticipação", hint: "Use no mesmo dia da contratação" },
] as const;

/* --------------------------------------------------------------- PLANOS */
/**
 * Telemedicina + Farmácia + PBM. Cada tipo de plano tem 3 níveis de crédito
 * mensal para medicamentos (base: Crédito 01 = R$ 120, 02 = R$ 250, 03 = R$ 400 por pessoa).
 */
export type PlanTier = {
  /** Código interno do plano (A01 a A09). */
  code: string;
  /** Nível de crédito: 1, 2 ou 3. */
  level: 1 | 2 | 3;
  /** Mensalidade, ex.: "49,90". */
  price: string;
  /** Crédito mensal para medicamentos, ex.: "120,00". */
  credit: string;
  /** ⚠️ AGUARDANDO: link de checkout. Sem link, o botão abre o WhatsApp. */
  checkoutUrl?: string;
};

export type PlanGroup = {
  id: "individual" | "casal" | "familia";
  name: string;
  who: string;
  coverage: string;
  tiers: PlanTier[];
};

export const planGroups: PlanGroup[] = [
  {
    id: "individual",
    name: "Individual",
    who: "Para o titular",
    coverage: "Consultas ilimitadas para o titular",
    tiers: [
      { code: "A01", level: 1, price: "49,90", credit: "120,00" },
      { code: "A02", level: 2, price: "59,90", credit: "250,00" },
      { code: "A03", level: 3, price: "69,90", credit: "400,00" },
    ],
  },
  {
    id: "casal",
    name: "Casal",
    who: "Titular + cônjuge",
    coverage: "Consultas ilimitadas para titular + cônjuge",
    tiers: [
      { code: "A04", level: 1, price: "79,90", credit: "240,00" },
      { code: "A05", level: 2, price: "89,90", credit: "500,00" },
      { code: "A06", level: 3, price: "99,90", credit: "800,00" },
    ],
  },
  {
    id: "familia",
    name: "Família",
    who: "Titular + 3 dependentes",
    coverage: "Consultas ilimitadas para titular + 3 dependentes",
    tiers: [
      { code: "A07", level: 1, price: "129,90", credit: "480,00" },
      { code: "A08", level: 2, price: "159,90", credit: "1.000,00" },
      { code: "A09", level: 3, price: "169,90", credit: "1.600,00" },
    ],
  },
];

/** Recursos comuns a todos os planos com PBM. */
export const planFeatures = [
  "Pronto atendimento 24h",
  "Mais de 30 especialidades médicas",
  "Crédito aceito em +25 mil farmácias",
  "Sem carência e sem fidelidade",
];

/** Menor mensalidade, usada no hero e na descrição do site. */
export const lowestPrice = "49,90";

export const companyPlan = {
  name: "Plano Empresa",
  price: "Sob consulta",
  summary: "Saúde e medicamentos como benefício, com custo previsível.",
  features: [
    "Cobertura completa para os colaboradores",
    "Pronto atendimento 24h para toda a equipe",
    "+30 especialidades e saúde mental",
    "Painel de gestão e relatórios de uso",
  ],
  cta: "Falar com consultor",
};

/* -------------------------------------------------------- ESPECIALIDADES */
export const specialties = [
  "Angiologia",
  "Alergologia",
  "Alergologia Infantil",
  "Cardiologia",
  "Dermatologia",
  "Endocrinologia",
  "Endocrinologia Infantil",
  "Geriatria",
  "Ginecologia",
  "Hematologia",
  "Infectologia",
  "Nefrologia",
  "Neurologia",
  "Neurologia Infantil",
  "Nutricionista",
  "Ortopedia",
  "Ortopedia Infantil",
  "Psicologia",
  "Fisioterapia",
  "Psicologia Infantil",
  "Psiquiatria",
  "Psiquiatria Infantil",
  "Reumatologia",
  "Reumatologia Infantil",
  "Gastroenterologia",
  "Gastroenterologia Infantil",
  "Sexóloga Clínica",
  "Nutróloga",
  "Otorrinolaringologia",
  "Pediatria",
  "Urologia",
  "Fisiatria",
  "Pneumologia",
  "Pneumologia Infantil",
  "Clínica Médica",
] as const;

/* ------------------------------------------------------------- COBERTURA */
type NetworkItem = {
  title: string;
  desc: string;
  /** Se preenchido, o card vira um link para o WhatsApp com esta mensagem. */
  whatsappMsg?: string;
};

export const network: NetworkItem[] = [
  { title: "Rede de farmácias", desc: "Descontos em medicamentos nas principais redes do país." },
  { title: "Drogarias de bairro", desc: "Parceiros locais para quem está longe dos grandes centros." },
  { title: "Novos parceiros", desc: "Rede em expansão contínua por todas as regiões." },
  {
    title: "Profissional de Carreira",
    desc: "Seja um consultor Assfarma na sua região e conquiste uma renda recorrente vitalícia.",
    whatsappMsg: "Olá! Vim pelo site e quero ser um consultor Assfarma.",
  },
];

/* ----------------------------------------------------------- DEPOIMENTOS */
export const testimonials = [
  {
    name: "Claudia Ferreira",
    city: "Salvador, BA",
    text:
      "Recomendo demais para qualquer pessoa que queira atenção médica de verdade. As consultas são fáceis de acessar pelo celular e é tudo muito rápido.",
  },
  {
    name: "Mário Alves",
    city: "Curitiba, PR",
    text:
      "Ser cliente da Assfarma foi a escolha certa para mim e para minha família. Conseguimos atendimento médico sem precisar correr riscos em hospitais.",
  },
  {
    name: "Jullya Santana",
    city: "Recife, PE",
    text:
      "Com o meu salário não consigo pagar um plano de saúde tradicional. A Assfarma é exatamente o que eu precisava: qualidade sem depender só do SUS.",
  },
] as const;

/* ------------------------------------------------------------------- FAQ */
export const faq = [
  {
    q: "A Assfarma é um plano de saúde?",
    a: "Não. A Assfarma é um serviço de telemedicina por assinatura, regulamentado pelo Conselho Federal de Medicina (Resolução CFM nº 2.314/2022). Não substitui um plano de saúde nem atende urgências que exijam socorro presencial. Nesses casos, procure o pronto-socorro mais próximo ou ligue 192.",
  },
  {
    q: "Tem carência ou taxa de adesão?",
    a: "Nenhuma das duas. A assinatura é liberada logo após a confirmação do pagamento e você já pode consultar no mesmo dia.",
  },
  {
    q: "Quantas consultas eu posso fazer?",
    a: "Ilimitadas. Não há limite de atendimentos no pronto atendimento 24h nem nas especialidades incluídas no seu plano.",
  },
  {
    q: "O médico pode emitir receita e atestado?",
    a: "Sim. Receitas, pedidos de exame e atestados são emitidos com assinatura digital certificada (ICP-Brasil) e têm validade em todo o território nacional.",
  },
  {
    q: "Preciso instalar algum aplicativo?",
    a: "Não é obrigatório. A consulta acontece pelo navegador do celular, tablet ou computador: basta ter câmera, microfone e internet.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Quer cancelar? Fácil. Você tem liberdade total, depois do primeiro mês, cancela sem multas, é só avisar com 30 dias de antecedência. No primeiro mês, se cancelar antecipadamente, há uma taxa de 10% sobre os meses restantes, isso garante que possamos manter a qualidade do serviço para todos. Simples assim.",
  },
  {
    q: "Como faço para agendar com especialista?",
    a: "Para consultar com Clínico Geral, Médico da Família, Pediatra ou Geriatra, acesse diretamente o Pronto Atendimento. Em até 10 minutos você já estará sendo atendido, 24h por dia. Psicologia Orientativa e Nutrição Orientativa estão disponíveis de segunda a sexta, das 9h às 23h.\n\nPara consultar com especialista, acesse o Pronto Atendimento. Ao relatar seu quadro clínico para o clínico, ele irá identificar a melhor conduta para te direcionar da forma mais adequada. Caso o médico identifique a necessidade de encaminhamento para um especialista, nossa equipe entrará em contato pelo WhatsApp para agendar no melhor dia e horário para você.",
  },
] as const;
