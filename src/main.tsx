import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/index.tsx'
import { StoreProvider } from './context/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={Router}/>
    </StoreProvider>
  </React.StrictMode>,
)
