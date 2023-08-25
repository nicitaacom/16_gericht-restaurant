import './modalProductInfo.css'
import { ModalContainer } from "../Container/ModalContainer";


interface ModalMenuProps {
  isOpen: boolean
  onClose: () => void
  label:string
}


export function ModalProductInfo ({isOpen,onClose,label}:ModalMenuProps) {


const header = (
  <div>
    {label} info
  </div>
)



const body = (
  <div>
    body
  </div>
)


return (
    <ModalContainer isOpen={isOpen} onClose={onClose} className={`modal-product modal-product-${label}`}
    header={header}
    body={body} bodyClassName="modal-product-info"
    displayNavbar
    imgSrc="/bg-secondary-reverse.jpg"/>
)
}