"use client";
import React, { useState } from 'react';
import Modal from './Modal'

const Form = ({ formData, handleInputChange, isModalOpen, openModal, closeModal, handleSubmit, modalMessage }) => {

    return (
        <form>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Apellido:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </label>
        <label>
          Edad:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
        </label>
        <label>
          Género:
          <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={openModal}>
          Guardar
        </button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <p>{modalMessage}</p>
            <button onClick={handleSubmit}>Sí</button>
            <button onClick={closeModal}>No</button>
          </Modal>
        )}
      </form>
    )
}
export default Form;