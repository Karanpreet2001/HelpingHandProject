import React, { useState } from 'react';
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import '../index.css';
const Home = (city) => {


    const [data, setData]=useState("");


    


    const handleChange=(e)=>{
        const target=e.target;

        if(target.id==="data")
            setData(target.value);
      
    }

//home made

    return ( 
        <div>
        
        <div>

     
            



            <form>
            Enter Your City Name <br/>
            <input type="text"  id="data" className="form-control" onChange={handleChange} />
            

            <Link to="/location" state={{data:data}} >Submit</Link>

            </form>
                

            
        </div>
        </div>
     );
}
 
export default Home;