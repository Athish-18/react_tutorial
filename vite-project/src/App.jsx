import React, { useEffect, useState } from "react";

const App = () => {
  // useEffect is used to generate side effects
  // first - fn to generate side efffects
  // second - cleanup logic
  // third - an array where the value if updated gets called to avail side_effect
  /* useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
   */


  // variation 1
  //runs on every render ie every time there is a change in UI this renders ie i will run everytime when u render on every click , first this statement runs then count incremented
  /* const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  useEffect(() => {
    alert("i will run everytime when u render");
  });

  return (
    <div>
      <button onClick={handleClick}> Click Me </button>
      <p> Count is {count}times</p>
    </div>
  ); */

  
  // variation 2 :renders only once ie on the first render
  /* useEffect(() => {

 alert("I ll render for the first render only")
}, [])

const[count,setCount]=useState(0);
function handleClick()
{
  setCount(count+1);
}

return(<div>
  <button onClick={handleClick} > Click Me</button>
  <p> Count is {count} times </p>
</div>)
 */


  //Variation 3
  /* const[count,setCount]=useState(0);
function handleClick()
{
  setCount(count+1);
}

useEffect(() => {
  alert("I will render everytime count is updated ");
}, [count]);

return(<div>
  <button onClick={handleClick} > Click Me</button>
  <p> Count is {count} times </p>
</div>) */


  //variation 4 --Multiple dependencies , even if one updates the other also changes
  /* const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  const [total, setTotal] = useState(1);
  function handleTotal() {
    setTotal(total + 1);
  }

  useEffect(() => {
    alert("I will render whenever u click count or total");
  }, [count, total]);

  return (
    <>
      <button onClick={handleClick}>Count_Increment</button>
      <p>Count is {count}</p>
      <br></br>
      <button onClick={handleTotal}>Total_Increment</button>
      <p> Total is {total}</p>
    </>
  ); */


//variation 5 -- use of cleanup fn
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    alert("Count is updated");

    return () => {
      alert("Count is unmounted from UI"); // runs before next effect  ie if count changes  or u unmount that component if u use in app
    };
  }, [count]);

  return (
    <>
      <button onClick={handleCount}>Count</button>
      <p>Current count: {count}</p>
    </>
  );

};
export default App;
