import './modalContainer.css'

import { useEffect, useRef, useState} from 'react'
import {motion} from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import {gsap} from 'gsap'



type ModalProps = {
  isOpen?:boolean
  imgSrc?:string
  onClose:() => void
  children:React.ReactNode
  title:string
  className?:string
}



export function ModalContainer ({isOpen,imgSrc,onClose,children,title,className}:ModalProps) {

  const modalRef = useRef(null);

  const modalStyle = {
    backgroundImage:`url(${imgSrc})`,
    }
    

  const [showModal,setShowModal] = useState(isOpen)

    /* for overflow hidden when modal open */
  useEffect(() => {
    setShowModal(isOpen)
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.width = 'calc(100% - 17px)';
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        gsap.to(navbar, {
          duration: 1,
          y:-240,
          onComplete: () => document.querySelector('.navbar').style.visibility = 'hidden'
        });
      }
    }
  },[isOpen])

  /* for onClose animation (applies for all modals) */
  function closeModal() {
    const modal = modalRef.current;
    const navbar = document.querySelector('.navbar')
    document.querySelector('.navbar').removeAttribute('style')
      if (navbar) {
        gsap.to(navbar, {
          duration: 1,
          y:0,
        })
      }
    gsap.to(modal, {
      duration: 0.5,
      y:-720,
      onComplete: () => onClose(),
    });
    document.body.removeAttribute('style');
  }

   /* for e.stopPropagation when mousedown on modal and mouseup on modalBg */
 const modalBgHandler = useSwipeable({
  onTouchStartOrOnMouseDown: () => {
    closeModal()
  },
  trackMouse: true
})

const modalHandler = useSwipeable({
  onTouchStartOrOnMouseDown: (e) => {
    e.event.stopPropagation()
  },
  trackMouse: true
})

return (

 <>
  {showModal && 
  <div className="modal-bg" 
  {...modalBgHandler} ref={modalRef}>
    
     <motion.div className={`modal ${className}`}
      style={modalStyle} animate={{y:[-640,0]}}  transition={{duration:0.5}} 
    {...modalHandler}>
    <div className='modal-header'>
      <h1 className={`modal-title`}>{title}</h1>
      <motion.img src={'./menu/close.png'} className='close-button' onClick={() => closeModal()} 
      whileHover={{ scale: 1.1}} whileTap={{scale:0.9}}/>
    </div>
      {children}
    </motion.div>

  </div>}
  </>

)
}