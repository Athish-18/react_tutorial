import React, { createContext, useState } from 'react'
import ChildA from "./Components/ChildA";


//UseContext --to send data from parent and how to access it child of child .. ie hierachy
// Step 1 create user context
const UserContext=createContext();

//Step 2 : wrap all child inside a provider 

//step3 -- Pass value 
const App = () => {
const[user,setUser]=useState({name:"Love"}); //creating a state var user and allocating as its name as love
  return (
    <> 
      <UserContext.Provider value={user}>  {/*value passed*/}
        <ChildA></ChildA> 
      </UserContext.Provider> {/*ie every child is wrapped because a is wraped and b and c are in a */}
    </>
  );
}

export default App
export {UserContext}