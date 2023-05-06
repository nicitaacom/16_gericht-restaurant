import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider,ShoppingCartProvider } from './context/'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  
    <ShoppingCartProvider>
     <ModalProvider>
        <App />
      </ModalProvider>
    </ShoppingCartProvider>
    
  </BrowserRouter>

)
