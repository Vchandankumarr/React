import { useContext } from "react";

import { Themecontext } from "./contexts/ThemecontextProvider";

function Button({ buttontext, onClick,disabled=false }) {
  const { theme } = useContext(Themecontext);
  console.log(theme);
  return (
    <button
      style={{
        backgroundColor: theme.bgColor,
        color: theme.textColor,
        padding: "10px",
        border: theme.value === "dark" ? "1px solid white" : "1px solid black",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {" "}
      {buttontext}
    </button>
  );
}

export default Button;
