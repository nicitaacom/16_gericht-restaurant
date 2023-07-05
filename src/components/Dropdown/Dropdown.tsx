import './dropdown.css'

import { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { people } from '../../constant'


export function Dropdown({ className }: { className?: string }) {

  const [isActive, setIsActive] = useState(false)

  const [selected, setSelected] = useState<number>()

  return (
    <div className={`dropdown ${className}`}>
      <div className={`dropdown-btn`} onClick={() => setIsActive(!isActive)}>People: {selected}<AiFillCaretDown /></div>
      <div className={`dropdown-content ${isActive ? 'dropdown-active' : 'dropdown-inactive'}`}>
        {people.map(people => (
          <li className="dropdown-item" key={people.id} onClick={() => { setSelected(people.amount), setIsActive(false) }}>{people.amount}</li>
        ))}
      </div>
    </div>
  )

}