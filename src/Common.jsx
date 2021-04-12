import React from "react";
import webimg from "./images/img1.gif";
import {NavLink}  from "react-router-dom";
const Common = (props) =>{
    return(
        <>
      <div className="row">
        <div className="col-lg-6 pt-5">
          <h1>{props.name}</h1>
          <h2>{props.desc} </h2>
          <NavLink type="button" className="btn btn-success" to={props.visit} > { props.btnname} </NavLink>
        </div>
        <div className="col-lg-6">
          <img src={props.imgsrc} className="img-fluid" alt="img"/>
        </div>
      </div>
        </>
    )
}
export default Common;


// const Common = (props) => {
 
//     return(
//     <>
//        <div className="jumbotron">
//        <h1 className="display-4">{props.name}</h1>
//         <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//         <hr className="my-4"/>
//         <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
//         <NavLink className="btn btn-primary btn-lg" to="#" role="button">Learn more</NavLink>
//       </div>

//       <div className="row">
//         <div className="col-lg-6 col-md-6 order-2 order-lg-1">
//           <h2>IMage testing</h2>
//           <p>lorem ipsum dolor sit amet</p>
//           <NavLink exact to={props.visit} className="btn btn-danger" >
//            {props.btname}
//           </NavLink>
//         </div>
//         <div className="col-lg-6 col-md-6 order-1 order-lg-2">
//           <img src={webimg} className="img-fluid"/>
//         </div>
//       </div>


     
//     </>
//     );

// };

// export default Common;
