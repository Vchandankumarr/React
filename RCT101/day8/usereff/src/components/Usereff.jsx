import { useState,useRef } from "react";


const Buttonwithusestate=()=>{

    const [count,setCount]=useState(0)

    const handleclick=()=>{
        setCount(count+1)
    }

    return (
        <div>

            <p>Button with usestate</p>
            <h1>Count:-{count}</h1>
            <button onClick={handleclick}>INR</button>
        </div>
    )
}



const Buttonwithuseref=()=>{

let ref=useRef(0)

// Even after re render it remembers the value of ref in its memory we con acess it any time
// useref return  {current:0}

const handleclick=()=>{
ref.current=ref.current+1
console.log(ref)
}
console.log("re-render")
    return (
        <div>
            <p>Button with useref</p>
            <h1>Count:-{ref.current}</h1>
            <button onClick={handleclick}>INR</button>
        </div>
    )
}

function Usereff(){

    return (
        <div>
            <Buttonwithusestate />
            <Buttonwithuseref />
        </div>
    )
}


export default Usereff