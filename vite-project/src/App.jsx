import './App.css'
import Student  from "./Student.jsx"
function App() {
  return (
    <>
      <Student name="spongebob" age={30} isStudent={true}></Student>
      <Student name="spon" age={40} isStudent={false}></Student>
      <Student name="sbob" age={100} isStudent={true}></Student>

      <Student name="bob" age={15} isStudent={true}></Student>
    </>
  );
}

export default App;
