import './socialButton.css'

import { IconType } from 'react-icons'

interface SocialButtonProps {
  icon?:IconType
  title:string
  onClick:() => void
}

export function SocialButton ({icon:Icon,title,onClick}:SocialButtonProps) {
return (
 <button className='social-button' onClick={onClick}>
  {title}
  {Icon && <Icon size={32}/>}
  </button>
)
}