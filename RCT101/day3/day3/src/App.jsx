
import './App.css';

import Button from './components/Button';
// import Greetings from  './components/Greetings';
import Greetings from './components/greetings';

import Avatar from './components/Avatar'


let data=[{
  id:1,
  src:"https://avatars.githubusercontent.com/u/112863003?v=4",
  title:"Chandan",
  rounded:true
},
{
  id:2,
  src:"https://avatars.githubusercontent.com/u/112863003?v=4",
  title:"Chandan",
  rounded:false

}]

let renderdata=data.map((element)=><Avatar key={element.id} src={element.src} title={element.title}  rounded={element.rounded}/>)

console.log(renderdata)

function App() {
  return (
    <div className="App">
    <h1>Welcome to day 3</h1>

    <Button text="click me" buttonColor="teal"
    handleClick={()=>console.log("button 1 clicked")}
    />
    <Button text="second button" buttonColor="red" 
    handleClick={()=>alert("button 2 clicked")} /> 
    <Greetings text=" Hello from Greetings" />
    




{/* <Avatar src="https://avatars.githubusercontent.com/u/112863003?v=4" title="chandan" />
<Avatar src="https://avatars.githubusercontent.com/u/112863003?v=4" title="chandan" /> */}


{renderdata}
    </div>
  );




}

export default App;
