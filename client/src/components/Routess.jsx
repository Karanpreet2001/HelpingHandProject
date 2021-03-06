
import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from "./home.jsx";
import Location from "./location.jsx";
import Services from './services.jsx';
import ServiceDetail from './serviceDetails.jsx';
import SignIn from './signin.jsx';
import ServiceProvider from './serviceProDetails.jsx';
import AddService from './addService.jsx';
import Chat from './chat.jsx';
import Deals from './fixADeals.jsx';
import Intro from "./intro.jsx";
import Contact from "./contact";
import About from "./about";







const Routess = ({contact, services, onUpdate, onDelete, onViewMessage, newService, addToDB, login}) => {
    return ( <div>
        
        <Routes>
            <Route path="/getcity" element={<Home/>}></Route>
            <Route path="/signin" element={<SignIn contact={contact}/>}></Route>
            <Route path="/" element={<Intro/>}></Route>

            <Route path="/location" exact element={<Location/>} />
            <Route path="/services" exact element={<Services services={services}/>} />
            <Route path="/servicesDetails/:id" exact element={<ServiceDetail/>} />
            <Route path="/chat" exact element={<Chat contact={contact}/>} />
            <Route path="/contact" exact element={<Contact/>} />
            <Route path="/about" exact element={<About/>} />

            <Route path="/serviceProvider" exact element={<ServiceProvider services={services} />}/>
            <Route path="/addService" exact element={<AddService newService={newService} />}/>
            <Route path='/fixADeal' exact element={<Deals/>}/>
        </Routes>
    </div> );
}
 
export default Routess;