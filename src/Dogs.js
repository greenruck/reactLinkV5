import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Dogs({ dogs }){    
    return (
        <div>
            <BrowserRouter>
          <h1>Adopt a Best Friend</h1>
          <ul>
            {dogs.map(dog => (
              <li key={dog.name}>
                
                  <Link to={`/dogs/${dog.name}/${dog.age}/${dog.facts}`}>More about {dog.name}.</Link>
             
              </li>
            ))}
            </ul>
             </BrowserRouter>
        </div>
        
        );
  
     
  }
  Dogs.defaultProps = {
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
  export default Dogs;
  