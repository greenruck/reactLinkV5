import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routes from "./Routes";
import "./App.css"

function App(){    
  return (
      <div className="wrap">
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </div>
      
      );
  }
export default App;
