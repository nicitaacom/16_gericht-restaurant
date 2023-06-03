import './todaySpecial.css'
import {Button} from '../../../components'
import { wines,coctails } from '../../../constant'
import useMenuModal from '../../../hooks/useMenuModal'

interface todaySpecialProps {
  className?:string
}

export function TodaySpecial ({className}:todaySpecialProps) {
  const menuModal = useMenuModal()
return (
<div className={`todaySpecial ${className}`}>

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

<Button label='View more' onClick={menuModal.onOpen}/>

  
</div>
)
}