import React from 'react'

const StudentsPerformance = () => {
  return (
    <div className="card">
        <div className="d-flex justify-spacebtw schedule__heading">
        <h3 className="heading__var--3">Student's Performance</h3>
            <h3 className="heading__var--3"></h3>
        </div>
        <div className="d-flex justify-spacebtw card__list--item">
        <div className="student-picture">
          <img src=" https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg" alt="profile-picture" />
        </div>
        <p>Vinayaka Pujari</p>
        <p>45%</p>
            </div>
            <div className="d-flex justify-spacebtw card__list--item">
            <div className="student-picture">
          <img src=" https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg" alt="profile-picture" />
        </div>
        <p>Vinita Rao</p>
        <p>45%</p>
            </div>
            <div className="d-flex justify-spacebtw card__list--item">
            <div className="student-picture">
          <img src=" https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg" alt="profile-picture" />
        </div>
        <p>Thamanna Singh</p>
        <p>45%</p>
            </div>
            <div>
        <small>View all students</small>
    </div>
        </div> 

  )
}

export default StudentsPerformance