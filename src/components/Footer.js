import React from "react";


const Footer = ()=>{

    return (
        <div className="card-body" style={{display: "flex", justifyContent: "space-evenly"}} >
        <a type="button" className="btn btn-outline-dark" href = "mailto: andrewsheamls@gmail.com">Email Me</a>            
        <a type="button" className="btn btn-outline-dark" href="https://www.linkedin.com/in/aj-shea-155155228" >Visit my LinkedIn</a>
        {/* <a type="button"   className="btn btn-outline-dark" href="Shea Resume (1).pdf">Download Resume</a> */}
        <a type="button" className="btn btn-outline-dark" href="https://github.com/AJShea86"   >View Github Account</a>
      </div>



    )

}



export default Footer;
