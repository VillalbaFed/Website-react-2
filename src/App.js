import React from 'react';
import './App.css';
import Releases from './components/Releases';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Footer from './components/footer';

function App() {
 
  return (
    <React.Fragment>
        <Navbar />  
        <Home /> 
        <Bio />
        <Releases />    
        <Contact />
        <Footer /> 
    </React.Fragment>  
  );
}

export default App;
