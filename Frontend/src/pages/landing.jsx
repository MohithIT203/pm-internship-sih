import React from "react";
import "./landing.css";

function Landing() {
  return (
    <>
      <div className="header">
        <p className="Title">InternPortal</p>
        <div className="button-group">
          <button className="Sign-In">Sign In</button>
          <button className="Start">Get Started</button>
        </div>
      </div>
      
      <div className="image-section">
   <p style={{color:"black",fontSize:"40px",fontWeight:"bold",fontFamily:"sans-serif"}}>Your Gateway to  
    <span style={{color:"slateblue"}}> Amazing Internships</span></p>
    <p style={{color:"rgba(49, 48, 48, 1)",fontSize:"20px",fontWeight:"7px",fontFamily:"sans-serif",zIndex:1}}>Connect talented students with innovative companies.<br/>Find your perfect internship match and kickstart your career journey.</p>
    <div className="btn-div">
    <button className="img-sign">Start Your Journey</button>
    <button className="img-log">I Have an Account</button>
    </div>
      </div>
    </>
  );
}

export default Landing;
