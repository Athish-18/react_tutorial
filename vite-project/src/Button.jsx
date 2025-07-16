import React from 'react'

const Button = (props) => { //created a fn in app for button that updates count ie in poarent ie app , through children u acess and call fn through this button component
  return (
    <div> 
      {props.children}
      <button onClick={props.handleClick}>
        {props.text} </button></div>
  )
}

export default Button