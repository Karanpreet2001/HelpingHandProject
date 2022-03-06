import Header from './components/header';
import React, {useEffect, useState} from 'react';
import './App.css';
import Routess from './components/Routess';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";

function App() {

  

const [services,setServices]=useState([]);

useEffect(()=>{
  axios.get("http://localhost:5000/api/SPInfo")
  .then(resp=>{
    console.log(resp,resp.data);
    setServices(resp.data);
    // console.log(serviceProvider[0]);
  })
  .catch(err=>{
    console.log(err);
  })
},[]);


    const handleUpdate =(detail)=>{
        console.log(detail);
    }

    const handleDelete =(detail)=>{

      const {data}= axios.delete("http://localhost:5000/api/SPInfo/"+detail._id);

      const newService= services.filter((s)=>s._id !== detail._id);

      setServices([...newService]);
    }
    const handleViews =(detail)=>{

    }


  return (
    <div className="App">
      
      <Router>
      <Header/>
      <Routess services={services} onUpdate={handleUpdate} onDelete={handleDelete} onViewMessage={handleViews}></Routess>

      </Router>
      

    </div>
  );
}

export default App;
