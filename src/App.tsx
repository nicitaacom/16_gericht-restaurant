/* react */
import { Route, Routes } from "react-router-dom"
/* components */
import { Navbar, Footer, ModalMenu } from './components/'
/* sections */
import { HomePage } from "./pages"
import { ModalAuth } from "./components/Modal/ModalAuth/ModalAuth"



function App() {

  return (
    <>
      <Navbar/>
         <Routes>
           <Route path="/" element={<HomePage/>}/>
            {/* <Route path="/contact" element={<ContactPage/>}/> */}
         </Routes>
      <Footer/>
      {/* MODALS */}
      <ModalAuth/>
      <ModalMenu/>
    </>
  )
}

export default App
