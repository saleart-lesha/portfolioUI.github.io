import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PortfolioUI from './pages/PortfolioUI'
import ScrollToTop from './shared/scrollToTop'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <main>
        <PortfolioUI />
      </main>
    </BrowserRouter>
  </React.StrictMode>,
)
