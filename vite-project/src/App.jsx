import React from 'react'
const App = () => {
  /*
  function handleClick()
  {
    alert("U clicked");
  }
  return (
    <button  onClick={handleClick}> Please click me</button>
  ) */


    /*  return (
      <btton onClick={alert("i got clicked")} // dont do immediate invocation runs only once 
       <button  onClick={()=>{alert("i got clicked")}}>  // this is req to work and avoid the issue above
         Please click me
       </button>
     ); */


     /* function handleMouseover()
     {
      alert("u hovered over me")
     }

     return(
     <p onMouseOver={handleMouseover}> I m a para</p> ) */


     /* function handleInputChange(e)
     {
      console.log("value changed in console");
      console.log("value till now", e.target.value);
     }

     return(
      <form >
        <input type="text" onChange={handleInputChange}></input>
      </form>
     )

 */


    /*  function handleSubmit(e) {
       e.preventDefault(); // prevent page reload
       alert("Shall I submit?");
     }

     return (
       <form onSubmit={handleSubmit}>
         <button type="submit">Submit</button>
       </form>
     ); */


}

export default App