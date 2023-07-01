/* react */
import { Route, Routes } from "react-router-dom"
/* components */
import { Navbar, Footer, ModalMenu, ModalAbout, ModalAuth, ModalBookTable } from './components/'
/* sections */
import { Error404, HomePage } from "./pages"
import { ShoppingCartProvider } from "./context"


function App() {


  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/contact" element={<ContactPage/>}/> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
        {/* MODALS */}
        <ModalAuth />
        <ModalMenu />
        <ModalAbout />
        <ModalBookTable />
      </ShoppingCartProvider>
    </>
  )
}

export default App
