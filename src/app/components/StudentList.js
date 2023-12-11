"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const StudentList = () => {
  const [student, setStudents] = useState([]);

  useEffect(
    () => {
      const studentStorage = localStorage.getItem('student')
      const studentJson = JSON.parse(studentStorage)
      setStudents(studentJson)
    }
    , []
  )

  const deleteStudent = (id) => {
    const studentStorage = localStorage.getItem('student')
    if (studentStorage !== undefined && studentStorage.length >= 0) {
      const studentJson = JSON.parse(studentStorage)
      const student = studentJson.find((item) => {
        return item.id === id
      })
      if (student) {
        const newStudentArray = studentJson.filter((item)=>{
          return item.id !== id
        })
        localStorage.setItem('student',JSON.stringify(newStudentArray))
        setStudents(newStudentArray)
      }
    }
  }
  return (
    <div>{student && student.length > 0 && (
      <ul>
        {student.map((student, index) => (
          <li key={student.id} index={index}>
            {student.name} {student.lastName} - Edad: {student.age} - Género: {student.gender}
            <Link href={`/edit/${student.id}`}>
              Editar
            </Link>
            <button onClick={() => {
              deleteStudent(student.id)
            }}>
              Borrar
            </button>
          </li>
        ))}
      </ul>
    )}</div>

  );
};

export default StudentList;
