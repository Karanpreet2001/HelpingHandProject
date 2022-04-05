const express = require("express");
const app= express();

const mongoose= require("mongoose");
const cors= require("cors");

const ServiceProvider=require("./models/ServiceProvider.js");
const Login = require("./models/login.js");
const Conversation = require("./models/conversation");
const Message = require("./models/messages.js");
const User= require("./models/users");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());



const url="mongodb+srv://admin:admin@helpinghand.chfvr.mongodb.net/HelpingHandDB?retryWrites=true&w=majority";

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


        console.log(req.body);
        const{sp_id,username, occupation,owner,city, message, companyName, services, phone, email,address, deal, image}= req.body;


        const serviceProvider= new ServiceProvider({
            sp_id:sp_id,
            owner: owner,
            companyName: companyName,
            services:services, 
            phone: phone, 
            email: email,
            address: address, 
            deal: deal,
            image: image,
            city:city,
            message:message,
            occupation:occupation,
            username:username
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


app.get("/api/SPInfo/:servContact", async (req,res)=>{

    try{

        await mongoose.connect(url);

        const user =  await ServiceProvider.find({
            phone:req.params.servContact
        });
       -
        res.status(200).json(user);

    }catch(err){
        console.log(err);
    }
    
});


app.post("/api/Login", async(req,res)=>{


    const {username, password, type}= req.body;

    const login = new Login({
        username:username,
        password:password,
        type:type
    });

    try{

       await mongoose.connect(url);

        login.save(err=>{
            if(err) res.send(err);
            else{
                console.log("document is inserted");
                res.send(login);

                mongoose.connection.close();
            }
        })

    }catch(err){
        console.log(err);
    }


});



app.get("/api/Login", async(req,res)=>{

    try{
        await mongoose.connect(url);

        Login.find((err,login)=>{
        if(err){
            console.log(err);
        }else{
            console.log(login)
            res.send(login);
            
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



app.delete("/api/SPInfo/:id",async(req,res)=>{

    try{

        let _id= req.params.id;
        _id= mongoose.Types.ObjectId(_id);

        await mongoose.connect(url);
        console.log("Database Connected");

        ServiceProvider.deleteOne(
            {_id:_id},
            
                (err)=>{
                    if(err){
                        console.log(err);
                        res.send(err);
                    }else{
                        res.send("Updated Successfully");
                        mongoose.connection.close();
                    }
                }
            
        )

    }catch(err){
        console.log(err);
    }
});



app.post("/api/conversation", async(req,res)=>{

    const{serPhone, user}=req.body;

    const conversation = new Conversation({
        members:[user,serPhone]
    });

    try{

        await mongoose.connect(url);

        conversation.save((err)=>{
            if(err)
            console.log(err);

            else{
                res.send(conversation);
                console.log("The document is inserted");
                mongoose.connection.close();
            }
         })


    }catch(err){
        console.log(err);
    }
})


app.get("/api/conversation/:userId", async(req,res)=>{

   

    try{

        await mongoose.connect(url);

        const conversation = await Conversation.find({
            members:{$in:[req.params.userId]}
        });

        res.send(conversation);


    }catch(err){
        console.log(err);
    }
})

app.post("/api/message", async(req,res)=>{
   
   
    const {convId, sender, text}=req.body;

    const message = new Message({
        convId:convId,
        sender:sender,
        text:text
    });

    try{

        await mongoose.connect(url);

        message.save((err)=>{
            if(err)
                console.log(err);
            else{
                res.send(message);
                console.log("The document is inserted");
                mongoose.connection.close();
            }
        });
    }catch(err){
        console.log(err);
    }
})


app.get("/api/message/:convId", async(req,res)=>{

    try{

        await mongoose.connect(url);

        const messages = await Message.find({
            convId:req.params.convId
        });

        res.status(200).json(messages);

    }catch(err){
        console.log(err);
    }

})


app.get("/api/message/:convId", async(req,res)=>{

    try{

        await mongoose.connect(url);

        const messages = await Message.find({
            convId:req.params.convId
        });

        res.status(200).json(messages);

    }catch(err){
        console.log(err);
    }

})


app.post("/api/user", async(req,res)=>{

    const {name, age, phone, image, email, password}= req.body;


    const user = new User({
        name:name,
        age:age,
        phone:phone,
        image:image,
        email:email,
        password:password

    });

    try{

        await mongoose.connect(url);

        user.save(err=>{
            if(err)
            console.log(err);
            else{
                res.send(user);
                mongoose.connection.close();
            }
        })

    }catch(err){
        console.log(err);
    }

})

app.get("/api/user/:phone", async(req,res)=>{


    try{

        await mongoose.connect(url);

        const user = User.find({
            phone:req.params.phone
        });

        res.send(user);
        mongoose.connection.close();

    }catch(err){
        console.log(err);
    }

})

app.get('/', ()=> {
    return "Server up and running."
})

app.listen(5000,()=>{
    console.log("Server is Up and listening at 5000");
});
