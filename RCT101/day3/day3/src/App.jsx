
import './App.css';

import Button from './components/Button';
import Greetings from  './components/Greetings'


function App() {
  return (
    <div className="App">
    <h1>Welcome to day 3</h1>

    <Button text="click me" buttonColor="teal" />
    <Greetings text=" Hello from Greetings" />
    </div>
  );
}

export default App;
