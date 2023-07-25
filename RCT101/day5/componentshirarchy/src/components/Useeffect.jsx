
import { useEffect,useState } from "react";


 function Useeffect (){
const [count,setCount]=useState(0)
const [toggleswitch, settoggleswitch]=useState(false)
console.log(1)
    // useEffect (callback function , dependency array)
    useEffect(()=>{
        // if i want to something to happen during mount phase or creation of component
        // i will write here which will get executed
        console.log(2)
        document.title=`clicked ${count} times`
    },[count])
    console.log(3)
    // o/p will be 1  3   2
    return (
        <div>
            <h1>UseEffect class 1</h1>
                <h2>Total Count :{ count}</h2>
            <button onClick={()=>{
                setCount(count+1)
            }}> click me</button>

            {/* toggle button */}
            <h3>{toggleswitch?"ON":"OFF"}</h3>
            <button onClick={()=>{
                settoggleswitch(!toggleswitch)
            }}>Switch</button>

        </div>
    )
}

export default Useeffect