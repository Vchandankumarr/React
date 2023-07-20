// import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
// import {Greetings} from './components/Greetings';

import Button from './components/button';

function App() {

  return (
    <div className="App">
<h1>Hello from react day2</h1>
<Greetings />

{/* you can pass information after Button through text and acess it in button.jsx function  */}
<Button text="click me!!" />

    </div>
  );
}


export default App;
