import React from "react";
import {BrowserRouter, NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar({ dogs }){    

    return (
        <nav className="NavBar">

            <NavLink to="/dogs">All Dogs</NavLink>
            {dogs.map(dog => (
                <BrowserRouter>
                  <NavLink 
                    to={`/dogs/${dog.name}/${dog.age}/${dog.facts}`} 
                    >{dog.name}</NavLink>
                </BrowserRouter>
            ))}

          
        </nav>
        
        );
  
     
  }
  NavBar.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  };
  
  export default NavBar;
  