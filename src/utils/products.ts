export interface Products {
  id: string
  image: string
  name: string
  types: string[]
  description: string
  price: number
  inventory: number
}

export const products: Products[] = [
  {
    id: 'coffee-1',
    image: '/src/assets/images/coffee/expresso.svg',
    name: 'Expresso Tradicional',
    types: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-2',
    image: '/src/assets/images/coffee/expresso-americano.svg',
    name: 'Expresso Americano',
    types: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-3',
    image: '/src/assets/images/coffee/expresso-cremoso.svg',
    name: 'Expresso Cremoso',
    types: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-4',
    image: '/src/assets/images/coffee/cafe-gelado.svg',
    name: 'Expresso Gelado',
    types: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-5',
    image: '/src/assets/images/coffee/cafe-com-leite.svg',
    name: 'Café com Leite',
    types: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-6',
    image: '/src/assets/images/coffee/latte.svg',
    name: 'Latte',
    types: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-7',
    image: '/src/assets/images/coffee/capuccino.svg',
    name: 'Capuccino',
    types: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-8',
    image: '/src/assets/images/coffee/machiatto.svg',
    name: 'Macchiato',
    types: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-9',
    image: '/src/assets/images/coffee/mochaccino.svg',
    name: 'Mocaccino',
    types: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-10',
    image: '/src/assets/images/coffee/chocolate-quente.svg',
    name: 'Chocolate Quente',
    types: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-11',
    image: '/src/assets/images/coffee/cubano.svg',
    name: 'Cubano',
    types: ['especial', 'alcoólico', 'com leite'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-12',
    image: '/src/assets/images/coffee/havaiano.svg',
    name: 'Havaiano',
    types: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-13',
    image: '/src/assets/images/coffee/arabe.svg',
    name: 'Árabe',
    types: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-14',
    image: '/src/assets/images/coffee/irlandes.svg',
    name: 'Irlandês',
    types: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    inventory: 10,
  },
]
