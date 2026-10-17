/**
 * ÚNICO arquivo que você precisa editar para atualizar textos, contatos,
 * horários, fotos e modalidades do site.
 *
 * Importante: este arquivo NÃO deve importar nada do React nem do navegador,
 * porque o vite.config.ts também o lê (para gerar os dados de SEO).
 */

export type IconName = 'activity' | 'smile' | 'waves' | 'droplets';
export type Period = readonly [opens: string, closes: string];

export interface DayHours {
  /** 0 = domingo ... 6 = sábado (mesmo padrão de Date.getDay) */
  weekday: number;
  label: string;
  short: string;
  /** Vazio = fechado. Formato 24h "HH:MM". */
  periods: readonly Period[];
}

export interface Modality {
  id: string;
  name: string;
  description: string;
  /** Caminho da imagem dentro de /public (ex.: "images/natacao.webp"). Vazio = mostra um espaço reservado. */
  image?: string;
  imageSrcSet?: string;
  imageAlt?: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  thumb?: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const SCHEMA_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

export const siteConfig = {
  name: 'Água Viva Natação e Hidroginástica',
  shortName: 'Água Viva',
  tagline: 'Natação e Hidroginástica',

  /**
   * true  = mostra avisos de "texto provisório" e espaços reservados para fotos.
   * false = esconde tudo isso (use quando os conteúdos definitivos estiverem prontos).
   */
  draftMode: true,

  phone: {
    display: '(67) 99166-0880',
    e164: '+5567991660880',
    /** Número do WhatsApp com código do Brasil (55) + DDD + número, só dígitos. */
    whatsappNumber: '5567991660880',
  },

  address: {
    street: 'Rua dos Caiuás, 280',
    neighborhood: 'Santo Antonio',
    city: 'Campo Grande',
    state: 'MS',
    postalCode: '79100-395',
  },

  /** Fuso usado para destacar o dia atual na tabela de horários. */
  timeZone: 'America/Campo_Grande',

  whatsapp: {
    defaultMessage:
      'Olá! Conheci o site da Água Viva Natação e Hidroginástica e gostaria de saber mais sobre as aulas e os horários disponíveis.',
    scheduleMessage:
      'Olá! Conheci o site da Água Viva Natação e Hidroginástica e gostaria de consultar os horários das aulas.',
  },

  /** Cole aqui os links quando o proprietário informar. Vazio = a lista não aparece. */
  socialLinks: [] as { label: string; url: string }[],

  /** Espaço para o logotipo. Quando tiver o arquivo, coloque em /public/images e informe aqui. */
  logo: undefined as { src: string; alt: string } | undefined,
};

export const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre nós' },
  { id: 'modalidades', label: 'Modalidades' },
  { id: 'estrutura', label: 'Estrutura' },
  { id: 'horarios', label: 'Horários' },
  { id: 'localizacao', label: 'Localização' },
  { id: 'contato', label: 'Contato' },
] as const;

export const heroContent = {
  title: 'Sua saúde e bem-estar começam na água.',
  text: 'Conheça a Água Viva Natação e Hidroginástica e descubra uma maneira de cuidar do corpo, desenvolver habilidades e aproveitar os benefícios das atividades aquáticas.',
  primaryCta: 'Quero conhecer as aulas',
  secondaryCta: 'Fale conosco',
  image: {
    src: 'images/hero-1600.webp',
    srcSet: 'images/hero-800.webp 800w, images/hero-1600.webp 1600w',
    alt: 'Duas pessoas sorrindo, de touca azul, dentro de uma piscina',
    width: 1600,
    height: 1067,
  },
};

