import './todaySpecial.css'
import {Button, ModalContainer,ModalMenu} from '../../../components'
import { wines,coctails } from '../../../constant'
import { useContext } from 'react'
import { ModalContext } from '../../../context'

interface todaySpecialProps {
  todaySpecialClass?:string
}

export function TodaySpecial ({todaySpecialClass}:todaySpecialProps) {
  const {modal,openModal} = useContext(ModalContext)
return (
<div className={`todaySpecial ${todaySpecialClass}`}>

<div className='todaySpecial-header'>
<h6 className='preTitle mb-1'>Menu that fits you palatte</h6>
<svg className='spoon-svg'>
<use xlinkHref='./sprite.svg#spoon'/>
</svg>
<h1 className='title'>Today’s Special</h1>
</div>


<div className='todaySpecial-menu'>

{wines.map(wine => (
  <div key={wine.title} className='menu-list'>
    <h1 className='list-title'>{wine.title}</h1>
    {wine.items.map(item => (
      <li key={item.title} className='list-item'>
        <div className='item-info'>
        <h6 className='title-small menu-title'>{item.title}</h6>
        <svg className='list-line'><use xlinkHref='./sprite.svg#line'/></svg>
        <h6 className='list-price'>{item.price}</h6>
        </div>
        <p className='subTitle'>{item.subTitle}</p>
      </li>
    ))}
     
    
  </div>
))}
<img className='menu-list-img' src='./menu.png'/>

{coctails.map(coctail => (
  <div key={coctail.title} className='menu-list'>
    <h1 className='list-title'>{coctail.title}</h1>
    {coctail.items.map(item => (
      <li key={item.title} className='list-item'>
        <div className='item-info'>
        <h6 className='title-small menu-title'>{item.title}</h6>
        <svg className='list-line'><use xlinkHref='./sprite.svg#line'/></svg>
        <h6 className='list-price'>{item.price}</h6>
        </div>
        <p className='subTitle'>{item.subTitle}</p>
      </li>
    ))}
    
  </div>
))}



</div>

<Button buttonTitle='View more' buttonOnClick={() => openModal()}/>

  
  {modal && 
  <ModalContainer modalTitle='Menu'>
    <ModalMenu/>
  </ModalContainer>
  }
</div>
)
}