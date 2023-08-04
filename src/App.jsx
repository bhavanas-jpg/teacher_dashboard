import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Attendance from './pages/Attendance'
import Assignments from './pages/Assignments'
import AllStudents from './pages/AllStudents'
import LessonPlan from './pages/LessonPlan';
import * as d3 from "d3";
import AddLessonPlan from './components/AddLessonPlan'

function App() {
 
  return (
    <>
     <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/attendance" element={<Attendance />}/>
      <Route path="/assignments" element={<Assignments />}/>
      <Route path="/allStudents" element={<AllStudents />}/>
      <Route path="/lessonPlan" element={<AddLessonPlan />}/>
     </Routes>
    </>
  )
}

export default App
