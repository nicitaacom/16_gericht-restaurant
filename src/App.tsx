/* react */
import { Route, Routes } from "react-router-dom"
/* components */
import { Navbar, Footer } from './components/'
/* sections */
import { HomePage } from "./pages"



function App() {

  return (
    <>
      <Navbar/>
         <Routes>
           <Route path="/" element={<HomePage/>}/>
            {/* <Route path="/contact" element={<ContactPage/>}/> */}
         </Routes>
      <Footer/>
    </>
  )
}

export default App
