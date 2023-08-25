import './modalContainer.css'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import { gsap } from 'gsap'


type ModalProps = {
  header: React.ReactElement
  body: React.ReactElement
  footer?: React.ReactElement
  isOpen?: boolean
  imgSrc?: string
  onClose: () => void
  className?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
}



export function ModalContainer({ header, body, footer,
  isOpen, onClose,
  imgSrc,
  className, headerClassName, bodyClassName, footerClassName }: ModalProps) {

  const modalRef = useRef(null);
  const modalBgRef = useRef(null);

  const [showModal, setShowModal] = useState(isOpen)

  /* for disbling scroll and hiding navbar when modal open */
  const navbar = document.getElementById('navbar')
  function hideNavbar() {
    if (navbar) {
      navbar.style.visibility = 'hidden'
    }
  }
  useEffect(() => {
    setShowModal(isOpen)

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.width = 'calc(100% - 17px)';
      if (navbar) {
        gsap.to(navbar, {
          duration: 1,
          y: -240,
          onComplete: () => hideNavbar()
        });
      }
    }
  }, [isOpen, navbar])

  /* for onClose animation and showing navbar (applies for all modals) */
  function closeModal() {
    const modal = modalRef.current;
    const navbar = document.getElementById('navbar')
    function showNavbar() {
      if (navbar) {
        navbar.style.visibility = 'visible'
      }
    }
    if (navbar) {
      showNavbar()
      gsap.to(navbar, {
        duration: 1,
        y: 0,
        onComplete: () => navbar.removeAttribute('style')
      })
    }
    gsap.to(modal, {
      duration: 0.5,
      y: -720,
      onComplete: () => onClose(),
    });
    document.body.removeAttribute('style');
  }

  /* for background slow animation */
  useEffect(() => {
    const modalBg = modalBgRef.current
    if (modalBg) {
      gsap.to(modalBg, {
        duration: 0.5,
        backgroundColor: 'rgba(0,0,0,0.4)',
      })
    }
  })

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

  /* for closing on esc */
  document.onkeydown = function (evt) {
    if (evt.keyCode == 27) {
      closeModal();
    }
  };



  /* for custom bg */
  const modalStyle = {
    backgroundImage: `url(${imgSrc})`,
  }

  return (

    <>
      {showModal &&

        <div className="modal-bg"
          {...modalBgHandler} ref={modalBgRef}>

          <motion.div className={`modal ${className}`}
            style={modalStyle} animate={{ y: [-640, 0] }} transition={{ duration: 0.5 }}
            {...modalHandler} ref={modalRef}>


            <div className={`modal-header ${headerClassName}`}>
              <motion.img src={'./menu/close.png'} className='close-button' onClick={() => closeModal()}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
              {header}
            </div>

            <div className={`modal-body ${bodyClassName}`}>
              {body}
            </div>

            {footer &&
              <div className={`modal-footer ${footerClassName}`}>
                {footer}
              </div>}


          </motion.div>

        </div>}
    </>

  )
}