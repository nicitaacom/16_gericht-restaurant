import './modalMenu.css'
import { menuLists } from '../../../constant'

export function ModalMenu () {

 

return (

    <ul className='modal-body'>
      {menuLists.map(menuList => (
      <li className='modal-menu-list'>
      <h6 className='list-title modal-list-title'>{menuList.title}</h6>
        {menuList.items.map(item => (
           <li className='modal-list-item'>
           <div className='modal-list-text-info'>
           <div className='item-info'>
              <h6 className='title-small modal-title-small'>{item.title}</h6>
              <svg className='list-line modal-list-line'><use xlinkHref='./sprite.svg#line'/></svg>
              <h6 className='list-price modal-list-price'>{item.price}</h6>
            </div>
              <p className='subTitle'>{item.subTitle}</p>
           </div>
              <img className='modal-list-img-info' src={item.imgUrl}/>
           </li>
        ))}
      </li>
    ))}
  </ul>  

)
}