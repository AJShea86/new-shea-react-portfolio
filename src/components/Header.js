import React from 'react';

const Header = (props)=>{
  console.log(props.active)



  const educationStyle = {
    color:props.active === "Education"? "red" : null
  
  }
  const contactStyle = {
    color:props.active === "Contact"? "red" : null
  
  }

  const portfolioStyle = {
    color:props.active === "Portfolio"? "red" : null
  
  }
  const backgroundStyle = {
    color:props.active === "Background"? "red" : null
  
  }




    return  (<nav className="fixed-top navbar navbar-expand-lg navbar-light nav " >
    <a className="navbar-brand"  href="#contactme">AJ Shea</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a style={educationStyle} className="nav-link" onClick={()=>props.changeLink('Education')} href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a style={backgroundStyle} className="nav-link" onClick={()=>props.changeLink('Background')} href="#background">Background</a>
        </li>
        <li className="nav-item">
          <a style={contactStyle} className="nav-link" onClick={()=>props.changeLink('Contact')} href="#contactme">Contact Me</a>
        </li>
        <li className="nav-item">
          <a style={portfolioStyle} className="nav-link" onClick={()=>props.changeLink('Portfolio')} href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <a type="button"   className="btn btn-outline-dark" href="Shea Resume - Web.pdf" download >Download Resume</a>
      <button onClick={()=>props.toggle()}>
        Toggle
      </button>

    </div> 
  </nav>)
}

export default Header;