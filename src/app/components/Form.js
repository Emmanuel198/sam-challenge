"use client";
import Modal from './Modal'
import style from '@/app/page.module.css'

const Form = ({ formData, handleInputChange, isModalOpen, openModal, closeModal, handleSubmit, modalMessage }) => {

    return (
        <form >
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
            <div>
                <button className={style.botonGuardar} type="button" onClick={openModal}>
                    Guardar
                </button>
            </div>
            {isModalOpen && (
                <Modal onClose={closeModal} >
                    <p>{modalMessage}</p>
                    <button className={style.boton} onClick={handleSubmit}>Sí</button>
                    <button className={style.boton} onClick={closeModal}>No</button>
                </Modal>
            )}
        </form>

    )
}
export default Form;