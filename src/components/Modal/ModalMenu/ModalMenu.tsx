import './modalMenu.css'
import { menuLists } from '../../../constant'
import { formatCurrency } from '../../../utilities/formatCurrency'
import { ModalContainer } from '../..'
import useMenuModal from '../../../hooks/useMenuModal'
import { useRef } from 'react'


export function ModalMenu () {
  const menuModal = useMenuModal()

  /* logic for deleting/!deleting ingridients (without 2nd modal) - start */
  const ingridientRef = useRef<HTMLAnchorElement>(null) as React.LegacyRef<HTMLAnchorElement>
  const ingridient = ingridientRef.current
  function removeIngridient() {
    console.log(ingridient)
    ingridient.style.color = 'red'
  }
  
  




  /* adding smth in a cart and showing 2nd modal for configuring - start*/
  const quantity = 0







  /* for changing active class in modal-footer by scrolling menu - start */
  

  



return (
  <ModalContainer title='Menu' onClose={menuModal.onClose} isOpen={menuModal.isOpen} 
  imgSrc='/bg.webp'>
     <div className='modal-body'>
       {/* Menu list */}
      {menuLists.map(menuList => (
      <div key={menuList.title} className='modal-category-list'>
      <h6 className='modal-list-title'>{menuList.title}</h6>
        <ul className='modal-list-items-container'>
          {/* Menu items container */}
        {menuList.items.map(item => (
           <li key={item.title} className='modal-list-item-container'>
           <div className='modal-list-text-info-container'>
            <div className='modal-list-text-info-header'>
              <h6 className='modal-list-item-title'>{item.title}</h6>
              <h6 className='modal-list-item-price'>{formatCurrency(item.price)}</h6>
            </div>
              <div className='modal-list-text-info-body subTitle'>{item.subTitle.map(subTitle => (
                  <span key={subTitle}>
                    {(item.subTitle.indexOf(subTitle)!=item.subTitle.length - 1)
                    ? <span><a className='modal-list-item-subTitle' key={subTitle} onClick={() => removeIngridient()}
                    ref={ingridientRef}>{subTitle}</a>&nbsp;|&nbsp;</span> 
                    : <a className='modal-list-item-subTitle' key={subTitle} onClick={() => removeIngridient()}
                    ref={ingridientRef}>{subTitle}</a>}
                  </span>
              ))}</div>
              <div className='modal-list-text-info-footer'>
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
  <div className='modal-footer'>
    <div className='modal-categories-container'>
      {menuLists.map(menuList => (
        <h1 className='modal-category modal-category-active' key={menuList.listId}>{menuList.title}</h1>
      ))}
    </div>
  </div>
</ModalContainer>
)
}