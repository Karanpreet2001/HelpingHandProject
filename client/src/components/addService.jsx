import React from 'react';


const AddService = ({newService, addToDB}) => {



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

                    console.log(newService);
                  
            }
            


            const handleSubmit = (e)=>{
                    e.preventDefault();
                    console.log("Submit");
                    
            }

    return (  
        <div>
            <form onClick={handleSubmit}>


            <label htmlFor="sp_id">Service Provider Id</label>
                <input type="text" className="text" id="id" value={newService.sp_id} onChange={handleChange}/> <br /> <br />

                <label htmlFor="owner">Name</label>
                <input type="text" className="text" id="owner" value={newService.owner} onChange={handleChange}/> <br /> <br />

                <label htmlFor="companyName">Company Name</label>
                <input type="text" className="text" id="companyName" value={newService.companyName} onChange={handleChange}/> <br /> <br />

                <label htmlFor="occupation">Service</label>
                <input type="text" className="text" id="occupation" value={newService.occupation} onChange={handleChange}/><br /> <br />

                <label htmlFor="serviceDescription">Service Description</label>
                <input type="text" className="text" id="serviceDescription" value={newService.services} onChange={handleChange}/><br /> <br />

                <label htmlFor="phone">Phone</label>
                <input type="text" className="text" id="phone" value={newService.phone} onChange={handleChange}/><br /> <br />

                <label htmlFor="email">Email</label>
                <input type="text" className="text" id="email" value={newService.email} onChange={handleChange}/> <br /> <br />

                <label htmlFor="address">Address</label>
                <input type="text" className="text" id="address" value={newService.address} onChange={handleChange}/><br /> <br />

                <label htmlFor="city">City</label>
                <input type="text" className="text" id="city" value={newService.city} onChange={handleChange}/><br /> <br />

                <label htmlFor="username">Username</label>
                <input type="text" className="text" id="username" value={newService.username} onChange={handleChange}/> <br /> <br />

                <button onClick={()=>addToDB()}>Add</button>

            </form>
        </div>
    );
}
 
export default AddService;