function List() {
  /*const fruits = ["apple", "banana", "mango", "orange"];

  // fruits.sort();

  const listItems = fruits.map(fruit=><li>{fruit}</li>)

  return <ol>{listItems}</ol>;
  */

  //Array of objects
  const fruits = [
    { id: 3, name: "apple", calories: 95 },
    { id: 4, name: "pineapple", calories: 98 },
    { id: 5, name: "banana", calories: 102 },
    { id: 6, name: "coconut", calories: 108 },
  ];

  //fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); // Alphabetical reverse
  // fruits.sort((a, b) => a.calories - b.calories); // by calories ascending order
  //fruits.sort((a, b) => b.calories - a.calories); // by calories descending order

  /*
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}
      {fruits.calories}
    </li>
  ));
*/

  //Filter based on some  properties

  const lowcalFruits = fruits.filter((fruit) => fruit.calories < 100);
  const listItems = lowcalFruits.map((lowcalFruit) => (
    <li key={lowcalFruit.id}>
      {lowcalFruit.name}
      {lowcalFruit.calories}
    </li>
  ));
  // const highcalFruit = fruits.filter((fruit) => fruit.calories > 100);

  return <ol>{listItems}</ol>;
}
export default List;
