import React from 'react';
import style from '@/app/page.module.css'

const Modal = ({ children, onClose }) => {
  return (
    <div className={style.modalBackground}>
      <div>
        {children}
        <button
          className={style.boton} onClick={onClose}>Cerrar</button>
      </div>
    </div >
  );
};

export default Modal;