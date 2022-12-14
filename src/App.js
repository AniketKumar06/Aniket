import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <>

      <nav id="nav__menu"><Header /></nav>
      <main className='main'>
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Contact />
      </main>

      <footer id='footer__main'>
        <Footer /></footer>


    </>
  )
}

export default App;
