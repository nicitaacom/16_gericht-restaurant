import './input.css'

import { IconType } from "react-icons"

interface InputProps {
  label:string
  icon?:IconType
  tooltip?:boolean
  tooltipText?:string
}

export function Input ({label,icon:Icon,tooltip,tooltipText}:InputProps) {
return (
  <div className='input'>
    <input className='input' type="email" required/>
    <label>{label}</label>
    {Icon && <div className={`icon ${tooltip && 'tooltip'}`}>
      <span className="tooltiptext">{tooltipText}</span>
      <Icon/>
    </div>}
  </div>
)
}