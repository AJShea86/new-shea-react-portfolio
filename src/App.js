import "./App.css";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Education from "./components/Education";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Splash from "./components/SplashScreen";
import { ThemeProvider } from "styled-components";


const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}



function App() {
  const [activeLink, setActiveLink] = useState("Background");
  const [theme, setTheme] = useState("light");


  const changeLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="App">
      <Header changeLink={changeLink} active={activeLink} />
      <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />
    </ThemeProvider>

      <Jumbotron />

      {activeLink === "Education" ? <Education /> : null}
      {activeLink === "Background" ? <Background /> : null}
      {activeLink === "Contact" ? <Contact /> : null}
      {activeLink === "Portfolio" ? <Portfolio /> : null}

      <Footer />
    </div>
  );
}

export default App;
