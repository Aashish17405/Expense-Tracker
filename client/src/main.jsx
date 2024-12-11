import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route Component={App} path='/'/>
    </Routes>
  </Router>,
)