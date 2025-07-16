import React, { useState } from "react";
import Button from "./Button.jsx"
function App() {

  const[count,setCount]=useState(0);

  function handleClick()
  {
    setCount(count+1);
  }
  return (
    <>
    <Button handleClick={handleClick} text="click Me">
      <h1>{count}</h1>

    </Button>
      </>
  );
}
export default App;
