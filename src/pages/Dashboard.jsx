import React from 'react'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    
      <div className="container">
      <div className="sidebar">
        <div className="profile-picture">
          <img src=" https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg" alt="profile-picture" />
        </div>
        <Navbar />
      </div>
      <div className="middle">
       <h2>Teacher's Dashboard</h2>
      </div>
      <div className="right">
      <p>last</p>
      </div>
      </div>
  
  )
}

export default Dashboard