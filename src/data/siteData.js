// Image helpers for external placeholders and uploaded project photos.
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

const localImage = (src, alt, options = {}) => ({
  alt,
  position: options.position ?? 'center',
  src,
});

const ambienteImage = (folder, fileName, alt, options = {}) =>
  localImage(`/images/ambientes/${folder}/${fileName}`, alt, options);

const numberedAmbienteImage = (folder, number, alt, options = {}) => {
  const fileNumber = String(number).padStart(2, '0');
  const extension = options.extension ?? 'jpg';

  return ambienteImage(folder, `${folder}-${fileNumber}.${extension}`, alt, options);
};

const ambienteIdeas = ({
  folder,
  count,
  title,
  description,
  alt,
  extensions = {},
  positions = {},
}) =>
  Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const fileNumber = String(number).padStart(2, '0');

    return {
      title: `${title} ${fileNumber}`,
      description,
      image: numberedAmbienteImage(folder, number, alt, {
        extension: extensions[number],
        position: positions[number],
      }),
    };
  });

const curatedImage = (folder, number, alt, options = {}) => {
  const fileNumber = String(number).padStart(2, '0');

  return localImage(
    `/images/curadoria-premium/${folder}/${folder}-${fileNumber}.jpg`,
    alt,
    options,
  );
};

const curatedCoverImage = ({ folder, index, alt, ...options }) =>
  curatedImage(folder, index, alt, options);

