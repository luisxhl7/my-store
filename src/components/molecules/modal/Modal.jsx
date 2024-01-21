import React from 'react'
import './modal.scss'

export const Modal = ({ onClose, children }) => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal__close-button" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    );
  };
