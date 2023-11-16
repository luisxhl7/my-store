import React from 'react'
import { Header } from '../../organisms/header'
import { Footer } from '../../organisms/footer'
import './PageLogaut.scss'

export const PageLogaut = ({children}) => {
  return (
    <main className='pageLogaut'>
      <Header/>
      <section className='pageLogaut__content'>
        {children}
      </section>
      <Footer/>
    </main>
  )
}
