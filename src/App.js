import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Education from './components/Education';
import Background from './components/Background';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <Education/>
      <Background/>
      <Contact/>
      <Portfolio/>



    </div>
  );
}

export default App;