/* react */
import { Route, Routes } from "react-router-dom"
/* components */
import { Navbar, Footer, ModalMenu, ModalAbout, ModalAuth, ModalBookTable } from './components/'
/* sections */
import { AboutPage, ContactPage, Error404, HomePage } from "./pages"


function App() {


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
      <ModalAuth />
      <ModalMenu />
      <ModalAbout />
      <ModalBookTable />
    </>
  )
}

export default App
