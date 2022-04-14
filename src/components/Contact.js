import React from 'react';


const Contact = ()=>{
    return(
        <section className="card1" >
        <div id="contactme" className="card" >
           <div className="card-img-top" src="./Images/headshot2.jpeg" alt="Card image cap">  </div>   
          <div  className="card-body">
            <h3  className="card-title">Contact Me</h3>
          </div>
          <img style={{width: "300px"}}src={require('../images/headshot2.jpeg')} alt="Card image cap"></img>

          <form className="card id">
      <div className="col card-body">
        <input type="text" className="form-control " placeholder="Name"></input>
      </div>
      <div className="form-group card-body">
        <label for="exampleFormControlInput1">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div className="form-group card-body">
        <label for="exampleFormControlTextarea1">Leave a Message</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Message"
          rows="3"
        ></textarea>
      </div>
      <button style={{display: "flex", justifyContent: "center", alignItems: "center"}} type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>


{/* 
          <div className="card-body" >
            <a type="button" className="btn btn-outline-dark" href = "mailto: andrewsheamls@gmail.com">Email Me</a>            
            <a type="button" className="btn btn-outline-dark" href="https://www.linkedin.com/in/aj-shea-155155228" >Visit my LinkedIn</a>
            <a type="button"   className="btn btn-outline-dark" href="Shea Resume (1).pdf">Download Resume</a>
            <a type="button" className="btn btn-outline-dark" href="https://github.com/AJShea86"   >View Github Account</a>
          </div> */}
        </div>
        
      </section>             

    )

}


export default Contact;