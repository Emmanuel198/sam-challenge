"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Form from './Form';

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
        <Form
            formData={formData}
            handleInputChange={handleInputChange}
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
            handleSubmit={handleSubmit}
            modalMessage="¿Estás seguro de que deseas guardar estos cambios?"
        />
    );
};

export default StudentEditForm;
