"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Form from './Form';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    age: '',
    gender: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

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
    const newFormData = { ...formData, id: crypto.randomUUID() }
    if (studentStorage && studentStorage.length >= 0) {
      const studentJson = JSON.parse(studentStorage)
      const newStudentJson = [...studentJson, newFormData]
      localStorage.setItem('student', JSON.stringify(newStudentJson))
    } else {
      localStorage.setItem('student', JSON.stringify([newFormData]))
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
      modalMessage="¿Estás seguro de que deseas crear este nuevo alumno?"
    />
  );
};

export default StudentForm;
