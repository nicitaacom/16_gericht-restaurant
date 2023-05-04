import './button.css'

type ButtonProps = {
  buttonTitle:string;
  buttonClassName?:string;
  buttonOnClick:() => void;
}

export function Button ({buttonTitle,buttonClassName,buttonOnClick}:ButtonProps) {
return (
<button onClick={buttonOnClick} className={`button ${buttonClassName}`}>{buttonTitle}</button>
)
}