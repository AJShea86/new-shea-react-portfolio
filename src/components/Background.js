import React from 'react';


const Background = (props)=>{
  const container = {
    backgroundColor: !props.darkMode ? "white" : "black",
    color: !props.darkMode ? "black" : "white"
   }
    return(
        <section style={container} className="card" id="background">
        <div  >
          <div className="card-body">
            <h3 className="card-title">Background</h3>
            <p className="card-text" >I've spent 12 years working in healthcare as a certified Medical Laboratory Scientist. Over the years, I've utilized several different Laboratory Information Systems such as Meditech, Epic, and Sunquest. An LIS is responsible for getting patient lab results from the laboratory instruments to the careprovider's hands. I'm making the transition into software development to get a better understanding of what goes into an LIS in hopes to make that communication more efficient.</p>
          </div>
        </div>
      </section>        


    )
}


export default Background;