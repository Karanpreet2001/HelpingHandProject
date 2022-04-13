import axios from 'axios';
import React, {useState} from 'react';
import "../styles/addService.css"

const AddService = ({newService}) => {

            const [reply, setReplay] = useState();

            const handleChange = (e)=>{

                const target = e.target;

                if(target.id==="id")
                newService.sp_id= target.value;
                if(target.id==="owner")
                    newService.owner= target.value;
                    if(target.id==="companyName")
                    newService.companyName= target.value;   
                    if(target.id==="phone")
                    newService.phone= target.value;
                    if(target.id==="email")
                    newService.email= target.value;
                    if(target.id==="address")
                    newService.address= target.value;
                    if(target.id==="serviceDescription")
                    newService.services= target.value;
                    if(target.id==="occupation")
                    newService.occupation= target.value;
                    if(target.id==="city")
                    newService.city= target.value;
                    if(target.id==="username")
                    newService.username= target.value;
                    if(target.id==="image")
                    newService.image= target.value;
                    if(target.id==="password")
                    newService.password= target.value;

                    console.log(newService);
                  
            }
            


            const handleSubmit = async(e)=>{
                    e.preventDefault();
                    console.log("Submit");

                    const {data} = await axios.post("http://localhost:5000/api/SPInfo",newService );
                    setReplay("Your Profile is registered");

                    
            }

            const addToDB = async(e)=>{
                e.preventDefault();
                console.log("Submit");

               
                
        }

            

    return (  
        <div className='body'>

            <form onClick={handleSubmit}>
                <div className ="title">Registration</div>
                <div className='userDetails'>
            <div className='input-box'>
            <label htmlFor="sp_id">Service Provider Id</label>
                <input type="text" className="text" id="id" value={newService.sp_id} onChange={handleChange}/> 
            </div>

            
            <div className='input-box'>
                <label htmlFor="owner">Name</label>
                <input type="text" className="text" id="owner" value={newService.owner} onChange={handleChange}/>
                </div>

                <div className='input-box'>
                <label htmlFor="companyName">Company Name</label>
                <input type="text" className="text" id="companyName" value={newService.companyName} onChange={handleChange}/>
                </div> 
                <div className='input-box'>
                <label htmlFor="occupation">Service</label>
                <input type="text" className="text" id="occupation" value={newService.occupation} onChange={handleChange}/>
                </div>

                <div className='input-box'>
                <label htmlFor="serviceDescription">Service Description</label>
                <input type="text" className="text" id="serviceDescription" value={newService.services} onChange={handleChange}/>
                </div>

                <div className='input-box'>
                <label htmlFor="phone">Phone</label>
                <input type="text" className="text" id="phone" value={newService.phone} onChange={handleChange}/>
                </div>

                <div className='input-box'>
                <label htmlFor="email">Email</label>
                <input type="text" className="text" id="email" value={newService.email} onChange={handleChange}/> 
                </div>

                <div className='input-box'>
                <label htmlFor="address">Address</label>
                <input type="text" className="text" id="address" value={newService.address} onChange={handleChange}/>
                </div>

                <div className='input-box'>
                <label htmlFor="city">City</label>
                <input type="text" className="text" id="city" value={newService.city} onChange={handleChange}/>
                </div>

                <div className='input-box'>
                <label htmlFor="image">Image</label>
                <input type="text" className="text" id="image" value={newService.image} onChange={handleChange}/>
                </div>

                <div className='input-box'>
                <label htmlFor="username">Username</label>
                <input type="text" className="text" id="username" value={newService.username} onChange={handleChange}/>
                </div>
                <div className='input-box'>
                <label htmlFor="password">Password</label>
                <input type="password" className="text" id="password" value={newService.password} onChange={handleChange}/>
                </div>
                </div>
                <div className='forButton'>
                <button className='formSubmit' onClick={()=>addToDB()}>Add</button>
                </div>
            </form>
           {reply}
        </div>
    );
}
 
export default AddService;