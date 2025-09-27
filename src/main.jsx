// <!-- Name: Nicholas Bonneville - Student Number: 301194178 - September 24th, 2025 -->
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './css/main.css'
import './css/pages.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <App/>
  </BrowserRouter>
)