import React from 'react'
import Navbar from '../components/Navbar'

const LessonPlan = () => {
  return (
    <div className="container">
    <div className="sidebar">
      <div className="user__profile">
        <div className="profile-picture">
          <img
            src=" https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
            alt="profile-picture"
          />
        </div>
        <p className="user__name">Hello, Shilpi</p>
      </div>
      <Navbar />
    </div>
    <section className="middle">
      <h1 className="heading__var--1">Lesson Plan</h1>
    </section>
  </div>
  )
}

export default LessonPlan