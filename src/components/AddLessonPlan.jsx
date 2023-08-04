import React from 'react'
import Navbar from './Navbar'

const AddLessonPlan = () => {
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
       <h1 className="heading__var--1" >Add Lesson Plan</h1>
       <form >
       <div style={{display:"flex"}}>
     
        <div >
        <h2 className="heading__var--2"> Basic Information</h2>
        <div className="lesson__plan">
            <label >Academic Year*</label>
           <input 
           type="text"
           placeholder="2022-2023"/>
        </div>
        <div className="lesson__plan">
            <label >Class*</label>
            <input type="text" placeholder="-Select Class-"/>
        </div>
        <div className="lesson__plan">
            <label >Subject*</label>
            <input type="text" placeholder="-Select Subject-"/>
        </div>
        <div className="lesson__plan">
            <label >Unit*</label>
            <input type="number" placeholder="Please enter unit"/>
        </div>
        <div className="lesson__plan">
            <label >Lesson No.*</label>
            <input type="number" placeholder="Please enter lesson number"/>
        </div>
        <div className="lesson__plan">
            <label >Topic*</label>
            <input type="text" placeholder="Please enter  topic"/>
        </div>
        <div className="lesson__plan">
            <label >Sub Topic*</label>
            <input type="text" placeholder="Please enter  sub-topic"/>
        </div>
        <div className="lesson__plan">
            <label >Attachment*</label>
            <input type="file" placeholder="Please enter  sub-topic"/>
        </div>
        </div>
       <div>
       <h2 className="heading__var--2">Additional Information</h2>
       <div className="lesson__plan">
            <label >No. of Homeworks</label>
            <input type="text" placeholder="Please enter the number of homeworks"/>
        </div>
        <div className="lesson__plan">
            <label >Indicative H.W.</label>
            <input type="text" placeholder="Please enter indicative homework"/>
        </div>
        <div className="lesson__plan">
            <label >Period Count</label>
            <input type="text" placeholder="Please enter period count"/>
        </div>
        <div className="lesson__plan">
            <label >Summary</label>
            <input type="text" placeholder="Please enter Summary"/>
        </div>
        <div className="lesson__plan">
            <label >Teaching Aid</label>
            <input type="text" placeholder="Please enter teaching aid"/>
        </div>
        <div className="lesson__plan">
            <label >Period Count</label>
            <input type="text" placeholder="Please enter learning outcome"/>
        </div>
        <button type="submit">Save</button>
       </div>
     
       </div>
       </form>
       </section>
       </div>
  )
}

export default AddLessonPlan