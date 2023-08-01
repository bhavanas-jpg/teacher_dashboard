import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/attendance">Attendance</NavLink></li>
            <li><NavLink to="/assignments">Assignments</NavLink></li>
            <li><NavLink to="/allStudents">All Students</NavLink></li>
            <li><NavLink to="/lessonPlan">Lesson Plan</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar