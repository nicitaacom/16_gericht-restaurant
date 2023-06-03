import './main.css'
import { useRef, useState } from 'react'
import {Button} from '../../../components'
import { gsap } from 'gsap'
import useMenuModal from '../../../hooks/useMenuModal'

export function Main () {

  const menuModal = useMenuModal()

  const [slide,setSlide] = useState(1)
  const sliderRef = useRef<HTMLImageElement>(null)
  const slider = sliderRef.current
  function changeSlide(slide:number) {
    console.log('slder = ' + slider)
    if (slider) {
      gsap.to(slider, {
        duration: 1,
        opacity:0.0,
        onComplete:() => {
      console.log('onComplete = ' + slider),
          setSlide(slide),
          gsap.to(slider, {
            delay:0.25,
            duration: 1,
            opacity:1,
            
          });
        }
      });
    }
  }

return (
<div className="main section-container mb-16 mt-28">
  <div className='main-content'>
  <div className="main-text ml-4 mt-4">
    <h6 className="preTitle leading-[1.6rem]">Chase the new Flavour</h6>
    <svg className='spoon-svg mb-1'>
    <use xlinkHref='./sprite.svg#spoon'/>
    </svg>
    <h1 className="title-big mb-6 leading-[6rem] inline-block">The Key To Fine Dining</h1>
    <p className="subTitle max-w-[80%] mb-6">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
    <Button label={'Explore Menu'} onClick={menuModal.onOpen}/>
  </div>

  <div className="main-slider img-pseudo">
    {slide == 1 && <img className='object-cover' src='./main-01.jpg' ref={sliderRef}/>}
    {slide == 2 && <img className='object-cover' src='./main-02.jpeg' ref={sliderRef}/>}
    {slide == 3 && <img className='object-cover' src='./main-03.jpg' ref={sliderRef}/>}
    {slide == 4 && <img className='object-cover' src='./main-04.webp' ref={sliderRef}/>}
  </div>

  </div>
  
  
  <div className='slider-dots'>
    <button onClick={() => changeSlide(1)}>01</button> 
   <svg className='line-svg mt-[0.4rem]'>
   <use xlinkHref='./sprite.svg#line'/>
   </svg>
   <button onClick={() => changeSlide(2)}>02</button> 
   <button onClick={() => changeSlide(3)}>03</button> 
   <button onClick={() => changeSlide(4)}>04</button> 
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