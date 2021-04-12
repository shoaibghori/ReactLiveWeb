import React from "react";
import webimg from "./images/img1.svg";
import {NavLink} from "react-router-dom";
const Card = (props) =>{
return(
  <>
  
      <div className="col-lg-4 mt-3 text-center">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top img-fluid p-3" alt="img"/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink exact to="/contact" className="btn btn-primary">Go somewhere</NavLink>
          </div>
        </div>
    </div>

  </>
);
};
export default Card;
