
import './App.css';
import Useeffect from './components/useeffect';
import Timer from './components/Timer';

import React from 'react';

function App() {

  const [show,setShow]=React.useState(true)
  return (
    <div className="App">
      
      <Useeffect />
     {show&& <Timer />}

<button onClick={()=>{
   setShow(!show)
}}>I will hide Timer</button>
    </div>
  );
}

export default App;
