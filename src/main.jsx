import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";
import Productdetail from './Productdetail.jsx';

const router =createBrowserRouter([
  {
    path:"/",
    element: <App/>
  }
  ,
  {
    path:"product-details/:product_id",
    element:<Productdetail/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
