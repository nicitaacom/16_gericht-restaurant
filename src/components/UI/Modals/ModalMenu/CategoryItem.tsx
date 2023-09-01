import './modalMenu.css'

import {AiOutlineInfoCircle} from 'react-icons/ai'

import { IItem } from "../../../../interfaces/fullMenu";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export function CategoryItem(item: IItem) {

  const [isInfo, setIsInfo] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
    <div className="flex flex-row justify-between">
      <div className='modal-list-text-info-container'>
        <div className='modal-list-text-info-header'>
          <h6 className='modal-list-item-title'>{item.title}</h6>
          <h6 className='modal-list-item-price'>{formatCurrency(item.price)}</h6>
      </div>
        <div className='modal-list-text-info-body subTitle'>{item.ingredients.map(ingredient => (
          <span key={ingredient.id}>
            {(item.ingredients.indexOf(ingredient) !=  item.ingredients.length -1)
              ? <span><a className='modal-list-item-subTitle' onClick={() => {/* open dropdown */ }}
              >{ingredient.label}</a>&nbsp;|&nbsp;</span>
              : <a className='modal-list-item-subTitle' onClick={() => {/* open dropdown */ }}
              >{ingredient.label}</a>}
          </span>
        ))}</div>
        <div className='modal-list-text-info-footer'>
            <motion.a className='add-to-cart hover:cursor-pointer'
            whileHover={{scale:0.975}}>Add to cart</motion.a>
            <div className='list-item-info'
            onMouseOver={() => setIsInfo(true)}
            onMouseLeave={() => setIsInfo(false)}>
            <motion.div> <AiOutlineInfoCircle/></motion.div>
            </div>
        </div>
        {/* Menu item image info */}
      </div>


      <img className='modal-list-img-info' src={item.imgUrl} />
      
      </div>


        <div className={`MobileL:grid hidden grid-cols-2 gap-2`}
        style={{
            height: isInfo ? ref.current!.scrollHeight*1.25 : 0,
            overflow: "hidden",
            transition: "all 0.3s linear",
             padding: isInfo ? '1rem 0.5rem' :'0'
          }}
          ref={ref}>
              {item.ingredients.map((ingredient) => (
           <div key={ingredient.id}>
            <span className="flex flex-row items-center justify-between gap-x-2"><a className='text-[12px]' onClick={() => {/* open dropdown */ }}
              >{ingredient.label}</a>
              <img className="w-[32px] h-[32px] object-cover" src={ingredient.imgSrc} width={32} height={32}/></span>
           </div>
              ))}
        </div>
    </>
  )
}