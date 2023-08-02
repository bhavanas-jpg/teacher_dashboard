import React from 'react'
import Navbar from '../components/Navbar'
import AttendanceOverview from '../components/AttendanceOverview'
import MySchedule from '../components/MySchedule'
import StudentsPerformance from '../components/StudentsPerformance'
import TodoList from '../components/TodoList'
import StudyMaterial from '../components/StudyMaterial'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  return (
    
      <div className="container">
      <div className="sidebar">
        <div className="user__profile">
        <div className="profile-picture">
          <img src=" https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg" alt="profile-picture" />
          
        </div>
        <p className="user__name">Hello, Shilpi</p>
        </div>     
        <Navbar />
      </div>
      <section className="middle">
       <h1 className="heading__var--1" >Teacher's Dashboard</h1>
       <h2 className="heading__var--2">22 January</h2>
       <div className="dashboard__container">
        <div className="dashboard__content">
        <AttendanceOverview />
        <MySchedule />
        <StudentsPerformance />
        </div>       
        <div className="dashboard__content">
        <TodoList />
        <StudyMaterial />  
        </div>
       </div>
      </section>
      <div className="right">
      <div>
      <Calendar />
      </div>
      </div>
      </div>
  
  )
}

export default Dashboard