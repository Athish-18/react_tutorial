import './App.css'
import UserGreeting from "./UserGreeting.jsx"

// Condition Rendering -- allows you to control what gets rendered in your application based on certain conditions (show , hide , or change components)
function App() {
  return (
    <>
     <UserGreeting isLoggedIn={false} username="BroCode"></UserGreeting>
    </>
  );
}


export default App;
