const express = require("express");
const app= express();

const mongoose= require("mongoose");
const cors= require("cors");

const ServiceProvider=require("./models/ServiceProvider.js");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


const url="mongodb://localhost:27017/HelpingHandDB";

app.get("/api/SPInfo", async(req,res)=>{

    try{

        await mongoose.connect(url);
        console.log("Database connected");

        ServiceProvider.find((err,serviceProvider)=>{
            if(err){
                console.log(err);
            }else{
                res.send(serviceProvider);
                mongoose.connection.close();
            }
        })


    }catch(err){
        console.log(err);
    }
});


// Creating data 
app.post("/api/SPInfo", async(req,res)=>{

    try{


        const{sp_id, owner, companyName, services, phone, email,address, deal, image}= req.body;


        const serviceProvider= new ServiceProvider({
            sp_id:sp_id,
            owner: owner,
            companyName: companyName,
            services:services, 
            phone: phone, 
            email: email,
            address: address, 
            deal: deal,
            image: image
        });


        await mongoose.connect(url);
        console.log("Database connected");

        serviceProvider.save((err)=>{
            if(err){
                console.log(err);
                res.send(err);

            }else{
                console.log("This document is inserted")
                res.send(serviceProvider);
                mongoose.connection.close();
            }
        })


    }catch(err){
        console.log(err);
    }
});


//updating service provider

// app.put("/api/SPInfo/:id", async(req, res)=>{
//     try{

//         let _id = req.params.id;
//         _id=mongoose.Types.ObjectId(_id);

//         await mongoose.connect(url);
//         console.log("Database connected");

//         ServiceProvider.updateOne(
//         {_id:_id},
//         {
//             menu=
//         })
//     }
// })


app.listen(5000,()=>{
    console.log("Server is Up and listening at 5000");
})
