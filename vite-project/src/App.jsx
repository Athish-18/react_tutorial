import React, { useRef } from 'react'
import {useState,useEffect,UseRef} from 'react'
import { set } from 'react-hook-form';

const App = () => {
  const [count,setCount]=useState(0); 
  let val=useRef(0);// useRef is used to persist values across renders without causing re-renders ie value is stored and increased across re renders. , returns a object with current property in which value is stored ie if i click button 5 times, val.current will be 5 without it it would re render val would be 1 1 1  

  function handleClick() {
    val.current=val.current+1;
    console.log('val of val', val.current);
    setCount(count+1);
  
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>

      <div>
        Count {count}
      </div>
    </div>
  )
}

export default App