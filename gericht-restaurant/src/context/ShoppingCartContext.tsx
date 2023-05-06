import {createContext} from 'react'

type ShoppingCartProviderProps = {
  children:React.ReactNode
}


export const ShoppingCartContext = createContext({

})

export function ShoppingCartProvider({children}:ShoppingCartProviderProps) {


  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}