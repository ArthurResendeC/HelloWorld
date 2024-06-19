import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import { ThemeProvider } from './contexts/ThemeContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/> 
      },
      {
        path:'/contact',
        element: <Contact/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
