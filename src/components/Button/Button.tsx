import './button.css'

type ButtonProps = {
  title:string;
  onClick:() => void;
  className?:string;
}

export function Button ({title,className,onClick}:ButtonProps) {
return (
<button onClick={onClick} className={`button ${className}`}>{title}</button>
)
}