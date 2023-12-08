import React, { useState } from 'react'
import {KeyboardArrowDown} from '@mui/icons-material';
import './CardOfInfoDropdown.scss'

export const CardOfInfoDropdown = ({children, title}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () =>{
      console.log('hola')
      setIsOpen(!isOpen)
    }

  return (
    <div className={`cardOfInfoDropdown ${isOpen ? '--isOpen' : ''}`} onClick={() => handleIsOpen()}>
        <div className='cardOfInfoDropdown__content-title' onClick={() => handleIsOpen()}>
            <h4>{title}</h4>
            <KeyboardArrowDown className={`cardOfInfoDropdown__arrow ${isOpen ? '--isOpen' : ''}`}/>
        </div>
        {children}
    </div>
  )
}
