import './main.css'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../../../components'
import { gsap } from 'gsap'
import { useModalsStore } from "../../../store/modalsStore"

export function Main() {

  const {openModal} = useModalsStore()

  const [slide, setSlide] = useState(1)
  const sliderRef = useRef<HTMLDivElement>(null)

  function changeSlide(newSlide: number) {

    const slider = sliderRef.current

    if (!slider) return

    const oldSlide = slider?.children[slide - 1] as HTMLImageElement
    const newSlideElement = slider?.children[newSlide - 1] as HTMLImageElement

    gsap.to(oldSlide, {
      duration: 1,
      opacity: 0.0,
      onComplete: () => {
        gsap.to(newSlideElement, {
          delay: 0.25,
          duration: 1,
          opacity: 1,
        });
      }
    });
    setSlide(newSlide)
  }

  useEffect(() => {
    changeSlide(1)
  }, [changeSlide])


  return (
    <div className='main mb-16'>
      <div className='main-content section-container'>
        <div className="main-text">
          <h6 className="preTitle">Chase the new Flavour</h6>
          <svg className='spoon-svg mb-1'>
            <use xlinkHref='./sprite.svg#spoon' />
          </svg>
          <h1 className="title-big mb-6 MobileM:mb-4">The Key To Fine Dining</h1>
          <p className="subTitle mb-6">I know a lot of things are not ideal here and I can do it better - its just for showcase in my protfolio</p>
          <Button label={'Explore Menu'} onClick={() => openModal('ModalMenu')} />
        </div>

        <div className="main-slider img-pseudo" ref={sliderRef}>
          <img className={`object-cover opacity-0 absolute inset-0`} src='./main-01.jpg' />
          <img className={`object-cover opacity-0 absolute inset-0`} src='./main-02.jpeg' />
          <img className={`object-cover opacity-0 absolute inset-0`} src='./main-03.jpg' />
          <img className={`object-cover opacity-0 absolute inset-0`} src='./main-04.webp' />
        </div>

      </div>


      <div className='slider-dots'>
        <button className='preTitle' onClick={() => changeSlide(1)}>01</button>
        <svg className='line-svg mt-[0.4rem]'>
          <use xlinkHref='./sprite.svg#line' />
        </svg>
        <button className='preTitle' onClick={() => changeSlide(2)}>02</button>
        <button className='preTitle' onClick={() => changeSlide(3)}>03</button>
        <button className='preTitle' onClick={() => changeSlide(4)}>04</button>
      </div>

      <div className='tags'>
        <h6>#Bar</h6>
        <h6>#Geicht</h6>
      </div>

      <div className='scroll'>
        <div className='line-scroll mt-4' />
        <h6 className='title-small uppercase'>Scroll</h6>
      </div>
    </div>
  )
}