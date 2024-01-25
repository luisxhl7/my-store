import React from 'react'
import './input-text.scss'

export const InputText = ({ id, placeholder, description, onInputChange, value, errorAlert, regEx, type}) => {
    const handleChange = (event) => {
      onInputChange(event);
    };
  
    return (
      <div className='content-input'>
        <label className='content-input__label' htmlFor={id}>
          {description}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {value.trim() !== '' && !regEx.test(value) ?
          <span className={'content-input__alert-error'}>{errorAlert}</span>
          :
          <span className={'content-input__alert-error'}> </span>
        }
      </div>
    );
};
