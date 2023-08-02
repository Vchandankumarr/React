// console.log("main")
import { useContext } from "react";

import { Themecontext } from "./contexts/ThemecontextProvider";
import Button from "./Button";

function Main() {
  const { theme, toggleTheme } = useContext(Themecontext);
  console.log(theme, toggleTheme);

  return (
    <div style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>
      Main
      <h2>Theme color is {theme.value}</h2>
      <Button buttontext="Change Theme" onClick={toggleTheme} />
      {/* <button onClick={toggleTheme} style={{backgroundColor:theme.bgColor,color:theme.textColor}}> Change Theme</button> */}
    </div>
  );
}

export default Main;
