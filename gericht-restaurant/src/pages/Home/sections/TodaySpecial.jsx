import './about.css'
import {Button} from '../../../components'

export function About () {
  function openUrl(html) {
    window.open(html, "_blank")
   }
return (
<div className="todaySpecial">

<div className='todaySpecial-header'>
<h6>todaySpecial</h6>
<svg className='spoon-svg'>
<use xlinkHref='./sprite.svg#spoon'/>
</svg>
<h1></h1>
</div>

<div className='todaySpecial-menu'>

</div>

<Button buttonTitle='View more' buttonOnClick={() => openUrl('https://github.com/Nicitaa') }/>
</div>
)
}