import React from 'react';
import {IoShareSocialOutline} from "react-icons/io5"

const StudyMaterial = () => {
  return (
    <div className="card">
    <div className="d-flex justify-spacebtw schedule__heading">
        <h3 className="heading__var--3">Study Material</h3>
    </div>
    <div>
    <div className="d-flex justify-spacebtw card__list--item">
        <p>Gulliver's travel session.pdf</p>
        <i><IoShareSocialOutline /></i>
    </div>
    <div className="d-flex justify-spacebtw card__list--item">
        <p>Gulliver's travel session.pdf</p>
        <i><IoShareSocialOutline /></i>
    </div>
    <div className="d-flex justify-spacebtw card__list--item">
        <p>Gulliver's travel session.pdf</p>
        <i><IoShareSocialOutline /></i>
    </div>
    </div>
    <small>View All</small>
    </div>
    
  )
}

export default StudyMaterial