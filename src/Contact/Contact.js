import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import webimg from "../images/img1.gif";
// import Common from "../Common";

const Contact = () =>{
  const [data, setData] = useState({
     email:"",
      phone:"",
      message:"",
  });

const InputEvent = (event) => {
  const {name,value} = event.target; 
};

  const formSubmit = () =>{}; 

 
  return(
    <>
     
     <div className="col-lg-12 my-5">
       <h1 className="text-center"> Contact Us</h1>
     </div>
     <div className="container contact_div">
       <div className="row">
         <div className="col-md-5 col-10 mx-auto">
           <form onSubmit={formSubmit}>
           <div class="mb-3">
              <label for="Email" className="form-label">Email address</label>
              <input 
              type="email"
              className="form-control"
              id="Email"
              name="email"
              value={data.email}
              placeholder="name@example.com"
              onChange={InputEvent} required/>
            </div>
            <div class="mb-3">
              <label for="Phone" className="form-label">Phone</label>
              <input 
              type="number"
               className="form-control"
                id="Phone"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                 placeholder="Phone"  required/>
            </div>
            <div className="mb-3">
              <label for="Message" className="form-label">Message</label>
              <textarea 
              className="form-control"
               id="Message"
               name="message"
               value={data.message}
               onChange={InputEvent} rows="3"></textarea>
            </div>
            <input type="submit" value="Submit" className="btn btn-success"/>
           </form>
         </div>
       </div>
     </div>
    </>
  );
};

export default Contact;


// import React, { Component } from "react";

// class Contact extends Component {
//   render() {
//     return <div>Contact</div>;
//   }
// }

// export default Contact;
