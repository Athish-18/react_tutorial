function Button()
{
//Passing param to fn 
  /*const handleClick=()=>console.log("Ouch")
  const handleClick2=(name)=>console.log(`${name} Stop Clicking Me`)
return (<button onClick={()=> handleClick2("Athish")}> Click me </button>) */

// count gets updated on clicking
/*
let count=0;
const handleClick=(name)=>{
  if(count<3){
    count++;
    console.log(`${name} you clicked me ${count} time/s`)
  }
  else {
    console.log(`${name} stop clicking me `)
  }
};
return(<buton onClick={()=>handleClick("Athish")}>Click Me </buton>)
} */

const handleClick=(e)=>e.target.textContent="Ouch";
return(<buton onClick={(e)=>handleClick(e)}>Click Me </buton>)}
export default Button;