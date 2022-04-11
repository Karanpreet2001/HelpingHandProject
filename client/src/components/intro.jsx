import React from 'react';
import "../styles/intro.css";
import {useNavigate} from "react-router-dom";




const Intro = () => {

    const navigate= useNavigate();
    const startSignIn=()=>{
        navigate("/signin");
    }
    return (
        
        <div className='newContainer'>
          
            <img src="https://www.ualberta.ca/folio/media-library/2020/04/200409-covid19-cleaning-banner.jpg" className='mainImage' height="70%" width="87.5%"/>
            <div className='innerh1'><h1>Find the perfect<br/> <span className='newspan'>freelance</span> services<br/> for your work</h1></div>
            <div className='getStart'><button onClick={()=>startSignIn()}>Get started</button></div>
        </div>
     );
}
 
export default Intro;