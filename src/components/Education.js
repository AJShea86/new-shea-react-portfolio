import React from 'react';

const Education = (props)=>{
  const container = {
    backgroundColor: !props.darkMode ? "white" : "black",
    color: !props.darkMode ? "black" : "white"
   }


    return (
        <section style={container} id="education">
        <div style={container} className="card" >
          <div style={container} className="card-body" >
            <h3 className="card-title">Education</h3>
            <p className="card-text" ></p>
            <h5>Bachelor of Science in Biological Sciences</h5>
            <p>University of Missouri - Columbia</p>
            <h5>Bachelor of Science in Clinical Laboratory Science</h5>
            <p>University of Missouri - Columbia</p>
            <h5>Certified Medical Laboratory Scientist</h5>
            <p>American Society for Clinical Pathology</p>
          </div>
        </div>
          </section>      )      
}





export default Education;