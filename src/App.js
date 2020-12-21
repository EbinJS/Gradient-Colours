import React,{useState,useEffect} from 'react';
import {ChromePicker} from 'react-color';
import Slider from 'react-rangeslider';
import './App.css';
import Heading from './components/Heading.js';
import Rectang from './components/rectang.js';
import Degree from './components/Degree.js';
import Readme from './components/Readme.js';
import Footer from './components/Footer.js';
import 'react-rangeslider/lib/index.css';
import LoadingScreen from './components/LoadingScreen.js';

  
  function openNav() {
    document.getElementById("flex").style.visibility = "hidden";
    document.getElementById("mySidenav").style.width = "35vw";
    document.getElementById("main").style.marginLeft = "35vw";
    document.getElementById("main").style.transition = "1s";
    document.getElementById("slider").style.transform = "scale(.8)";
    document.getElementById("one").style.transform = "scale(.8)";
    document.getElementById("two").style.transform = "scale(.8)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0vw";
    document.getElementById("main").style.marginLeft = "0vw";
    document.getElementById("flex").style.visibility = "visible";
    document.getElementById("slider").style.transform = "scale(1)";
    document.getElementById("one").style.transform = "scale(.9)";
    document.getElementById("two").style.transform = "scale(.9)";
  }


function App() {
  const [primary, setPrimary] = useState('#fff');
  const [secondary, setSecondary] = useState('#000');
  const [val, setVal] = useState(0);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500)
  }, []);

  return (
    <>
    {loading === false ? (
    <main>
    <Heading />
    <div id='main'>
    <div id='picker'>
        <div id='mySidenav' className='sidenav'>
        <span id='hide' style={{cursor:'pointer'}} onClick={closeNav}>&times;</span>
          <Readme /></div>
          <div id='flex'>
          <p id='instruct'>Click "GUIDE" for guidance.</p>
          <span id='show' style={{cursor:'pointer'}} onClick={openNav}>GUIDE</span>
          </div>
        <div id='one'>
          <ChromePicker color={primary} onChange={updateColor => setPrimary(updateColor.hex)} />
        </div>
        <div id='two'>
          <ChromePicker color={secondary} onChange={updateColor => setSecondary(updateColor.hex)} />
        </div>
        <div id='slider'>
          <Slider min={0} max={180} value={val} onChange={updateValue => setVal(updateValue)}/>
          <Degree val={val}/>
        </div>
    </div>
    <Rectang primary={primary} secondary={secondary} val={val}/>
    </div>
    <Footer />
    </main>
    ):(
      <LoadingScreen />
    )}
    </>
  );
} 

export default App;