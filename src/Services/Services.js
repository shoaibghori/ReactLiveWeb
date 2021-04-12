import React from "react";
import Card from "../Card";
import Sdata from "../Sdata";

const Services = () =>{
  return(
    <>
     
      <div className="col-lg-12 text-center">
            <h2 className="my-4">Our Services</h2>
        </div>
        {
         Sdata.map((val, ind) => {
            return <Card
            key = {ind}
              imgsrc={val.imgsrc}
              title={val.title}
            />
         })
        }
     
    </>
  );
};
export default Services;