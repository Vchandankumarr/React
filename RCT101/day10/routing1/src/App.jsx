import "./App.css";

// import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Allroutes from "./components/Allroutes"




function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>React ROuter DOM-1</h1>

      <Allroutes/>
      
    </div>
  );
}

export default App;
