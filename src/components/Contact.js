import React from 'react';


const Contact = ()=>{
    return(
        <section className="card1" >
        <div id="contactme" className="card" >
           <div className="card-img-top" src="./Images/headshot2.jpeg" alt="Card image cap">  </div>   
          <div  className="card-body">
            <h3  className="card-title">Contact Me</h3>
          </div>
          <img src={require('../images/headshot2.jpeg')} alt="Card image cap"></img>

          <div className="card-body" >
            <a type="button" className="btn btn-outline-dark" href = "mailto: andrewsheamls@gmail.com">Email Me</a>            
            <a type="button" className="btn btn-outline-dark" href="https://www.linkedin.com/in/aj-shea-155155228" >Visit my LinkedIn</a>
            <a type="button"   className="btn btn-outline-dark" href="Shea Resume (1).pdf">Download Resume</a>
            <a type="button" className="btn btn-outline-dark" href="https://github.com/AJShea86"   >View Github Account</a>
          </div>
        </div>
        
      </section>             

    )

}


export default Contact;