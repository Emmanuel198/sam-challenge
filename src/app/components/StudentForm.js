"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    age: '',
    gender: '',
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const studentStorage = localStorage.getItem('student')
    const newFormData = { ...formData, id: crypto.randomUUID()}
    if (studentStorage && studentStorage.length >= 0) {
      const studentJson = JSON.parse(studentStorage)
      const newStudentJson = [...studentJson, newFormData]
      localStorage.setItem('student', JSON.stringify(newStudentJson))
    } else {
      localStorage.setItem('student', JSON.stringify([newFormData]))
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

export default StudentForm;
