import React from 'react';
import { useLocation } from 'react-router';

const Services = () => {

    const location=useLocation();

    // const{data}= location.state;
    const{data,service}=location.state;


    console.log(data,service);
    return ( 
        <div>
                {data}  {service}
        </div>
     );
}
 
export default Services;