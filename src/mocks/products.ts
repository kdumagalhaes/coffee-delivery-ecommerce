// thumbs
import Tradicional from '../assets/images/coffee/expresso.svg'
import Americano from '../assets/images/coffee/expresso-americano.svg'
import Cremoso from '../assets/images/coffee/expresso-cremoso.svg'
import Gelado from '../assets/images/coffee/cafe-gelado.svg'
import ComLeite from '../assets/images/coffee/cafe-com-leite.svg'
import Latte from '../assets/images/coffee/latte.svg'
import Capuccino from '../assets/images/coffee/capuccino.svg'
import Machiatto from '../assets/images/coffee/machiatto.svg'
import Mochaccino from '../assets/images/coffee/mochaccino.svg'
import ChocolateQuente from '../assets/images/coffee/chocolate-quente.svg'
import Cubano from '../assets/images/coffee/cubano.svg'
import Havaiano from '../assets/images/coffee/havaiano.svg'
import Arabe from '../assets/images/coffee/arabe.svg'
import Irlandes from '../assets/images/coffee/irlandes.svg'

export enum CoffeeTypes {
  TRADICIONAL = 'tradicional',
  ALCOOLICO = 'alcoólico',
  GELADO = 'gelado',
  COM_LEITE = 'com leite',
  ESPECIAL = 'especial',
}
export interface Product {
  id: string
  image: string
  name: string
  types: CoffeeTypes[]
  description: string
  price: number
  inventory: number
  quantity: number
}

export const products: Product[] = [
  {
    id: 'coffee-1',
    image: Tradicional,
    name: 'Expresso Tradicional',
    types: [CoffeeTypes.TRADICIONAL],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 5.5,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-2',
    image: Americano,
    name: 'Expresso Americano',
    types: [CoffeeTypes.TRADICIONAL],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 5.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-3',
    image: Cremoso,
    name: 'Expresso Cremoso',
    types: [CoffeeTypes.TRADICIONAL],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 6.5,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-4',
    image: Gelado,
    name: 'Expresso Gelado',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.GELADO],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 6.0,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-5',
    image: ComLeite,
    name: 'Café com Leite',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 5.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-6',
    image: Latte,
    name: 'Latte',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 6.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-7',
    image: Capuccino,
    name: 'Capuccino',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 7.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-8',
    image: Machiatto,
    name: 'Macchiato',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 7.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-9',
    image: Mochaccino,
    name: 'Mocaccino',
    types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 8.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-10',
    image: ChocolateQuente,
    name: 'Chocolate Quente',
    types: [CoffeeTypes.ESPECIAL, CoffeeTypes.COM_LEITE],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-11',
    image: Cubano,
    name: 'Cubano',
    types: [CoffeeTypes.ESPECIAL, CoffeeTypes.ALCOOLICO, CoffeeTypes.COM_LEITE],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 10.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-12',
    image: Havaiano,
    name: 'Havaiano',
    types: [CoffeeTypes.ESPECIAL],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 10.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-13',
    image: Arabe,
    name: 'Árabe',
    types: [CoffeeTypes.ESPECIAL],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: 'coffee-14',
    image: Irlandes,
    name: 'Irlandês',
    types: [CoffeeTypes.ESPECIAL, CoffeeTypes.ALCOOLICO],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    inventory: 10,
    quantity: 1,
  },
]
