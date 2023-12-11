"use client";
import Link from 'next/link';
import StudentList from '@/app/components/StudentList';
import style from './page.module.css'

export default function Home() {
  return (
    <div className={style.main}>
      <h1 >Lista de Alumnos</h1>
      <StudentList />
      <Link className={style.boton} href="/add">Agregar Alumno</Link>
    </div>
  );
}
