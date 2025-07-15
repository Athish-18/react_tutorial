import './App.css'
import List from './List'
function App() {

   const fruits = [
     { id: 3, name: "apple", calories: 95 },
     { id: 4, name: "pineapple", calories: 98 },
     { id: 5, name: "banana", calories: 102 },
     { id: 6, name: "coconut", calories: 108 },
   ];

    const vegetables = [
      { id: 7, name: "potatoes", calories: 95 },
      { id: 8, name: "corn", calories: 99 },
      { id: 9, name: "tomatoes", calories: 101 },
      { id: 10, name: "lfingers", calories: 104 },
    ];

  return (
    <div>
      {fruits.length > 0 ? (
        <List items={fruits}  category="Fruits"></List>
      ) : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables"></List>
      ) : null}
    </div>
  );
}


export default App;
