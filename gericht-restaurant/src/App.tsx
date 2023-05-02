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
        <div className="container">
          <Routes>
           <Route path="/" element={<HomePage/>}/>
            {/* <Route path="/contact" element={<ContactPage/>}/> */}
         </Routes>
        </div>
      <Footer/>
    </>
  )
}

export default App
