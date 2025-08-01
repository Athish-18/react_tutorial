import React from 'react'

const ChildComponent = React.memo(
    (props) => {
    
        console.log("Child Component got re-rendered again");
      
        return (
          <div>
            <button onClick={props.handleClick}>
              {props.buttonName}
            </button>
          </div>
        )
      }
);

export default ChildComponent

// Flow -- I had a button in parent component, when I clicked it, it was re-rendering the child component
// Reason: because the function was being created again and again in the parent component, so it was passing a new function to the child component every time, which caused the child component to re-render


// React.memo is used to prevent unnecessary re-renders of the child component when the props haven't changed.
//React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga 
// React.memo is a higher order component that will only re-render the child component if the props have changed. 
// If the props are the same, it will not re-render the child component

//if u r sending a function, then react.memo wont be able to save you from re-rendering--- therefore use useCallback hook in parent component to memoize the function
