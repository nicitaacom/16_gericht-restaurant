import './modalMenu.css'
import { menuLists } from '../../../constant'
import { formatCurrency } from '../../../utilities/formatCurrency'
import { ModalContainer } from '../..'
import useMenuModal from '../../../hooks/useMenuModal'
import { useRef } from 'react'


export function ModalMenu () {
  const menuModal = useMenuModal()

  const ingridientRef = useRef<HTMLAnchorElement>(null) as React.LegacyRef<HTMLAnchorElement>
  const ingridient = ingridientRef.current
  function removeIngridient() {
    console.log(ingridient)
    ingridient.style.color = 'red'
  }

  const quantity = 0

return (
  <ModalContainer title='Menu' onClose={menuModal.onClose} isOpen={menuModal.isOpen} 
  imgSrc='/menu/abstract-dark.jpg'>
     <div className='modal-body'>
      {menuLists.map(menuList => (
      <div key={menuList.title} className='modal-menu-list'>
      <h6 className='list-title modal-list-title'>{menuList.title}</h6>
        <ul className='modal-list-item-container'>
        {menuList.items.map(item => (
           <li key={item.title} className='modal-list-item'>
           <div className='modal-list-text-info'>
           <div className='item-info'>
              <h6 className='title-small modal-title-small'>{item.title}</h6>
              <svg className='modal-list-line'><use xlinkHref='./sprite.svg#line'/></svg>
              <h6 className='modal-list-price'>{formatCurrency(item.price)}</h6>
            </div>
              <div className='subTitle'>{item.subTitle.map(subTitle => (
                  <span key={subTitle}>
                    {(item.subTitle.indexOf(subTitle)!=item.subTitle.length - 1)
                    ? <span><a className='subTitle-option' key={subTitle} onClick={() => removeIngridient()}
                    ref={ingridientRef}>{subTitle}</a> &nbsp;|&nbsp;</span> 
                    : <a className='subTitle-option' key={subTitle} onClick={() => removeIngridient()}
                    ref={ingridientRef}>{subTitle}</a>}
                  </span>
              ))}</div>
              <div className='item-options'>
              {quantity === 0 
              ? <a className='add-to-cart'>Add to cart</a> 
              : <a className='remove-from-cart'>Remove from cart</a>}
              </div>
    
           </div>
              <img className='modal-list-img-info' src={item.imgUrl}/>
           </li>
        ))}
        </ul>
      </div>
    ))}
  </div>  
  </ModalContainer>
)
}