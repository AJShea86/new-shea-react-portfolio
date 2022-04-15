import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Education from './components/Education';
import Background from './components/Background';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import React, {useState} from 'react';


function App() {

  const [activeLink, setActiveLink] = useState('Background')

  const changeLink = link => {
    setActiveLink(link)


  }



  return (
    <div className="App">
      <Header changeLink={changeLink} active={activeLink}/>
      <Jumbotron/>

      {activeLink === 'Education'? <Education/> : null}
      {activeLink === 'Background'? <Background/> : null}
      {activeLink === 'Contact'? <Contact/> : null}
      {activeLink === 'Portfolio'? <Portfolio/> : null}

      <Footer/>



    </div>
  );
}

export default App;
