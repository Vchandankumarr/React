

import React from "react"

// to get value from index.js

// step 1 import app context
import { Themecontext } from "./contexts/ThemecontextProvider"
// and to use it in example.jsx we have to import usecontext from react
import { useContext } from "react"

// now to acess data 



const Card=(props)=>{
    console.log(props.children)
    return (<div style={{border:`10px solid ${props.color}`}}> {props.children}

    </div>)
}

const Avatar=()=>{
    return <>
    {/* <img src="https://avatars.githubusercontent.com/u/112863003?v=4" alt="" /> */}
    <p>Chandan</p>
    </>
}


function Example (){
    const val=useContext(Themecontext)
    
   
    console.log("inside Example component ", val)
    console.log(val.theme.bgColor)
    console.log(val.toggleTheme)
    
    return (
        <div>
            <h1>Example</h1>
            <h2>Theme color is {val.theme.bgColor}</h2>
            <button onClick={val.toggleTheme}> Change Theme</button>
            <Card color="teal">
                <Avatar/>
            </Card>
        </div>
    )
}


export default Example