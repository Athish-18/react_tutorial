
import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for(let i=0; i<=1000000000; i++) {}
    return num*2;
  }
  
  let doubleValue = useMemo(() => expensiveTask(input), [input]); // useMemo to memoize the result of expensiveTask ie it will only recompute when 'input' changes ie [input] is the dependency array and input is the variable that we are tracking for changes. It stores the result of the expensive function call and returns the cached value on subsequent renders unless the input changes. ie On subsequent renders, it will return the cached value instead of recalculating it, thus improving performance. ie On clicking increment button, the expensiveTask will not be called again unless the input changes.

  

  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        Increment
      </button>

      <div>
        Count: {count}
      </div>

      <input 
        type='number'
        placeholder='enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}

      />

      <div>
        Double: {doubleValue}
      </div>
    </div>
  )
}

export default App
