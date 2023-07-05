import './button.css'

type ButtonProps = {
  label:string;
  onClick:() => void;
  className?:string;
}

export function Button ({label,className,onClick}:ButtonProps) {
return (
<button onClick={onClick} className={`button ${className}`}>{label}</button>
)
}