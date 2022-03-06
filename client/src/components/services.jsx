import React from 'react';
import { useLocation } from 'react-router';

import { Link } from 'react-router-dom';


const Services = ({services}) => {

    const location=useLocation();

    // const [orgService, setOrgService]=useState([]);

    // const{data}= location.state;
    const{data,service}=location.state;

    // let orgService;

    const orgService = services.filter((service)=>service.city === data);
    
        
    const orgSer = orgService.filter((ser)=>ser.occupation === service);
    
    

    
    return ( 
        <div className="bg-light m-4">
           
            {orgSer.map((ser, key)=>(       
                <div className="m-4" key={ser._id}>
                    <table className="table bg-light m-2">
                        <tbody className="">
                            <tr key={ser.sp_id} >
                                <td>
                            <Link style={{ textDecoration: 'none' }} to={`/servicesDetails/${ser.sp_id}`} state={{ ser: ser }}><h5>{ser.companyName}</h5></Link>

                                    <p>
                                        {ser.owner}<br></br>
                                        by {ser.phone}<br></br>
                                        {ser.email}<br></br>
                                    </p> 
                                   
                                    </td>
                            </tr> <br/>
                        </tbody>
                    </table>
                </div>   
            ))}
        </div>

     );
}
 
export default Services;