import { useCallback, useState } from "react";
import "./App.css";
import ChildComponent from "./Components/ChildComponent";
import ExpensiveComponent from "./Components/ExpensiveComponent";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    // Here we use usecallback so that the function reference remains the same across renders ie it doesn't create a new function on every render it becomes one ie count and freezes.if empty array is passed, it will not change across renders.
    setCount(count + 1);
    // }, [count]); // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. In this case, it will only change if `count` changes.
  }, []); // not rendering again because the function reference is the same across renders ie freezes the function reference
  return (
   /*  <div>
      <div>Count: {count}</div>
      <br />
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br /> <br />
      <div>
        <ChildComponent buttonName="Click me" handleClick={handleClick} />
      </div> */
      <div>
      <ExpensiveComponent />
    </div>
  );
}

export default App;
