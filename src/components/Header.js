import React from 'react';

const Header = ()=>{

    return  (<nav className="navbar navbar-expand-lg navbar-light nav " >
    <a className="navbar-brand"  href="#contactme">AJ Shea</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#background">Background</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contactme">Contact Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
      </ul>
    </div> 
  </nav>)
}

export default Header;