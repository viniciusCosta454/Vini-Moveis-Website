// Troque as URLs abaixo pelas fotos reais dos ambientes quando estiverem prontas.
const image = (id, alt, options = {}) => {
  const width = options.width ?? 1400;
  const height = options.height ?? 950;
  const widths = [640, 960, 1280, 1600, 2000];

  return {
    alt,
    position: options.position ?? 'center',
    src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=82`,
    srcSet: widths
      .map(
        (itemWidth) =>
          `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${itemWidth}&h=${Math.round(
            (itemWidth / width) * height,
          )}&q=78 ${itemWidth}w`,
      )
      .join(', '),
  };
};

export const business = {
  name: 'Vini Móveis Planejados',
  location: 'Curitiba, Paraná',
  address: 'Av. Mal. Floriano Peixoto, 6158 - Hauer, Curitiba - PR, 81630-000',
  phone: '+55 41 3039-9929',
  whatsappNumber: '+55 41 3039-9929',
  hours: 'Segunda a sexta, das 9h às 18h. Sábados sob agendamento.',
  mapsEmbed:
    'https://www.google.com/maps?q=Av.%20Mal.%20Floriano%20Peixoto%2C%206158%20-%20Hauer%2C%20Curitiba%20-%20PR%2C%2081630-000&output=embed',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.%20Mal.%20Floriano%20Peixoto%2C%206158%20-%20Hauer%2C%20Curitiba%20-%20PR%2C%2081630-000',
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Vini%20M%C3%B3veis%20Planejados%20Av.%20Mal.%20Floriano%20Peixoto%206158%20Curitiba',
  instagram: '#',
  facebook: '#',
};

export const logos = {
  mark: '/logos/logo-mark.png',
  wordmark: '/logos/logo-wordmark.png',
};

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Ambientes', href: '#ambientes' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export const heroImage = image(
  'photo-1556911220-bff31c812dba',
  'Cozinha planejada elegante com marcenaria em tons naturais',
  { width: 2200, height: 1500, position: 'center' },
);

export const aboutImage = image(
  'photo-1600607687939-ce8a6c25118c',
  'Sala planejada com painel e marcenaria sob medida',
  { width: 1400, height: 1600, position: 'center' },
);

export const trustBadges = [
  'Desde 2008',
  'Fabricação própria',
  'Projetos sob medida',
  'Curitiba e região',
];

export const aboutHighlights = [
  'Atendimento próximo',
  'Projeto personalizado',
  'Fabricação própria',
  'Acabamento de qualidade',
  'Entrega com cuidado',
];

export const environments = [
  {
    title: 'Cozinhas Planejadas',
    description: 'Layout inteligente, armários sob medida e acabamentos pensados para a rotina da casa.',
    image: image('photo-1556911220-bff31c812dba', 'Cozinha planejada com ilha e armários sob medida'),
  },
  {
    title: 'Dormitórios',
    description: 'Guarda-roupas, cabeceiras e soluções de armazenamento com conforto visual e praticidade.',
    image: image('photo-1595526114035-0d45ed16cfbf', 'Dormitório planejado com tons neutros'),
  },
  {
    title: 'Closets',
    description: 'Projetos para organizar roupas, acessórios e rotina com elegância e acesso fácil.',
    image: image('photo-1616046229478-9901c5536a45', 'Closet planejado com iluminação e portas sob medida'),
  },
  {
    title: 'Banheiros e Lavabos',
    description: 'Bancadas, nichos e gabinetes desenhados para aproveitar cada centímetro com leveza.',
    image: image('photo-1584622650111-993a426fbf0a', 'Banheiro com gabinete planejado e acabamento claro'),
  },
  {
    title: 'Lavanderias',
    description: 'Armários funcionais para organizar produtos, equipamentos e áreas compactas.',
    image: image('photo-1556228453-efd6c1ff04f6', 'Lavanderia planejada com armários claros'),
  },
  {
    title: 'Home Office',
    description: 'Estações de trabalho sob medida para produtividade, conforto e integração com o ambiente.',
    image: image('photo-1497366754035-f200968a6e72', 'Home office planejado com bancada e estantes'),
  },
  {
    title: 'Salas de TV',
    description: 'Painéis, racks e cristaleiras que valorizam o espaço social sem perder funcionalidade.',
    image: image('photo-1618220179428-22790b461013', 'Sala de TV planejada com painel em madeira'),
  },
  {
    title: 'Studios e apartamentos compactos',
    description: 'Soluções completas para integrar ambientes e transformar áreas pequenas em espaços bem resolvidos.',
    image: image('photo-1522708323590-d24dbb6b0267', 'Apartamento compacto com mobiliário planejado'),
  },
];

export const processSteps = [
  {
    title: 'Primeiro contato',
    description: 'Você conta o que deseja, envia referências e agenda o melhor caminho para começar.',
  },
  {
    title: 'Entendimento do ambiente',
    description: 'Avaliamos medidas, rotina, prioridades e possibilidades reais do espaço.',
  },
  {
    title: 'Projeto personalizado',
    description: 'Criamos uma solução sob medida, equilibrando estética, uso diário e orçamento.',
  },
  {
    title: 'Escolha de materiais e acabamentos',
    description: 'Definimos padrões, ferragens, texturas e detalhes que combinam com o seu projeto.',
  },
  {
    title: 'Fabricação própria',
    description: 'Produzimos os móveis com controle próximo de qualidade e atenção aos encaixes.',
  },
  {
    title: 'Instalação e entrega',
    description: 'A equipe finaliza a montagem com cuidado para entregar o ambiente pronto para uso.',
  },
];

export const differentials = [
  {
    icon: 'Award',
    title: 'Mais de 15 anos de experiência',
    description: 'Desde 2008 criando ambientes sob medida para famílias e negócios em Curitiba.',
  },
  {
    icon: 'Factory',
    title: 'Fabricação própria',
    description: 'Produção acompanhada de perto, com mais controle sobre qualidade e acabamento.',
  },
  {
    icon: 'Ruler',
    title: 'Projeto sob medida',
    description: 'Cada solução nasce do seu espaço, da sua rotina e do estilo que você quer viver.',
  },
  {
    icon: 'LayoutGrid',
    title: 'Aproveitamento inteligente',
    description: 'Móveis pensados para organizar melhor e valorizar cada canto do ambiente.',
  },
  {
    icon: 'Sparkles',
    title: 'Acabamentos de qualidade',
    description: 'Materiais, texturas e ferragens escolhidos para beleza, resistência e uso diário.',
  },
  {
    icon: 'Handshake',
    title: 'Atendimento próximo',
    description: 'Acompanhamento claro do início ao fim, com o cuidado de uma empresa familiar.',
  },
];

export const testimonials = [
  {
    name: 'Daniele Yumi Sunaga-Franze',
    project: 'Apartamento completo',
    quote:
      'Empresa extremamente profissional e confiável. Foram responsáveis por todos os móveis do nosso apartamento, desde o projeto até a instalação, e o resultado foi impecável. A qualidade dos móveis é nota 10, o acabamento é excelente e o prazo foi cumprido como prometido.',
  },
  {
    name: 'Ana Carolina Moreira Martins',
    project: 'Mobiliário completo',
    quote:
      'Tivemos uma experiência maravilhosa com a Anna Louise. Ela é extremamente atenciosa, sabe ouvir exatamente o que buscamos e transforma ideias em projetos ainda melhores do que sonhamos. Os móveis da Vini são de altíssima qualidade.',
  },
  {
    name: 'Alcides Magno',
    project: 'Segundo projeto',
    quote:
      'Segundo projeto executado com essa equipe e, mais uma vez, tudo impecável. Atendimento atencioso, projeto bem pensado e execução de alto nível. Dá gosto ver o cuidado em cada detalhe.',
  },
  {
    name: 'Andrea do Carmo',
    project: 'Cozinha, banheiros e sala',
    quote:
      'A experiência com a equipe da Vini Móveis foi excelente. O projeto da cozinha entendeu perfeitamente nosso gosto, espaço e necessidade, e depois também fizemos banheiros e uma estante para a sala. A montagem foi rápida e a casa ficou linda.',
  },
  {
    name: 'Alexandra Lenzi da Cunha',
    project: 'Banheiro planejado',
    quote:
      'A Jeannifer que nos atendeu foi extremamente atenciosa. Ficamos muito satisfeitos com o projeto do nosso banheiro e agradecemos pela atenção.',
  },
  {
    name: 'Wellenton Ribeiro de Araújo',
    project: 'Cozinha planejada',
    quote:
      'Eu e minha esposa fizemos pela segunda vez um projeto com a Vini, dessa vez nossa cozinha. Fomos muito bem atendidos pela Jeannifer, que nos ajudou a fazer as melhores escolhas. Os montadores são muito caprichosos e o material é de excelente qualidade.',
  },
  {
    name: 'Jean Brustolim',
    project: 'Casa completa',
    quote:
      'Local de atendimento super agradável. A Jeniffer foi muito atenciosa e conseguiu, junto com minha esposa, desenhar uma casa moderna e sofisticada. Os montadores foram ágeis e muito caprichosos.',
  },
  {
    name: 'Alice Sasaki',
    project: 'Cozinha e lavanderia',
    quote:
      'A Vini é uma empresa excelente em todos os aspectos. Fiz cozinha e lavanderia, entregues de acordo com o contrato. A montagem foi excelente e os ambientes ficaram acima do esperado.',
  },
];
