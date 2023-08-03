
import './App.css';

import {Routes,Route} from "react-router-dom"


function Customer (){
  return <h1>Customers</h1>
}
function About (){
  return <h1>About</h1>
}

function App() {
  return (
    <div className="App">
      <h1>React ROuter DOM-1</h1>
      <Routes>
        <Route path="/" element= {<h1>Home</h1>} /> 
        <Route path="/about" element={<About/>} />
        <Route path="/customer" element={<Customer />} />
       <Route path="/abc" element={<Customer/>} />

                </Routes>
    </div>
  );
}

export default App;
