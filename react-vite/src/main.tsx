import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import './styles.css'

// index.html ships a default <title> and meta description for non-JS crawlers.
// Remove them so the tags rendered by <Seo /> for the current route are the only ones in <head>.
document.querySelectorAll('head [data-default-head]').forEach((el) => el.remove())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
