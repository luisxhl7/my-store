import React, { useState } from 'react'
import {KeyboardArrowDown} from '@mui/icons-material';
import './CardOfInfoDropdown.scss'
export const CardOfInfoDropdown = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id='cardOfInfoDropdown'
      className={`cardOfInfoDropdown ${isOpen ? '--isOpen' : ''}`}
      onClick={handleIsOpen}
      data-testid='cardOfInfoDropdown'
    >
      <div className='cardOfInfoDropdown__content-title'>
        <span className='cardOfInfoDropdown__title'>{title}</span>
        <KeyboardArrowDown 
          className={`cardOfInfoDropdown__arrow ${isOpen ? '--isOpen' : ''}`} 
          data-testid='cardOfInfoDropdownArrow'
        />
      </div>
      {children}
    </div>
  );
};
