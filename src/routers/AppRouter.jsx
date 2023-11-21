import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Products } from '../components/page/products'
import { Cart } from '../components/page/cart'
import { Home } from '../components/page/home'

export const AppRouter = () => {
  
  return (
    <Routes>
      <Route path = '/home' element= { <Home/> }/>
      <Route path = '/cart' element= { <Cart/> }/>
      <Route path = '/producto/:id' element = { <Products/> } />
      <Route path = '/' element = { <Navigate to = '/home' /> } />
      <Route path = '/*' element = { <Navigate to = '/home' /> } />
    </Routes>
  )
}
