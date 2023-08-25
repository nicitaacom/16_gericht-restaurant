import './dropdown.css'

import { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'


export function Dropdown({ className }: { className?: string }) {

  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState<number>()

//I'm sure it possible to do it in another way because here can be 10000
  const people = [
    {
      id:1,
      amount:1
    },
    {
      id:2,
      amount:2
    },
    {
      id:2,
      amount:3
    },
    {
      id:3,
      amount:3
    },
    {
      id:4,
      amount:4
    },
    {
      id:5,
      amount:5
    },
    {
      id:6,
      amount:6
    },
    {
      id:7,
      amount:7
    },
    {
      id:8,
      amount:8
    },
  ]


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