import React from 'react'
import './input-text.scss'

export const InputText = ({ id, placeholder, description, onInputChange, value, errorAlert, regEx, type, maxLength}) => {
  
  const handleChange = (event) => {
    onInputChange(event);
  };
  
  return (
    <div className='content-input'>
      <label className='content-input__label' htmlFor={id}>
        {description}
      </label>
      {value.trim() !== '' && !regEx.test(value) ?
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className='content-input --border-error'
          maxLength={maxLength}
        />
        :
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      }
      {value.trim() !== '' && !regEx.test(value) ?
        <span className={'content-input__alert-error'}>{errorAlert}</span>
        :
        <span className={'content-input__alert-error'}> </span>
      }
    </div>
  );
};
