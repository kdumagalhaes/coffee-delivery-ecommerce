export interface Products {
  id: string
  image: string
  name: string
  type: 'tradicional' | 'com leite' | 'gelado' | 'especial' | 'alcoólico'
  description: string
  price: number
  inventory: number
}

export const products: Products[] = [
  {
    id: 'coffee-1',
    image: '../assets/images/coffee/expresso-cremoso.svg',
    name: 'Expresso Tradicional',
    type: 'tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-2',
    image: 'expresso-cremoso.svg',
    name: 'Expresso Americano',
    type: 'tradicional',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-3',
    image: 'expresso-cremoso.svg',
    name: 'Expresso Cremoso',
    type: 'tradicional',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-4',
    image: 'expresso-cremoso.svg',
    name: 'Expresso Gelado',
    type: 'tradicional',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-5',
    image: 'expresso-cremoso.svg',
    name: 'Café com Leite',
    type: 'tradicional',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-6',
    image: 'expresso-cremoso.svg',
    name: 'Latte',
    type: 'tradicional',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-7',
    image: 'expresso-cremoso.svg',
    name: 'Capuccino',
    type: 'tradicional',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-8',
    image: 'expresso-cremoso.svg',
    name: 'Macchiato',
    type: 'tradicional',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-9',
    image: 'expresso-cremoso.svg',
    name: 'Mocaccino',
    type: 'tradicional',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-10',
    image: 'expresso-cremoso.svg',
    name: 'Chocolate Quente',
    type: 'especial',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-11',
    image: 'expresso-cremoso.svg',
    name: 'Cubano',
    type: 'especial',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-12',
    image: 'expresso-cremoso.svg',
    name: 'Havaiano',
    type: 'especial',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-13',
    image: 'expresso-cremoso.svg',
    name: 'Árabe',
    type: 'especial',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-14',
    image: 'expresso-cremoso.svg',
    name: 'Irlandês',
    type: 'especial',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    inventory: 10,
  },
]
