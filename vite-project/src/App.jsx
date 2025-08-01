import { useCallback, useState } from "react";
import "./App.css";
import ChildComponent from "./Components/ChildComponent";


function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => { // Here we use usecallback so that the function reference remains the same across renders ie it doesn't create a new function on every render it becomes one ie count and freezes.
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>
      <br />
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br /> <br />
      <div>
        <ChildComponent buttonName="Click me" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
