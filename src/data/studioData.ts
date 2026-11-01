export interface PortfolioItem {
  id: string;
  title: string;
  category: 'realismo-pb' | 'realismo-cor' | 'sketch' | 'geek-linhas' | 'estudio';
  categoryLabel: string;
  imageUrl: string;
  width: number;
  height: number;
  description: string;
  placement: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '01',
    title: 'Olho de Réptil & Escamas',
    category: 'realismo-cor',
    categoryLabel: 'Realismo Colorido',
    imageUrl: '/assets/aistudio/01_olho-reptil-antebraco_8384fa00.webp',
    width: 1200,
    height: 1600,
    description: 'Trabalho hiper-realista no antebraço com degradê verde esmeralda luminoso, profundidade anatômica e texturas de escamas.',
    placement: 'Antebraço'
  },
  {
    id: '02',
    title: 'Leão Majestoso & Savana',
    category: 'realismo-pb',
    categoryLabel: 'Realismo Preto & Cinza',
    imageUrl: '/assets/aistudio/02_leao-savana-braco_ee404985.webp',
    width: 1200,
    height: 1600,
    description: 'Composição de leão e paisagem africana em braço completo, com sombreamento aveludado e riqueza de pelos e sombras.',
    placement: 'Braço / Ombro'
  },
  {
    id: '03',
    title: 'Olho do Tempo & Numerais Romanos',
    category: 'realismo-pb',
    categoryLabel: 'Realismo Preto & Cinza',
    imageUrl: '/assets/aistudio/03_olho-realista-relogio_383bc762.webp',
    width: 1200,
    height: 1600,
    description: 'Transição suave entre a íris realista e os algarismos de um relógio, transmitindo simbolismo e precisão de traço.',
    placement: 'Bíceps interno'
  },
  {
    id: '04',
    title: 'Silhuetas Moon & Dragon Ball',
    category: 'geek-linhas',
    categoryLabel: 'Geek & Linhas',
    imageUrl: '/assets/aistudio/04_silhuetas-circulo_b389d4dc.webp',
    width: 1200,
    height: 1226,
    description: 'Homenagem nostálgica com preenchimento sólido preto uniforme, linhas circulares perfeitas e detalhamento de solo.',
    placement: 'Panturrilha'
  },
  {
    id: '05',
    title: 'Estudo Autoral Dalí & Lupa',
    category: 'sketch',
    categoryLabel: 'Criação Autoral',
    imageUrl: '/assets/aistudio/05_desenho-arte-colorida_67c5872a.webp',
    width: 1200,
    height: 1600,
    description: 'Desenho autoral feito no ateliê explorando cores puras, refração e contraste clássico do surrealismo.',
    placement: 'Estudo em papel / Projeto Autoral'
  },
  {
    id: '06',
    title: 'Ancião Místico & Olhar Espiritual',
    category: 'realismo-pb',
    categoryLabel: 'Realismo Preto & Cinza',
    imageUrl: '/assets/aistudio/06_anciao-olho-antebraco_c9d5c4fd.webp',
    width: 1200,
    height: 1600,
    description: 'Expressão facial densa com rugas hiper-realistas, barba volumosa e integração harmônica com o formato do braço.',
    placement: 'Antebraço'
  },
  {
    id: '07',
    title: 'Galeria & Ambiente Criativo',
    category: 'estudio',
    categoryLabel: 'Nosso Espaço',
    imageUrl: '/assets/aistudio/07_quadros-estudio_1f039e75.webp',
    width: 1200,
    height: 1600,
    description: 'Ambiente do estúdio no Edifício Olímpia, com a parede de desenhos e quadros.',
    placement: 'Estrutura do Estúdio'
  },
  {
    id: '08',
    title: 'Retrato Realista Afetuoso',
    category: 'realismo-pb',
    categoryLabel: 'Realismo Preto & Cinza',
    imageUrl: '/assets/aistudio/08_retrato-realista_b8940c64.webp',
    width: 1200,
    height: 1600,
    description: 'Retrato de homenagem familiar com captura precisa da expressão carinhosa, armação de óculos e textura de pele.',
    placement: 'Braço'
  },
  {
    id: '09',
    title: 'Girassol em Sketchwork & Geometria',
    category: 'sketch',
    categoryLabel: 'Sketch & Traços',
    imageUrl: '/assets/aistudio/09_girassol-ombro_b084cc28.webp',
    width: 1200,
    height: 1600,
    description: 'Composição de botânica contemporânea com hachuras artísticas, respingos controlados e adaptação anatômica.',
    placement: 'Ombro / Clavícula'
  },
  {
    id: '10',
    title: 'Borboleta 3D com Sombra Realista',
    category: 'realismo-cor',
    categoryLabel: 'Realismo Colorido & 3D',
    imageUrl: '/assets/aistudio/10_borboleta-3d_e3d63ba8.webp',
    width: 1200,
    height: 1600,
    description: 'Técnica de ilusão óptica com asas em degradê azul e magenta e sombra projetada suavemente sobre a pele.',
    placement: 'Costas'
  },
  {
    id: '11',
    title: 'Olho Realista com Respingos',
    category: 'sketch',
    categoryLabel: 'Sketch & Trash Polka',
    imageUrl: '/assets/aistudio/11_olho-pescoco_02252d8e.webp',
    width: 1200,
    height: 1600,
    description: 'Olhar penetrante no pescoço com detalhes de íris cristalina e respingos pretos dinâmicos em estilo aquarela/sketch.',
    placement: 'Pescoço'
  }
];