export const aboutContent = {
  title: 'Bem-vindo à Água Viva',
  paragraphs: [
    'A Água Viva Natação e Hidroginástica fica no bairro Santo Antonio, em Campo Grande — MS, e é um espaço dedicado às atividades aquáticas.',
  ],
  /** Texto provisório: só aparece com draftMode = true. Substitua pelo texto aprovado pelo proprietário. */
  draftParagraph:
    'Este espaço é reservado para contar a história, a proposta e os diferenciais da Água Viva. O texto definitivo deve ser fornecido pelo proprietário.',
  image: {
    src: 'images/piscina-744.webp',
    alt: 'Piscina coberta com raias, plataformas de partida numeradas e claraboias no teto',
    width: 744,
    height: 745,
  },
};

export const modalities: Modality[] = [
  {
    id: 'natacao',
    name: 'Natação',
    description:
      'Atividade aquática para quem quer se movimentar na água e desenvolver habilidades de nado. Consulte turmas, níveis e horários.',
    image: 'images/hero-800.webp',
    imageAlt: 'Pessoas de touca azul sorrindo dentro da piscina',
  },
  {
    id: 'hidroginastica',
    name: 'Hidroginástica',
    description:
      'Atividade física realizada em ambiente aquático. Consulte turmas e horários disponíveis.',
  },
];

export const benefits: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'activity',
    title: 'Movimento e condicionamento físico',
    text: 'A prática regular de atividades na água mantém o corpo em movimento e contribui para o condicionamento físico.',
  },
  {
    icon: 'smile',
    title: 'Bem-estar e qualidade de vida',
    text: 'Cuidar do corpo na água é uma forma de reservar um tempo para si e valorizar o bem-estar no dia a dia.',
  },
  {
    icon: 'waves',
    title: 'Desenvolvimento de habilidades aquáticas',
    text: 'Aprender e aperfeiçoar o contato com a água, com orientação adequada ao seu ritmo.',
  },
  {
    icon: 'droplets',
    title: 'Atividade física em ambiente aquático',
    text: 'Um jeito diferente de se exercitar, em um ambiente que muita gente acha agradável e acolhedor.',
  },
];

export const benefitsDisclaimer =
  'Os benefícios variam de pessoa para pessoa. Em caso de dúvidas sobre sua saúde, converse com um profissional de saúde antes de iniciar qualquer atividade física.';

export const gallery: GalleryPhoto[] = [
  {
    id: 'piscina',
    src: 'images/piscina-744.webp',
    thumb: 'images/piscina-400.webp',
    alt: 'Piscina coberta com raias, plataformas de partida numeradas e claraboias no teto',
    caption: 'Piscina',
    width: 744,
    height: 745,
  },
  // Adicione novas fotos aqui (copie o bloco acima e troque os dados).
];

/** Espaços reservados que aparecem somente com draftMode = true. */
export const galleryPlaceholders = ['Área de atividades', 'Ambiente interno'];

/** Ordem: segunda a domingo. Edite aqui para atualizar site, rodapé e SEO de uma vez. */
export const openingHours: DayHours[] = [
  { weekday: 1, label: 'Segunda-feira', short: 'Seg', periods: [['08:00', '11:00'], ['15:00', '21:00']] },
  { weekday: 2, label: 'Terça-feira', short: 'Ter', periods: [['08:00', '11:00'], ['15:00', '21:00']] },
  { weekday: 3, label: 'Quarta-feira', short: 'Qua', periods: [['08:00', '11:00'], ['15:00', '21:00']] },
  { weekday: 4, label: 'Quinta-feira', short: 'Qui', periods: [['08:00', '11:00'], ['15:00', '21:00']] },
  { weekday: 5, label: 'Sexta-feira', short: 'Sex', periods: [['08:00', '11:00'], ['15:00', '21:00']] },
  { weekday: 6, label: 'Sábado', short: 'Sáb', periods: [['07:00', '19:00']] },
  { weekday: 0, label: 'Domingo', short: 'Dom', periods: [] },
];

export const hoursNotice =
  'Os horários acima são os de funcionamento do estabelecimento e não representam, necessariamente, os horários disponíveis para aulas.';
