import './inputNewsletter.css'

interface InputNewsletterProps {
  placeholder?:string
}

export function InputNewsletter ({placeholder}:InputNewsletterProps) {
return (
  <input className="input-newsletter" type="text" placeholder={placeholder}/>
)
}