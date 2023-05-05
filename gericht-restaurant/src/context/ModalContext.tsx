import {createContext,useRef} from 'react'
import {useState} from 'react'
import {gsap} from 'gsap'

interface IModalContext {
  modal: boolean
  openModal:() => void
  closeModal: () => void
  modalRef:any
}


export const ModalContext = createContext<IModalContext>({
  modal:false,
  openModal: () => {},
  closeModal:() => {},
  modalRef:() => {}
})

export function ModalProvider({children}:{children:React.ReactNode}) {

  const [modal,setModal] = useState(false)


  const modalRef = useRef(null);
  function closeModal() {
    console.log('closeModal fired')
    const modal = modalRef.current;
    gsap.to(modal, {
      duration: 0.5,
      y:-1280,
      onComplete: () => setModal(false),
    });
  }

  function openModal() {
    setModal(true)
  }

  return (
    <ModalContext.Provider value={{modal,closeModal,openModal,modalRef}}>
      {children}
    </ModalContext.Provider>
  )
}