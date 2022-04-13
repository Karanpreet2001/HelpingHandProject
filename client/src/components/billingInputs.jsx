import React, { useState } from 'react';


const BillingInput = () => {


    const arr=[];
    const [item, setItem]=useState({
        itemName:"",
        price:0
    });

    const [person, setPerson] = useState({
        name:"",
        address:"",
        email:""
    })

    const handleOnChange=(e)=>{

        if(e.target.id="itemName"){
            item.itemName = e.target.value;
        }
        if(e.target.id = 'itemPrice'){
            item.price = e.target.value;
        }
       
    }

    const handleChange=(e)=>{

        if(e.target.id="name"){
            person.name = e.target.value;
        }
        if(e.target.id = 'email'){
            person.email = e.target.value;
        }

        if(e.target.id = 'address'){
            person.address = e.target.value;
        }
       
    }



    const handleSave=()=>{

        console.log("Save");
    }

    const handleAdd=()=>{
        arr.push(item);
    }

    const showBill=()=>{
        
        console.log("Bill");
    }


    return ( <div>


        <form>

        <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control-plaintext" id="name" value={person.name} onChange={handleChange}/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="address" class="col-sm-2 col-form-label">Address</label>
    <div class="col-sm-10">
      <input type="text" class="form-control-plaintext" id="address" value={person.address} onChange={handleChange}/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="address" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" class="form-control-plaintext" id="email" value={person.email} onChange={handleChange}/>
    </div>
  </div>
  <button className='btn btn-primary' onClick={()=>handleSave}>Save</button>
   <br/> <br/>


  <div class="mb-3 row">
    <label for="address" class="col-sm-2 col-form-label">Item Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control-plaintext" id="itemName" value={item.itemName} onChange={handleOnChange}/>
    </div>
  </div>

  <div class="mb-3 row">
    <label for="address" class="col-sm-2 col-form-label">Price</label>
    <div class="col-sm-10">
      <input type="number" class="form-control-plaintext" id="itemPrice" value={item.price} onChange={handleOnChange}/>
    </div>
  </div>
  <button className='btn btn-primary' onClick={()=>handleAdd}>Save</button> <br />

  <button className='btn btn-secondary' onClick={()=>showBill}>Save</button>




           
        </form>
    </div> );
}
 
export default BillingInput;