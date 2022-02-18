import Header from './components/header';
import React, {useState} from 'react';
import './App.css';
import Routess from './components/Routess';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {


const [city,setCity]=useState("");

  return (
    <div className="App">
      
      <Router>
      <Header/>
      <Routess city={city}></Routess>

      </Router>
      

    </div>
  );
}

export default App;
