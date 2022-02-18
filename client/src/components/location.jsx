
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const Location = () => {

    const [service,setService]=useState("");
    const location = useLocation();
    const { data } = location.state;

    console.log(data);


    const handleChange=(e)=>{
        const target=e.target;

        if(target.id==="location")
            setService(target.value);
      
    }

    return ( 
        <div>

            <h1>Which Service are you looking for in {data}?</h1>
            <input type="text"  id="location" className="form-control" onChange={handleChange} />

            <Link to={"/services"} state={{data:data,service:service}}>Submit</Link>

        </div>
     );
}
 
export default Location;