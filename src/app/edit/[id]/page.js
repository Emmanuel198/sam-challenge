"use client"
import React from 'react';
import StudentEditForm from '@/app/components/StudentEditForm';
import style from '@/app/page.module.css'


export default function Edit({ params }) {
  const { id } = params;

  return (
    <div className={style.main}>
      <h1 >Editar Alumno</h1>
      <StudentEditForm id={id} />
    </div>
  );
}
