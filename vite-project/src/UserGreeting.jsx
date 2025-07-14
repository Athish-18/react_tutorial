function UserGreeting(props)
{
  /*
if(props.isLoggedIn)
{
  return <h2>  Welcome</h2>; 
}

else{
  return <h2>Hi {props.username} </h2>;
}
  */

/*
return(props.isLoggedIn ?<h2 className="welcome-message">{props.username} welcome </h2>:<h2 className="login-message">Please Login</h2>)
  */


const welcomeMessage=<h2 className="welcome-message"> Welcome {props.username}</h2>  
const loginmessage=<h2 className ="login-message">Please Login {props.username}</h2>

return(props.isLoggedIn?welcomeMessage : loginmessage)
 }
export default UserGreeting;