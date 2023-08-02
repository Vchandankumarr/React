import React from "react";
import { useState } from "react";

export const Themecontext = React.createContext();

console.log(Themecontext.Provider);

const themes = {
  light: {
    value: "light",
    bgColor: "white",
    textColor: "black",
  },
  dark: {
    value: "dark",
    bgColor: "black",
    textColor: "white",
  },
};

const ThemecontextProvider = (prop) => {
  const [theme, setTheme] = useState(themes.light);

  const toggletheme = () => {
    setTheme(theme.bgColor === "white" ? themes.dark : themes.light);
  };
  return (
    <Themecontext.Provider value={{ theme: theme, toggleTheme: toggletheme }}>
      {prop.children}
    </Themecontext.Provider>
  );
};

export default ThemecontextProvider;
