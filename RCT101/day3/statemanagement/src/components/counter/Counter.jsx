
import React from "react"

function Counter(){
    const [count, setCount]=React.useState(0)

    const handleClick=()=>{
        setCount(count+1)
    }
    const decrementButton=()=>{
      count?  setCount(count-1):setCount(count)
    }
    return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Increment</button>
        <button onClick={decrementButton}>Decrement</button>
    </div>
    )
}

export default Counter