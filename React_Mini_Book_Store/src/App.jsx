import Fiction from "./components/Fiction";
import { useState } from "react";
import NonFiction from "./components/NonFiction";

function App() {
const [state, setstate] = useState(true);
  return (
    <div style={{margin:"auto"}}>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={()=> setstate(!state)}>{!state? 'Show Fictional Books':'Show Non-Fiction Books'}</button>

      <div data-testid="conditional-container">
       {state? <Fiction/> : <NonFiction/>}
      </div>
    </div>
  );
}

export default App;
