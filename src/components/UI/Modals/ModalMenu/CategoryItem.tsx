import './modalMenu.css'

import {AiOutlineInfoCircle} from 'react-icons/ai'

import { IItem } from "../../../../interfaces/fullMenu";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { useModalsStore } from "../../../../store/modalsStore";
import { ModalProductInfo } from "../ModalProductInfo/ModalProductInfo";
import { motion } from "framer-motion";

export function CategoryItem(item: IItem) {

const {isOpen,closeModal,openModal} = useModalsStore()


document.querySelectorAll(".modal-product").forEach((item) => {
      item.classList.add("hidden");
    });

    (document.querySelector(`.modal-product-${item.title}`) as HTMLDivElement).classList.add("visible");

  return (
    <>
    <ModalProductInfo isOpen={isOpen['ModalProductInfo']} onClose={() => closeModal('ModalProductInfo')} label={item.title}/>
      <div className='modal-list-text-info-container'>
        <div className='modal-list-text-info-header'>
          <h6 className='modal-list-item-title'>{item.title}</h6>
          <h6 className='modal-list-item-price'>{formatCurrency(item.price)}</h6>
        </div>
        <div className='modal-list-text-info-body subTitle'>{item.subTitle.map(subTitle => (
          <span key={subTitle}>
            {(item.subTitle.indexOf(subTitle) != item.subTitle.length - 1)
              ? <span><a className='modal-list-item-subTitle' key={subTitle} onClick={() => {/* open dropdown */ }}
              >{subTitle}</a>&nbsp;|&nbsp;</span>
              : <a className='modal-list-item-subTitle' key={subTitle} onClick={() => {/* open dropdown */ }}
              >{subTitle}</a>}
          </span>
        ))}</div>
        <div className='modal-list-text-info-footer'>
            <motion.a className='add-to-cart hover:cursor-pointer'
            whileHover={{scale:0.975}}>Add to cart</motion.a>
            <motion.div className='list-item-info hover:cursor-pointer'
            whileHover={{scale:0.975}}>
             <a onClick={() => openModal('ModalProductInfo')}><AiOutlineInfoCircle/></a>
            </motion.div>
        </div>
        {/* Menu item image info */}
      </div>


      <img className='modal-list-img-info' src={item.imgUrl} />
      
    </>
  )
}