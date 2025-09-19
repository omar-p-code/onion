// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/index.ts';
import { ToTopBtn } from './components/index.ts';
// import GoogleTranslate from './components/GoogleTranslate.tsx';

createRoot(document.getElementById('root')!).render(
   <>
      <ToTopBtn />
      <BrowserRouter>
      <Header />
      <App />
   </BrowserRouter>
   </>,
)
