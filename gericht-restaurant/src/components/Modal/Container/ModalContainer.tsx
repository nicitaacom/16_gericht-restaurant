import { ModalContext } from '../../../context'
import './modalContainer.css'
import {useContext} from 'react'
import {motion} from 'framer-motion'
import { useSwipeable } from 'react-swipeable'


type ModalProps = {
  children:React.ReactNode
  modalTitle:string
}

export function ModalContainer ({modalTitle,children}:ModalProps) {

  const {closeModal,modalRef} = useContext(ModalContext)


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

  <div className="modal-bg" {...modalBgHandler} ref={modalRef}>
    
    <motion.div className='modal' animate={{y:[-1280,0]}} transition={{duration:0.25}} 
    {...modalHandler}>
    <div className='modal-header'>
      <h1 className={`title modal-title`}>{modalTitle}</h1>
      <motion.img src={'./menu/decorations/close.png'} className='close-button' onClick={closeModal} 
      whileHover={{ scale: 1.1}} whileTap={{scale:0.9}}/>
    </div>
      {children}
      
    </motion.div>

  </div>
)
}