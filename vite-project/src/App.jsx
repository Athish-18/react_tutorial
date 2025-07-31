import React, { useRef } from 'react'
import {useState,useEffect,UseRef} from 'react'
import { set } from 'react-hook-form';

const App = () => {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  let btnref = useRef(); // Created a ref to the button in order to change its color ie  // increment button will change its color when change color of first button is clicked

  function handleClick() {
    val.current = val.current + 1;
    console.log("val of val", val.current);
    setCount(count + 1);
  }
  function changeColor() {
    btnref.current.style.backgroundColor = "red"; // Changes the color of the button to red
  }

  return (
    <div>
      <button ref={btnref} onClick={handleClick}>
        Click me
      </button>

      <button onClick={changeColor}>Change color of first button</button>
    </div>
  );
}
export default App
