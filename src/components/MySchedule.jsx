import React from 'react'

const MySchedule = () => {
  return (
    <div className="card">
    <div className="d-flex justify-spacebtw schedule__heading">
            <h3 className="heading__var--3">My Schedule</h3>
            <h3 className="heading__var--3"></h3>
        </div>
    <div className="d-flex justify-spacebtw card__list--item">   
        <p>9am-9:45am</p>
        <p>English Class with 7A</p>
        <button>start class</button>      
    </div>
    <div className="d-flex justify-spacebtw card__list--item">   
        <p>9am-9:45am</p>
        <p>English Class with 7A</p>
        <button>start class</button>      
    </div>
    <div>
        <small>View all</small>
    </div>
    </div>
  )
}

export default MySchedule