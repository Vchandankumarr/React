import React from "react";

// to get value from index.js

// step 1 import app context
import { Themecontext } from "./contexts/ThemecontextProvider";
// and to use it in example.jsx we have to import usecontext from react
import { Authcontext } from "./contexts/AuthContextprovider";

import { useContext } from "react";

// now to acess data

import Button from "./Button";

const Card = (props) => {
  console.log(props.children);
  return (
    <div style={{ border: `10px solid ${props.color}` }}> {props.children}</div>
  );
};

const Avatar = () => {
  return (
    <>
      {/* <img src="https://avatars.githubusercontent.com/u/112863003?v=4" alt="" /> */}
      <p>Chandan</p>
    </>
  );
};

function Example() {
  const { theme } = useContext(Themecontext);
  // you can also do const {theme}=useContext(Themecontext)

  const { isAuth, Login, Logout } = useContext(Authcontext);
  console.log(isAuth);

  console.log("inside Example component ", theme);
  console.log(theme.bgColor);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "5px solid red",
          padding: "40px",
          backgroundColor: theme.bgColor,
          color: theme.textColor,
        }}
      >
        <p>NavBar</p>
        <p> IS USER AUTHENTICATED:- {isAuth ? "YES" : "NO"}</p>
        <Button disabeled={isAuth} buttontext="Login" onClick={Login} />
        <Button disabeled={!isAuth} buttontext="Logout" onClick={Logout} />
      </div>
      <h1>Example</h1>
      {/* <h2>Theme color is {val.theme.bgColor}</h2>
            <button onClick={val.toggleTheme}> Change Theme</button> */}
      <Card color="teal">
        <Avatar />
      </Card>
    </div>
  );
}

export default Example;
