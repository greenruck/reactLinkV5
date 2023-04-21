import React from "react";
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import Dogs from "./Dogs";
import DogDetails from "./DogDetails";        
  

function Routes(){
    
    return(
        <BrowserRouter>
        <Switch>
          <Route path="/dogs/:name/:age/:facts">
            <DogDetails />
          </Route>
          <Route exact path="/dogs" >
            <Dogs /> 
          </Route>
          <Redirect to="/dogs" />
        </Switch>
        </BrowserRouter>
    );
  }

  export default Routes;