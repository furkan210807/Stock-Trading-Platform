import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_page/home/Homepage';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HomePage></HomePage>
  </StrictMode>,
)
