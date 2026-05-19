export interface Product {
  slug: string;
  name: string;

  rating: number;
  reviews: number;
  mktplaceLink: string;
  tag: string;
  description: string;
  specs: {
    speed: string;
    range: string;
    power: string;
    battery: string;
    tires: string;
    weight: string;
    chargeTime: string;
  };
  features: string[];
  testimonials: {
    name: string;
    phrase: string;
    rating: number;
  }[];
  images: Record<string, string[]>;
}

export const PRODUCTS: Product[] = [
  {
    slug: 'engwe-m1',
    name: 'Engwe M1',

    rating: 4.9,
    reviews: 3,
    mktplaceLink: 'https://www.mercadolivre.com.br/loja/engwe',
    tag: 'Premium',
    description: 'A EP-2 Pro é a definição de versatilidade. Dobrável, potente e capaz de enfrentar qualquer terreno,' +
      'é a companheira perfeita para o dia a dia na cidade ou escapadas no fim de semana.',
    specs: {
      speed: '32 km/h',
      range: '120 km',
      power: '750W',
      battery: '48V 13Ah',
      tires: '20 x 4.0 Fat Tires',
      weight: '30 kg',
      chargeTime: '5-7 horas'
    },
    features: [
      'Sistema de dobragem em 3 etapas',
      'Display LCD inteligente',
      'Freios a disco mecânicos',
      'Quadro em alumínio 6061'
    ],
    testimonials: [
      {
        name: 'Juliana Mendes',
        phrase: 'Prática e muito potente. O fato de ser dobrável facilita muito o transporte no meu carro, e no asfalto ela voa!',
        rating: 5
      },
      {
        name: 'Lucas Ferreira',
        phrase: 'Design moderno e acabamento premium. Chama atenção por onde passa.',
        rating: 5
      },
      {
        name: 'Mariana Vaz',
        phrase: 'Ideal para a cidade. Subo ladeiras pesadas sem esforço nenhum.',
        rating: 5
      },
      {
        name: 'Felipe Rocha',
        phrase: 'Display muito intuitivo e fácil de usar. Bateria dura bastante.',
        rating: 4
      }
    ],
    images: {
      preta: [
        '/images/bikes/m1/Bike-eletrica-engwe-m1-black-01.jpeg',
        '/images/bikes/m1/Bike-eletrica-engwe-m1-black-02.jpeg',
        '/images/bikes/m1/Bike-eletrica-engwe-m1-black-03.jpeg',
        '/images/bikes/m1/Bike-eletrica-engwe-m1-black-04.jpeg',
        '/images/bikes/m1/Bike-eletrica-engwe-m1-black-05.jpeg',
      ]
    }
  },
  {
    slug: 'engwe-engine-x',
    name: 'Engwe Engine X',

    rating: 4.7,
    reviews: 4,
    mktplaceLink: 'https://www.mercadolivre.com.br/loja/engwe',

    tag: 'Dobrável',
    description: 'Para quem exige o máximo. A Engine Pro traz suspensão integral, freios hidráulicos e um sistema de regeneração de energia (I-ERS) para uma experiência de pilotagem superior.',
    specs: {
      speed: '32 km/h',
      range: '100 km',
      power: '1000W (Pico)',
      battery: '48V 16Ah',
      tires: '20 x 4.0 Fat Tires',
      weight: '32 kg',
      chargeTime: '6-8 horas'
    },
    features: [
      'Suspensão Full (Dianteira e Traseira)',
      'Freios a disco hidráulicos',
      'Sistema de regeneração de energia',
      'Display colorido'
    ],
    testimonials: [
      {
        name: 'Marcos Oliveira',
        phrase: 'Conforto absoluto com a suspensão integral. Parece que estou andando em uma nuvem, mesmo em terrenos irregulares.',
        rating: 5
      },
      {
        name: 'Daniela Souza',
        phrase: 'Os freios hidráulicos dão uma segurança sem igual. Resposta imediata.',
        rating: 5
      },
      {
        name: 'Rodrigo Faro',
        phrase: 'Potência de sobra. Em subidas de terra a moto não nega fogo.',
        rating: 5
      },
      {
        name: 'Helena Mendes',
        phrase: 'O sistema de regeneração realmente ajuda a estender a bateria em descidas.',
        rating: 4
      },
      {
        name: 'Gustavo Lima',
        phrase: 'Acabamento impecável. A Engine X é bruta e refinada ao mesmo tempo.',
        rating: 5
      }
    ],
    images: {
      preta: [
        '/images/bikes/engine-x/engine-x-black-001.jpg',
        '/images/bikes/engine-x/engine-x-black-002.jpg',
        '/images/bikes/engine-x/engine-x-black-003.jpg',
      ],
      vermelha: [
        '/images/bikes/engine-x/engine-x-red-001.jpg',
        '/images/bikes/engine-x/engine-x-red-002.jpg'
      ],
    }
  },
];
