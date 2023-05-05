import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from './context/ModalContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <ModalProvider>
    <App />
    </ModalProvider>
  </BrowserRouter>

)
