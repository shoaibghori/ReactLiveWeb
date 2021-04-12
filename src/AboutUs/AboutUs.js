 import React from "react";
 import webimg from "../images/img1.svg";
 import Common from "../Common";

const AboutUs = () =>{
  return(
    <>
      <Common name="Welcome to About Us" desc="lorem ipsum About" imgsrc={webimg} visit="/aboutus" btnname="AboutUs"/>
    </>
  );
};
export default AboutUs;