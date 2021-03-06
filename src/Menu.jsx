import React from "react";
import {NavLink} from "react-router-dom";


const Menu = () =>{
    return(
        <>
    
           
                <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <NavLink className="navbar-brand" to="/">Logo here</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/aboutus">AboutUs </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/services">Services </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/contact">Contact </NavLink>
                    </li>
                    
                    
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="Services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Other
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to="#">Action</NavLink>
                        <NavLink className="dropdown-item" to="#">Another action</NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                        </div>
                    </li>
         
                    </ul>
           
                </div>
                </nav>
                </div>

      
        </>
    );
};

export default Menu;


// import React from "react";
// import {NavLink} from "react-router-dom";

// const Menu = () =>{
//     return(
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <NavLink className="navbar-brand" to="/">Navbar</NavLink>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ml-auto">
//                 <li className="nav-item active">
//                     <NavLink className="nav-link" to="/Home">Home </NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to="/AboutUs">AboutUs</NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to="/Services"  >Services</NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to="/Contact"  >Contact</NavLink>
//                 </li>
//                 </ul>

//             </div>
//             </nav>
//         </>
//     );
// };


// export default Menu;