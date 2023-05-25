import './socialButton.css'

import { IconType } from 'react-icons'

interface SocialButtonProps {
  icon?:IconType
  title:string
}

export function SocialButton ({icon:Icon,title}:SocialButtonProps) {
return (
 <button className='social-button'>
  {title}
  {Icon && <Icon size={32}/>}
  </button>
)
}