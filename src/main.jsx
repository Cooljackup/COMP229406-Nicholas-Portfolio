/// <!-- Name: Nicholas Bonneville - Student Number: 301194178 - September 28th, 2025 -->
// Entry point for website. Imports Router DOM to enable routing through pages.
// Imports necessary plugins and style sheets.
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