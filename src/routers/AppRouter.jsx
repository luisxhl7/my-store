import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Products } from '../components/page/products'

export const AppRouter = () => {
  
  return (
    <Routes>
      <Route path = '/home' element= { <Products/> }/>
      <Route path = '/producto/:id' element = { <Products/> } />
      <Route path = '/' element = { <Navigate to = '/home' /> } />
      <Route path = '/*' element = { <Navigate to = '/home' /> } />
    </Routes>
  )
}
