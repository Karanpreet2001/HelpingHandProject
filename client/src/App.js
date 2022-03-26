import Header from './components/header';
import { Container } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import './App.css';
import Routess from './components/Routess';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";

function App() {

  

const [services,setServices]=useState([]);
const [newService,setNewService]=useState({});
const [login, setLogin] = useState({});



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

    const handleAdd=()=>{

      const {data} = axios.post("http://localhost:5000/api/SPInfo/",newService);
      console.log(data);

      if(typeof data ==="object"){
        const service = data;
        const newServices = [...services, service];
        setServices([...newServices]);
      }else{
        console.log("Can Not Add A SERVICE");
      }
    }


  return (
  
      
      <Router>
          <Header/>
        {/* <Container> */}
          <Routess login={login} services={services} onUpdate={handleUpdate} onDelete={handleDelete} onViewMessage={handleViews} newService={newService} addToDB={handleAdd}></Routess>
        {/* </Container> */}
      </Router>
      

  
  );
}

export default App;
