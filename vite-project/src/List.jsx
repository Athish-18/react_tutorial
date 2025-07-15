function List(props) {
 const category=props.category;
 const itemList=props.items;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}
      <p>{item.calories} </p>
    </li>
  ));

  return  <>
          <h3 className="heading">{category}</h3>
          <ol className="items">{listItems}</ol></>;
}


List.defaultProps={
  category:"Category",
  items:[],
}



List.propTypes={
  category:PropTypes.string
,items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,name:PropTypes.string,calories : PropTypes.number}))}
export default List;
