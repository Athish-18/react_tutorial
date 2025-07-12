// propTypes= a mechanism that ensules that the passed value is of the correct datatype
// age:propTypes.number //issues warning in console when it isnt a number

// default props:  default values for props in case they are not passed from the parent component
//name:"guest"

import PropTypes from 'prop-types'
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

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent:PropTypes.bool
};


Student.defaultProps={
  name:"Guest",
  age:0,
  isStudent:false
}
export default Student;