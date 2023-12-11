"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Modal from './Modal';
import style from '@/app/page.module.css'

const StudentList = () => {
  const [student, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState('')

  useEffect(
    () => {
      const studentStorage = localStorage.getItem('student')
      const studentJson = JSON.parse(studentStorage)
      setStudents(studentJson)
    }
    , []
  )
  const openModal = () => {
    setIsModalOpen(true);

  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    if (deleteStudent === deleteStudent) {
      const studentStorage = localStorage.getItem('student')
      if (studentStorage !== undefined && studentStorage.length >= 0) {
        const studentJson = JSON.parse(studentStorage)
        const student = studentJson.find((item) => {
          return item.id === deleteStudent
        })
        if (student) {
          const newStudentArray = studentJson.filter((item) => {
            return item.id !== deleteStudent
          })
          localStorage.setItem('student', JSON.stringify(newStudentArray))
          setStudents(newStudentArray)
          setIsModalOpen(false)
        }
      }
    }
  }
  return (
    <div className={style.grid}>
      <div >
        {student && student.length > 0 && (
          <ul>
            {student.map((student, index) => (
              <li key={student.id} index={index} className={style.card}>
                <div>Nombre : {student.name}</div>
                <div>Apellido :{student.lastName}</div>
                <div>Edad: {student.age}</div>
                <div>Género: {student.gender}</div>
                <div className={style.description}>
                  <button className={style.boton}>
                    <Link href={`/edit/${student.id}`}>
                      Editar
                    </Link>
                  </button>
                  {!isModalOpen && (
                    <button className={style.botonDelete} onClick={() => {
                      setDeleteStudent(student.id)
                      openModal()
                    }}>
                      Borrar
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <p style={{ color: 'white' }}>¿Estás seguro de que deseas eliminar este estudiante?</p>
          <button className={style.boton} onClick={handleDelete}>Sí</button>
          <button className={style.boton} onClick={closeModal}>No</button>
        </Modal>
      )}
    </div>

  );
};

export default StudentList;
