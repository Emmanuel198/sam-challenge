"use client"
import React from 'react';
import StudentEditForm from '@/app/components/StudentEditForm';


export default function Edit ({params}){
    const { id } = params;
  
    return (
      <div>
        <h1>Editar Alumno</h1>
        <StudentEditForm id={id} />
      </div>
    );
}
