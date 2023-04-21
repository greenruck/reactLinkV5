import React from "react";
import {useParams} from 'react-router-dom';



function DogDetails({dogs}){ 

    const {name, age, facts} = useParams();
    const dogInfo = dogs.map(dog => `${dog.name} ${dog.age} ${dog.facts}`)
    

    return(
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h3>{facts}</h3>
        </div>
    )
}
DogDetails.defaultProps = {
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
export default DogDetails;