const curatedIdeas = ({ folder, count = 0, title, description, alt, positions = {} }) => {
  return Array.from({ length: count }, (_, index) => index + 1)
    .map((number, index) => {
      const fileNumber = String(index + 1).padStart(2, '0');

      return {
        title: `${title} ${fileNumber}`,
        description,
        sourceNumber: number,
        image: curatedImage(folder, number, alt, { position: positions[number] }),
      };
    });
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
  googleReviewsUrl: 'https://g.page/r/CW_X8_sLKZGDEBM/review',
  instagram: 'https://www.instagram.com/vinimoveis/',
  facebook: 'https://www.facebook.com/share/1Nujgdssuc/?mibextid=wwXIfr',
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

export const heroImage = curatedImage(
  'cozinhas-planejadas',
  2,
  'Cozinha planejada com madeira, pedra escura e marcenaria sob medida',
);

export const aboutImage = localImage(
  '/images/ambientes/fachada/fachada.jpg',
  'Fachada da Vini Moveis Planejados em Curitiba',
  { position: 'center 42%' },
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
    description: 'Marcenaria sob medida, ilhas, torres, painéis e acabamentos nobres para uma cozinha elegante e funcional.',
    image: curatedCoverImage({
      folder: 'cozinhas-planejadas',
      index: 2,
      alt: 'Cozinha planejada com madeira, pedra escura e marcenaria sob medida',
    }),
    ideas: curatedIdeas({
      folder: 'cozinhas-planejadas',
      count: 38,
      title: 'Cozinha planejada',
      description:
        'Referência de cozinha planejada com linguagem contemporânea, materiais elegantes e soluções sob medida para armazenamento, preparo e convivência.',
      alt: 'Cozinha planejada com móveis sob medida',
    }),
  },
  {
    title: 'Dormitórios Planejados',
    description: 'Guarda-roupas, cabeceiras, painéis e soluções integradas para quartos com conforto e presença visual.',
    image: curatedCoverImage({
      folder: 'dormitorios-planejados',
      index: 1,
      alt: 'Dormitório planejado com armários de vidro e cabeceira sob medida',
    }),
    ideas: curatedIdeas({
      folder: 'dormitorios-planejados',
      count: 30,
      title: 'Dormitório planejado',
      description:
        'Referência de dormitório com marcenaria planejada, tons neutros, iluminação acolhedora e soluções que equilibram descanso e organização.',
      alt: 'Dormitório planejado com móveis sob medida',
    }),
  },
  {
    title: 'Closets',
    description: 'Closets abertos ou fechados, com iluminação, nichos e módulos para uma rotina mais organizada e sofisticada.',
    image: curatedCoverImage({
      folder: 'closets',
      index: 1,
      alt: 'Closet com módulos planejados em madeira e iluminação embutida',
    }),
    ideas: curatedIdeas({
      folder: 'closets',
      count: 19,
      title: 'Closet planejado',
      description:
        'Referência de closet com módulos sob medida, iluminação embutida, gavetas, cabideiros e acabamento de alto padrão.',
      alt: 'Closet com armários planejados',
    }),
  },
  {
    title: 'Banheiros Planejados',
    description: 'Gabinetes, bancadas, espelhos e nichos com materiais nobres para banheiros e lavabos de alto padrão.',
    image: curatedCoverImage({
      folder: 'banheiros-planejados',
      index: 1,
      alt: 'Banheiro planejado com mármore, gabinete e bancada sob medida',
    }),
    ideas: curatedIdeas({
      folder: 'banheiros-planejados',
      count: 32,
      title: 'Banheiro planejado',
      description:
        'Referência de banheiro ou lavabo com gabinete planejado, metais elegantes, pedra, iluminação e composição limpa.',
      alt: 'Banheiro planejado com gabinete sob medida',
    }),
  },
  {
    title: 'Salas de Estar',
    description: 'Marcenaria integrada, painéis, estantes e composições sob medida para áreas sociais elegantes.',
    image: curatedCoverImage({
      folder: 'salas-de-estar',
      index: 7,
      alt: 'Sala de estar com painel, lareira e composição em tons neutros',
    }),
    ideas: curatedIdeas({
      folder: 'salas-de-estar',
      count: 15,
      title: 'Sala de estar',
      description:
        'Referência de sala de estar com composição sofisticada, mobiliário integrado, iluminação quente e paleta neutra.',
      alt: 'Sala de estar com marcenaria integrada',
    }),
  },
  {
    title: 'Home Office',
    description: 'Bancadas, estantes, painéis e armários planejados para trabalhar com conforto e identidade.',
    image: curatedCoverImage({
      folder: 'home-office',
      index: 7,
      alt: 'Home office com mesa em mármore e composição sofisticada',
    }),
    ideas: curatedIdeas({
      folder: 'home-office',
      count: 7,
      title: 'Home office',
      description:
        'Referência de home office com bancada, estantes, armários e acabamento refinado para uma rotina produtiva e elegante.',
      alt: 'Home office com bancada e armários planejados',
    }),
  },
  {
    title: 'Lavanderias Planejadas',
    description: 'Armários, bancadas e soluções discretas para transformar áreas de serviço em espaços organizados e bonitos.',
    image: curatedCoverImage({
      folder: 'lavanderias-planejadas',
      index: 6,
      alt: 'Lavanderia planejada com armários e bancada sob medida',
    }),
    ideas: curatedIdeas({
      folder: 'lavanderias-planejadas',
      count: 8,
      title: 'Lavanderia planejada',
      description:
        'Referência de lavanderia planejada com armários funcionais, bancadas, iluminação e integração limpa com a casa.',
      alt: 'Lavanderia planejada com armários sob medida',
    }),
  },
  {
    title: 'Áreas Gourmet',
    description: 'Bancadas, armários, painéis e integração indoor/outdoor para receber com sofisticação.',
    image: curatedCoverImage({
      folder: 'areas-gourmet',
      index: 5,
      alt: 'Área gourmet integrada com cozinha, bancada e jardim',
    }),
    ideas: curatedIdeas({
      folder: 'areas-gourmet',
      count: 6,
      title: 'Área gourmet',
      description:
        'Referência de área gourmet com bancada, marcenaria, iluminação e integração elegante para receber amigos e família.',
      alt: 'Área gourmet com marcenaria e bancada integrada',
    }),
  },
  {
    title: 'Painéis de TV / Home Theater',
    description: 'Painéis ripados, racks, cristaleiras e soluções para valorizar a sala com tecnologia bem integrada.',
    image: curatedCoverImage({
      folder: 'paineis-tv-home-theater',
      index: 3,
      alt: 'Painel de TV ripado com rack planejado e acabamento em madeira',
    }),
    ideas: curatedIdeas({
      folder: 'paineis-tv-home-theater',
      count: 17,
      title: 'Painel de TV',
      description:
        'Referência de painel de TV ou home theater com marcenaria integrada, iluminação, rack e acabamento contemporâneo.',
      alt: 'Painel de TV com home theater planejado',
    }),
  },
  {
    title: 'Ambientes Corporativos',
    description: 'Recepções, salas executivas e áreas de trabalho com marcenaria sob medida e presença institucional.',
    image: curatedCoverImage({
      folder: 'ambientes-corporativos',
      index: 3,
      alt: 'Ambiente corporativo com marcenaria planejada e iluminação embutida',
    }),
    ideas: curatedIdeas({
      folder: 'ambientes-corporativos',
      count: 4,
      title: 'Ambiente corporativo',
      description:
        'Referência de ambiente corporativo com marcenaria planejada, acabamento refinado e composição profissional.',
      alt: 'Ambiente corporativo com marcenaria planejada',
    }),
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
