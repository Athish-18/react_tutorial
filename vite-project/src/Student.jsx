function Student(props)
{
  return (
    <div>
      <p> Name:{props.name}</p>
      <p> Age:{props.age}</p>
      <p>Student:{props.isStuent ?"Yes" :"No"}</p>
    </div>
  );
}
export default Student;