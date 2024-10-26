import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AppLayout from './AppLayout'
import Home from './pages/Home'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart'

function App() {
  


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
