"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const StudentEditForm = ({ id }) => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        age: '',
        gender: '',
    });

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
            <button type="button" onClick={handleSubmit}>
                Guardar
            </button>
        </form>
    );
};

export default StudentEditForm;
