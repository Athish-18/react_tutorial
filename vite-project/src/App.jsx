import React, { useState } from 'react'
import Card from "./Card.jsx"
function App() {
  // Create , manage , handle all state
  const[name,setName]=useState(" ")
  return (
    <div>
      <Card name={name} setName={setName}> </Card>
      <p> I m the parent component and value of name is {name} </p>
    </div>
  )
}

export default App