import React from "react";
import webimg from "../images/img1.gif";
import Common from "../Common";


const Home = () =>{
  return(
    <>
      
     <Common name="Welcome to Home" desc="lorem ipsum home" imgsrc={webimg} visit="/contact" btnname="Get Started"/>
    </>
  );
};
export default Home;
