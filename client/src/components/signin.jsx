import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const SignIn = ({contact}) => {

    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [type, setType]=useState("C");
    const navigate= useNavigate();

    const handleChange=(e)=>{
        const target = e.target;
        if(target.id==="inputEmail"){
            setUsername(target.value);
        }
        if(target.id==="inputPassword"){
           setPassword(target.value);
        }
        if(target.id==="type"){   
            if(type === "SP"){
                setType("C");
            } else {
                setType("SP");
            }
        }
    }
    
     const checkUser=  (e)=>{
        e.preventDefault();

        axios.get("http://localhost:5000/api/Login")
        .then(resp=>{
            
            let data = resp.data;
            for(var i=0; i<data.length;i++){

                if(username !=="" && password !==""){
                    if(data[i].username===username && data[i].password===password && data[i].type===type){
                      contact = password;
                      
                        if(type==="SP"){
                            navigate("/serviceProvider" , {state: username});
                        }else{
                            navigate("/home",{state: password});
                        }
                    }
                }else{
                    navigate("/error");
                }
            }            
        })
        .catch(err=>{
          console.log(err);
        });   
    }

    return ( <> <div className="d-flex justify-content-center align-items-center container ">
    <form>
        <h3 className="display-5 text-center p-1">Log In</h3>
        <div className="row mb-3">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label mx-3">Email</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" name="inputEmail" id="inputEmail" value={username} placeholder="Email" onChange={handleChange} />
            </div>
        </div>
        <div className="row mb-3">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label mx-3">Password</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" name="inputPassword" id="inputPassword" value={password} placeholder="Password" onChange={handleChange} />
            </div>
        </div>
        <div className="form-check">
         <input className="form-check-input" type="checkbox" value={type} id="type" onChange={handleChange}/>
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