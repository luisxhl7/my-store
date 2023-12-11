import React from 'react'
import './footer.scss'
import { CardOfInfoDropdown } from '../../molecules/card-of-info-dropdown/CardOfInfoDropdown'
export const Footer = () => {

  return (
    <div className='footer'>
      <CardOfInfoDropdown title={'CONTÁCTANOS'}>
        <span>Ventas telefónicas: (601) 1234567</span>
        <span>Ventas Whatsapp: (+57) 444 333 22 11</span>
        <span>Servicio al cliente Whatsapp: (+57) 444 333 22 11</span>
        <span>Línea de servicio al cliente nacional: 44 3333 222 111</span>
        <span>Medellín: (4) 333 22 11</span>
      </CardOfInfoDropdown>

      <CardOfInfoDropdown title={'ACERCA DE MY STORE'}>
        <a href=" ">Términos de Uso</a>
        <a href=" ">¿Quiénes Somos?</a>
        <a href=" ">Responsabilidad Social</a>
      </CardOfInfoDropdown>

      <CardOfInfoDropdown title={'SERVICIO AL CLIENTE'}>
        <a href=" ">Aplicar mi garantía</a>
        <a href=" ">Preguntas Frecuentes</a>
        <a href=" ">Estado de mi recolección</a>
      </CardOfInfoDropdown>
      
      <CardOfInfoDropdown title={'UBICACIÓN'}>
        <span>Cali cr333 #22 11</span>
        <span>Bogota cr333 #22 11</span>
        <span>Medellin cr333 #22 11</span>
      </CardOfInfoDropdown>
    </div>
  )
}
