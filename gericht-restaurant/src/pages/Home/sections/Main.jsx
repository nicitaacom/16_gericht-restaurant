import {Button} from '../../../components'
import './main.css'

export function Main () {
return (
<div className="main mb-32">
  <div className='main-content'>
  <div className="main-text ml-4 mt-4">
    <h6 className="preTitle leading-[1.6rem]">Chase the new Flavour</h6>
    <svg className='spoon-svg mb-1'>
    <use xlinkHref='./sprite.svg#spoon'/>
    </svg>
    <h1 className="title-big mb-6 leading-[6rem] inline-block">The Key To Fine Dining</h1>
    <p className="subTitle max-w-[80%] mb-6">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
    <Button buttonTitle={'Explore Menu'} buttonOnClick={() => window.open('https://github.com/Nicitaa')}/>
  </div>

  <div className="main-slider">
    <img src='./main.png'/>
  </div>

  </div>
  
  
  <div className='slider-dots'>
    01 
   <svg className='line-svg mt-[0.4rem]'>
   <use xlinkHref='./sprite.svg#line'/>
   </svg>
  02 03 04
  </div>

  <div className='tags'>
    <h6>#Bar</h6>
    <h6>#Geicht</h6>
  </div>

  <div className='scroll'>
    <div className='line-scroll mt-4'/>
    <h6 className='title-small uppercase'>Scroll</h6>
  </div>
</div>
)
}