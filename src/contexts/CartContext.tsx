import { createContext, useState, ReactNode } from 'react'
import { products, Products } from '../utils/products'

export type CartContextType = {
  productList: Products[]
  addToCart: (product: Products) => void
  removeItem: (id: string) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [productList, setProductList] = useState<Products[]>([{
    description: '', 
    name: '',
    id: '',
    image: '',
    inventory: 0,
    price: 0,
    types: []
}])

  const addToCart = (product: Products) => {
    const selectedProduct: Products = {
      description: product.description,
      id: product.id,
      image: product.image,
      inventory: product.inventory,
      name: product.name,
      price: product.price,
      types: product.types,
    }
    setProductList([...productList, selectedProduct])
  }

  const removeItem = (id: string) => {
    const productListWithoutDeletedOne = productList.filter((product) => {
      return product.id !== id
    })
    setProductList(productListWithoutDeletedOne)
  }

  return (
    <CartContext.Provider value={{ addToCart, removeItem, productList }}>
      {children}
    </CartContext.Provider>
  )
}
