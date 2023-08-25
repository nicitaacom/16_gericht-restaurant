import './input.css'

import { IconType } from "react-icons"

interface InputProps {
  label:string
  icon?:IconType
  tooltip?:boolean
  tooltipText?:string | React.ReactElement
  type:string
  required?:boolean
  className?:string
}

export function Input ({label,icon:Icon,tooltip,tooltipText,type,required,className}:InputProps) {
return (
  <div className={`input ${className}`}>
    <input className='input' type={type} required={required}/>
    <label>{label}</label>
    {Icon && <div className={`icon ${tooltip && 'tooltip'}`}>
      <span className="tooltiptext">{tooltipText}</span>
      <Icon/>
    </div>}
  </div>
)
}