enum CoffeeTypes {
  TRADICIONAL = 'tradicional',
  ALCOOLICO = 'alcoólico',
  GELADO = 'gelado',
  COM_LEITE = 'com leite',
  ESPECIAL = 'especial',
}
export interface Products {
  id: string
  image: string
  name: string
  types: CoffeeTypes[]
  description: string
  price: number
  inventory: number
}

export const products: Products[] = [
  {
    id: 'coffee-1',
    image: 'coffee-1',
    name: 'Expresso Tradicional',
    types: [CoffeeTypes.TRADICIONAL],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-2',
    image: 'coffee-2',
    name: 'Expresso Americano',
    types: [CoffeeTypes.TRADICIONAL],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-3',
    image: 'coffee-3',
    name: 'Expresso Cremoso',
    types: [CoffeeTypes.TRADICIONAL],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-4',
    image: 'coffee-4',
    name: 'Expresso Gelado',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.GELADO],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-5',
    image: 'coffee-5',
    name: 'Café com Leite',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-6',
    image: 'coffee-6',
    name: 'Latte',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-7',
    image: 'coffee-7',
    name: 'Capuccino',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-8',
    image: 'coffee-8',
    name: 'Macchiato',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-9',
    image: 'coffee-9',
    name: 'Mocaccino',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-10',
    image: 'coffee-10',
    name: 'Chocolate Quente',
    types: [CoffeeTypes.ESPECIAL, CoffeeTypes.COM_LEITE],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-11',
    image: 'coffee-11',
    name: 'Cubano',
    types: [CoffeeTypes.ESPECIAL, CoffeeTypes.ALCOOLICO, CoffeeTypes.COM_LEITE],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-12',
    image: 'coffee-12',
    name: 'Havaiano',
    types: [CoffeeTypes.ESPECIAL],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-13',
    image: 'coffee-13',
    name: 'Árabe',
    types: [CoffeeTypes.ESPECIAL],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    inventory: 10,
  },
  {
    id: 'coffee-14',
    image: 'coffee-14',
    name: 'Irlandês',
    types: [CoffeeTypes.ESPECIAL, CoffeeTypes.ALCOOLICO],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    inventory: 10,
  },
]
