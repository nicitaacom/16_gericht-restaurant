import './about.css'
import {Button} from './../../../components'

export function About () {
  function openUrl(html) {
    window.open(html, "_blank")
   }
return (
<div className="about">
<img className="bg-png" src='./bg.png'/>
<img className="g-png" src="./G.png"/>

<div className='about-info items-end text-end'>
<h1 className='title'>About Us</h1>
<svg className='spoon-svg rotate-180 mb-4'>
<use xlinkHref='./sprite.svg#spoon'/>
</svg>
<p className='subTitle mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
<Button buttonTitle='Know more' buttonOnClick={() => openUrl('https://github.com/Nicitaa') }/>
</div>

<img className='knife-png' src="./knife.png" alt="knife.png" />

<div className='about-info items-start text-start'>
<h1 className='title'>Our history</h1>
<svg className='spoon-svg mb-4'>
<use xlinkHref='./sprite.svg#spoon'/>
</svg>
<p className='subTitle mb-6'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
<Button buttonTitle='Know more' buttonOnClick={() => openUrl('https://github.com/Nicitaa') }/>
</div>

</div>
)
}