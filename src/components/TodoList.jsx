import React from 'react'

const TodoList = () => {
  return (
    <div className="card">
        <div className="d-flex justify-spacebtw schedule__heading">
            <h3 className="heading__var--3">To-do List</h3>
        </div>
        <div className="d-flex card__list--item">
            <input type="checkbox"  />
            <div>
            <p>Checking assignment of class 6A</p>
            <p className="current__date">21 Jan 2022</p>
            </div>           
        </div>
        <div className="d-flex card__list--item">
            <input type="checkbox"  />
            <div>
            <p>Checking assignment of class 6A</p>
            <p className="current__date">21 Jan 2022</p>
            </div>           
        </div>
        <small>View All</small>
    </div>
  )
}

export default TodoList