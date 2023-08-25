import './tableButton.css'

interface TableButtonProps {
  className?:string
  booked?:boolean
}

export function TableButton ({className,booked}:TableButtonProps) {
return (
    <div className={`table-button ${className} ${booked && 'table-button-booked tooltip'}`}>
        
      <span className="tooltiptext">This table booked 18:00-20:00 GMT-0</span>
    
    </div>
)
}