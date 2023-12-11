"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Modal from './Modal';

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
    <div>
      <div>
        {student && student.length > 0 && (
          <ul>
            {student.map((student, index) => (
              <li key={student.id} index={index}>
                {student.name} {student.lastName} - Edad: {student.age} - Género: {student.gender}
                <Link href={`/edit/${student.id}`}>
                  Editar
                </Link>
                {!isModalOpen && (
                  <button onClick={() => {
                    setDeleteStudent(student.id)
                    openModal()
                  }}>
                    Borrar estudiante
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <p>¿Estás seguro de que deseas eliminar este estudiante?</p>
          <button onClick={handleDelete}>Sí</button>
          <button onClick={closeModal}>No</button>
        </Modal>
      )}
    </div>

  );
};

export default StudentList;
