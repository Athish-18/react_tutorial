import React from "react";
import ChildA from "./Components/ChildA";

const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = React.useState("light"); //creating a state var theme and allocating as its name as light

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {" "}
        {/*value passed*/}
        <ChildA />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
export { ThemeContext };
