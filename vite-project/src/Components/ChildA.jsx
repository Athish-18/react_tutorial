import React, { useContext } from 'react'
import ChildB from "./ChildB"
import { UserContext } from '../App'
const ChildA = () => {

  const user=useContext(UserContext)
  return (
    <> 
      {user.name}
      <ChildB></ChildB>
    </>
  );
}

export default ChildA