export const STUDIO_INFO = {
  name: 'Gravura Art Studio',
  category: 'Estúdio de Tatuagem',
  tagline: 'Arte autêntica na pele, com técnica refinada e paciência.',
  shortPhrase: 'Arte na pele, com cuidado, no centro do Recife.',
  rating: '5,0',
  reviewsCount: 20,
  address: {
    building: 'Edifício Olímpia',
    street: 'R. do Hospício, 194',
    complement: 'Primeiro andar, Sala 101',
    neighborhood: 'Boa Vista',
    city: 'Recife',
    state: 'PE',
    zipCode: '50050-050',
    reference: 'Centro do Recife'
  },
  fullAddressString: 'Edifício Olímpia, R. do Hospício, 194, 1º andar, Sala 101 - Boa Vista, Recife - PE, 50050-050',
  phoneDisplay: '(81) 98574-0545',
  phoneRaw: '5581985740545',
  services: [
    {
      id: 'realismo',
      title: 'Realismo Preto & Cinza',
      description: 'Retratos, animais, mitologia e cenas marcantes com contraste profundo, luz e sombra aveludada.',
      highlights: ['Texturas de pele e pelagem', 'Profundidade tridimensional', 'Alta durabilidade do pigmento']
    },
    {
      id: 'colorido',
      title: 'Realismo Colorido & 3D',
      description: 'Tons vibrantes, degradês fluidos e ilusões tridimensionais com fidelidade cromática excepcional.',
      highlights: ['Saturação equilibrada', 'Efeitos visuais de relevo', 'Mistura técnica de pigmentos']
    },
    {
      id: 'sketch-aquarela',
      title: 'Aquarela, Sketch & Trash Polka',
      description: 'Linguagem plástica dinâmica, traços gestuais, hachuras e respingos inspirados na pintura clássica.',
      highlights: ['Estilo expressivo e moderno', 'Movimento orgânico', 'Composições exclusivas']
    },
    {
      id: 'geek-fineline',
      title: 'Fine Line & Geek Art',
      description: 'Linhas finas, precisão geométrica e referências do universo anime, cinema, séries e cultura pop.',
      highlights: ['Agulhas de alta precisão', 'Traços nítidos e uniformes', 'Projetos autorais']
    },
    {
      id: 'coverup',
      title: 'Reformas & Coberturas (Cover-up)',
      description: 'Estudo anatômico criterioso para ressignificar ou restaurar tatuagens antigas com arte inteligente.',
      highlights: ['Avaliação de tonalidade prévia', 'Camuflagem sem excesso de preto', 'Renovação completa']
    },
    {
      id: 'autoral',
      title: 'Projetos Autorais Exclusivos',
      description: 'Desenvolvimento do desenho sob medida a partir da sua ideia, respeitando as linhas do seu corpo.',
      highlights: ['Arte única para você', 'Ajuste fino no stencil', 'Consultoria de posicionamento']
    }
  ]
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'Olá! Vim pelo site da Gravura Art Studio e gostaria de tirar uma dúvida e solicitar um orçamento.';
  const msg = customMessage || defaultMsg;
  return `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
}
