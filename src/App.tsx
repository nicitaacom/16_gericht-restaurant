/* react */
import { Route, Routes } from "react-router-dom"
/* components */
import { Navbar, Footer, ModalMenu, ModalAbout, ModalAuth, ModalBookTable } from './components/'
/* sections */
import { AboutPage, ContactPage, Error404, HomePage } from "./pages"
import { useModalsStore } from "./store/modalsStore"


function App() {

  const { isOpen,closeModal } = useModalsStore()


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      {/* MODALS */}
      <ModalAuth isOpen={isOpen['ModalAuth']} onClose={() => closeModal('ModalAuth')} />
      <ModalMenu isOpen={isOpen['ModalMenu']} onClose={() => closeModal('ModalMenu')} />
      <ModalAbout isOpen={isOpen['ModalAbout']} onClose={() => closeModal('ModalAbout')} />
      <ModalBookTable isOpen={isOpen['ModalBookTable']} onClose={() => closeModal('ModalBookTable')} />
    </>
  )
}

export default App
