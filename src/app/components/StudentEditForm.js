"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from './Modal';

const StudentEditForm = ({ id }) => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        age: '',
        gender: '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();
    useEffect(() => {
        const studentStorage = localStorage.getItem('student')
        if (studentStorage !== undefined && studentStorage.length >= 0) {
            const studentJson = JSON.parse(studentStorage)
            const student = studentJson.find((item) => {
                return item.id === id
            })
            if (student) {
                setFormData(student)
            }
        }

    }, [id])

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const openModal = () => {
        setIsModalOpen(true);

    };
    const closeModal = () => {
        setIsModalOpen(false);
        router.push('/');
    };

    const handleSubmit = (e) => {
        const studentStorage = localStorage.getItem('student')

        if (studentStorage !== undefined && studentStorage.length >= 0) {
            const studentJson = JSON.parse(studentStorage)
            const newStudentArray = studentJson.map((item) => {
                if (item.id === id) {
                    return formData
                } else {
                    return item
                }
            })
            localStorage.setItem('student', JSON.stringify(newStudentArray))
        }
        setIsModalOpen(false)
        router.push('/');
    };

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
                    <p>¿Estás seguro de que deseas guardar estos cambios?</p>
                    <button onClick={handleSubmit}>Sí</button>
                    <button onClick={closeModal}>No</button>
                </Modal>
            )}
        </form>
    );
};

export default StudentEditForm;
