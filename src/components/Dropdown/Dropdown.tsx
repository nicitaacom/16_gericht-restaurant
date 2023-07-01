import './dropdown.css'

import { useContext, useState } from "react"
import { AiFillCaretDown } from 'react-icons/ai'
import { DropdownContext } from '../../context'

interface DropdownProps {
  children: React.ReactNode
}

export function Dropdown({ children }: DropdownProps) {

  const { selected } = useContext(DropdownContext)

  const [isActive, setIsActive] = useState(false)

  return (
    <div className="dropdown">
      <div className={`dropdown-btn`} onClick={() => setIsActive(!isActive)}>People: {selected}<AiFillCaretDown /></div>
      <div className={`dropdown-content ${isActive ? 'dropdown-active' : 'dropdown-inactive'}`}>
        {children}
      </div>
    </div>
  )
}