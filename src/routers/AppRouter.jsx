import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Products } from '../components/page/products'
import { Cart } from '../components/page/cart'
import { Home } from '../components/page/home'
import { PageProduct } from '../components/page/page-product'

export const AppRouter = () => {
  
  return (
    <Routes>
      <Route path = '/home' element= { <Home/> }/>
      <Route path = '/cart' element= { <Cart/> }/>
      <Route path = '/productos/:id' element = { <Products/> } />
      <Route path = '/producto/:id' element = { <PageProduct/> } />
      <Route path = '/' element = { <Navigate to = '/home' /> } />
      <Route path = '/*' element = { <Navigate to = '/home' /> } />
    </Routes>
  )
}
