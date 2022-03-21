import React from 'react';
import { useLocation } from 'react-router';

import { Link } from 'react-router-dom';
import "./main.css";

const Services = ({services}) => {

    const location=useLocation();

    // const [orgService, setOrgService]=useState([]);

    // const{data}= location.state;
    const{data,service}=location.state;

    // let orgService;

    const orgService = services.filter((service)=>service.city === data);
    
        
    const orgSer = orgService.filter((ser)=>ser.occupation === service);
    
    

    
    return ( 
        <div className="new">
           
            {orgSer.map((ser, key)=>(       
                <div className="" key={ser._id}>
                    <table className="table">
                        <tbody>
                            <tr key={ser.sp_id} >
                                <td>
                                    <div className='container'>
                                    
                                    <div className='part1'>
                                    <img className="sp_image" src={ser.image} />
                                    </div>
                                    <div className='part2'>

                            <Link style={{ textDecoration: 'none' }} to={`/servicesDetails/${ser.sp_id}`} state={{ ser: ser }}><h3>{ser.companyName}</h3></Link>

                                    
                                    <h5>{ser.owner}</h5>
                                    <h5>{ser.phone}</h5>
                                    <h5>{ser.email}</h5>

                                    </div>

                                    </div>
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