import './modalMenu.css'

import {AiOutlineInfoCircle} from 'react-icons/ai'

import { IItem } from "../../../../interfaces/fullMenu";
import { formatCurrency } from "../../../../utils/formatCurrency";

export function CategoryItem(item: IItem) {


  return (
    <>
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
            <a className='add-to-cart'>Add to cart</a>
             <a className='list-item-info'><AiOutlineInfoCircle/></a>
        </div>
        {/* Menu item image info */}
      </div>


      <img className='modal-list-img-info' src={item.imgUrl} />
    </>
  )
}