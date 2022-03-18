import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router';



const SignIn = () => {


    const [data,setData]= useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/api/Login")
        .then(resp=>{
          console.log(resp,resp.data);
          setData(resp.data);
          
        })
        .catch(err=>{
          console.log(err);
        })
      },[]);


    const navigate= useNavigate();
    const [s, setS]=useState({});

  
    const handleChange=(e)=>{


        const target = e.target;
        console.log(target);


        if(target.id==="inputEmail"){
           s.username=target.value;
        }
        if(target.id==="inputPassword"){
           s.password=target.value
        }

        if(target.id==="type"){   
            s.type="SP";
        }else{    
            s.type="C";
        }  
    }

    

     const checkUser=  (e)=>{
        e.preventDefault();

        
            
             
        for(var i=0; i<data.length;i++){

            if(s.username !==""& s.password !==""){

                if(data[i].username===s.username && data[i].password===s.password && data[i].type===s.type){

                    if(s.type==="SP"){
                        navigate("/serviceProvider" , {state: s.username})
                    }else{
                        navigate("/");
                    }
                }
            }else{
                navigate("/error");
            }
           
        }    

    }


    

    return ( <> <div className="d-flex justify-content-center align-items-center container ">
    <form>
        <h3 className="display-5 text-center p-1">Log In</h3>
        <div className="row mb-3">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label mx-3">Email</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" name="inputEmail" id="inputEmail" value={s.username} placeholder="Email" onChange={handleChange} />
            </div>
        </div>
        <div className="row mb-3">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label mx-3">Password</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" name="inputPassword" id="inputPassword" value={s.password} placeholder="Password" onChange={handleChange} />
            </div>
        </div>
        <div className="form-check">
         <input className="form-check-input" type="checkbox" value={s.type} id="type" onChange={handleChange}/>
         <label className="form-check-label" htmlFor="flexCheckDefault">
          Service Provider
          </label>
</div>
        <div className="row">
            <div className="col-sm-10 offset-sm-4">
                <button type="submit" className="btn btn-primary" onClick={checkUser}>Sign in</button>
            </div>
        </div>
    </form>
</div>
</> );
}
 
export default SignIn;