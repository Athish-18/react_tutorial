import React from "react";

function Card(props) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => props.setName(e.target.value)}
        placeholder="Enter your name"
      /> 
      <p>I am inside Card component: {props.name}</p> 
    </div> // reflects name in both components
  );
}

export default Card;
