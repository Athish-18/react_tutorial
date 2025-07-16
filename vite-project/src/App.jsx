import React from "react";
//Passing Props ie all the other tags inside Card as chidren
import Cards from"./Cards.jsx"
function App() {
  return (
    <>
      <Cards>
        <h3>I am Athish</h3>
        <p>Learning Webdev</p>
        <p>Learning React</p>
      </Cards>
      <Cards children="I m a child">I m out  </Cards>
    </> // this will render if no children passed explicitly 
  );
}
export default App;
