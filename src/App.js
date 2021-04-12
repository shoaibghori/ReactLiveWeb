import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Contact from "./Contact";
import {Switch ,Route,Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const App = () =>{
  return(
    <>
    <div className="container">
      <div className="row">
    <Menu/>
    <Switch>
      <Route  exact path="/" component={Home}/>
      <Route  exact path="/aboutus" component={AboutUs}/>
      <Route  exact path="/services" component={Services}/>
      <Route  exact path="/contact" component={Contact}/>
      <Redirect to="/" />
    </Switch>
</div>
</div>
    </>
  );
};

export default App;