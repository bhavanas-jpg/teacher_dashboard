import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import AttendanceOverview from '../components/AttendanceOverview'
import MySchedule from '../components/MySchedule'
import StudentsPerformance from '../components/StudentsPerformance'
import TodoList from '../components/TodoList'
import StudyMaterial from '../components/StudyMaterial'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ProgressBar from '../components/ProgressBar'
import LoyaltyChart from '../components/LoyaltyChart'

const Dashboard = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const points = 450;
  const maxPoints = 600;
  
    const handleDateChange = (date) => {
      setCurrentDate(date);
    };
    const formatDate = (date) => {
      const options = { day: 'numeric', month: 'short' };
      return date.toLocaleDateString(undefined, options);
    };

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
       <h2 className="heading__var--2">{formatDate(currentDate)}</h2>
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
        <LoyaltyChart points={points} maxPoints={maxPoints} />
        <ProgressBar />
        </div>
        
      <div>
      <Calendar  value={currentDate} onChange={handleDateChange}  />
      </div>
      </div>
      </div>
  
  )
}

export default Dashboard