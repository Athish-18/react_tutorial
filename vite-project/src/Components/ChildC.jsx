import React from "react";
import { ThemeContext } from "../App"; // Import the context from App

const ChildC = () => {
  const { theme, setTheme } = React.useContext(ThemeContext); // Access the theme from context

  function handleClick() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div>
      {theme}
      <button onClick={handleClick}>Toggle Theme</button>
    </div>
  );
};

export default ChildC;
