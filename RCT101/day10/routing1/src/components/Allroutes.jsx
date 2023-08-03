

import { Route,Routes } from "react-router-dom"

import About from "../Pages/About"
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import User from "../Pages/Users";
import Userinfopage from "../Pages/Userinfopage"


function Allroutes(){
    return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/User" element={<User />} />
    <Route path="/User/:id" element={<Userinfopage/>} />
  </Routes>
}

export default Allroutes