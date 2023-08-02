import React from 'react'

const AttendanceOverview = () => {
  return (
    <div className="card">
        <div className="d-flex justify-spacebtw schedule__heading">
            <h3 className="heading__var--3">Attendance Overview</h3>
            <h3 className="heading__var--3">Class 6A</h3>
        </div>
        <div className="d-flex justify-spacebtw attendance__overview">
            <div>
                <p className="count">31</p>
                <p className="count__title">Total Students</p>
            </div>
            <div>
                <p  className="count">24</p>
                <p className="count__title">Present</p>
            </div>
            <div>
                <p  className="count">7</p>
                <p className="count__title">Absent</p>
            </div>
        </div>
    </div>
  )
}

export default AttendanceOverview