import React from "react";
import { useState } from "react";

export const Authcontext = React.createContext();

console.log(Authcontext.Provider);

const AuthcontextProvider = (prop) => {
  const [isAuth, setAuth] = useState(false);

  const Login = () => {
    setAuth(true);
  };

  const Logout = () => {
    setAuth(false);
  };

  return (
    <Authcontext.Provider value={{ isAuth, Login, Logout }}>
      {prop.children}
    </Authcontext.Provider>
  );
};

export default AuthcontextProvider;
