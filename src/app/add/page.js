"use client";
import React from 'react';
import StudentForm from '@/app/components/StudentForm';
import style from '@/app/page.module.css'

export default function AddPage() {
  return (
    <div className={style.main}>
      <h1 >Agregar Alumno</h1>
      <StudentForm />
    </div >
  );
};
