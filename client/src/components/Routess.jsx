
import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from "./home.jsx";
import Location from "./location.jsx";
import Services from './services.jsx';

const Routess = () => {
    return ( <div>
        
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/location" exact element={<Location/>} />
            <Route path="/services" exact element={<Services/>} />
            
        </Routes>
    </div> );
}
 
export default Routess;