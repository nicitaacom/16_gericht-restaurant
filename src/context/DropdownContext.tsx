import { createContext, useState } from 'react'

type DropdownProviderProps = {
  children: React.ReactNode
}

type DropdownContextTypes = {
  selected: any
  setSelected: React.Dispatch<React.SetStateAction<any>>
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const DropdownContext = createContext({} as DropdownContextTypes)

export function DropdownProvider({ children }: DropdownProviderProps) {

  const [selected, setSelected] = useState()
  const [isActive, setIsActive] = useState(false)

  return (
    <DropdownContext.Provider value={{ selected, setSelected, isActive, setIsActive }}>
      {children}
    </DropdownContext.Provider>
  )
}