import './photoGallery.css'

import { Button } from "../../../components"
import { gallerey } from "../../../constant"
import { motion } from 'framer-motion'
import { useSlider } from '../../../hooks/useSlider'


export function PhotoGallerey() {
  const { move, onMouseTouchDown } = useSlider()
  return (
    <div className="flex py-32 relative bg-[url('/bg.webp')] bg-cover
Tablet:flex-col Tablet:items-center Tablet:text-center Tablet:gap-y-8
MobileL:gap-y-8">

      <div className="section-container pl-32 pr-16 flex flex-col justify-center items-start max-w-[30%]
  4K:px-16
  Tablet:items-center Tablet:px-0">
        <h6 className="preTitle leading-[1.6rem]">Awards & Recognition</h6>
        <svg className='spoon-svg'>
          <use xlinkHref='./sprite.svg#spoon' />
        </svg>
        <h1 className="title inline-block">Photo Gallery</h1>
        <p className="subTitle mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, assumenda?</p>
        <Button label="View more" onClick={() => window.open('https://github.com/Nicitaa')} />
      </div>
      <div className="flex gap-x-16 h-[60vh] max-w-[70%] overflow-hidden
  4K:gap-x-8
  LaptopL:gap-x-4
  Tablet:max-w-[90%] Tablet:ml-[10%]"
        onMouseDown={onMouseTouchDown}
        onTouchStart={onMouseTouchDown}
        onMouseMove={move}
        onTouchMove={move}
        style={{ touchAction: "none", overflow: "hidden" }}>
        {gallerey.map(gallerey => (
          <div className='relative overflow-hidden image-container' key={gallerey.imgSrc}>
            <svg className='absolute opacity-0 cursor-pointer scale-90 transition-all duration-500 z-10
        gallery-svg
        ' onClick={() => window.open('https://github.com/Nicitaa')}>
              <use xlinkHref='./sprite.svg#instagram' />
            </svg>
            <img className="object-cover w-full transition-all duration-500
      hover:brightness-75 gallery-img"
              src={gallerey.imgSrc} key={gallerey.imgSrc} />
          </div>
        ))}
        <motion.a className="inline-flex relative items-center mx-12 text-center font-bold cursor-pointer outline-0 z-0
    gallery-shadow"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => window.open('https://github.com/Nicitaa')}>View More...</motion.a>
      </div>
    </div>
  )
}