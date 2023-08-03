import { Link, NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

console.log(styles);
const links = [
  { to: "/", text: "HOME" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
  { to: "/user", text: "Users" },
];

function Navbar() {
  // const defaultstyle={
  //     textDecoration:"none",
  //     color:"black"
  // }

  // const activestyle={
  //     textDecoration:"none",
  //     color:"red"
  // }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        allinItem: "center",
      }}
    >
      {links.map((link) => {
        return (
          //   <NavLink style={({isActive})=>{
          //     console.log("link is",link,isActive)

          //     return isActive ? activestyle : defaultstyle;

          //   }} key={link.to} to={link.to}>
          //     {link.text}
          //   </NavLink>

          // applying css from novbar.module.css

          <NavLink
            className={({ isActive }) => {
              console.log(isActive);
              return isActive ? styles.active : styles.default;
            }}
            key={link.to}
            to={link.to}
          >
            {link.text}
          </NavLink>
        );
      })}

      {/* <Link to="/" >Home</Link>
    <Link to ="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/customer"> Customer</Link> */}
    </div>
  );
}

export default Navbar;
