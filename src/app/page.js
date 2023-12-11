"use client";

import Link from 'next/link';
import StudentList from '@/app/components/StudentList';

export default function Home() {
  return (
    <div>
      <h1>Lista de Alumnos</h1>
      <StudentList />
      <Link href="/add">Agregar Alumno</Link>
    </div>
  );
}
