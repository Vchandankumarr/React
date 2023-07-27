import { useRef } from "react";


export default function Input(){

    const Inputref=useRef([])
    return (
        <div>
            <h1>Input tags</h1>
            <input type="text" id="1" ref={(elem)=>{
                Inputref.current[0]=elem
            }} />
            <input type="text" id="2" ref={(elem)=>{
                Inputref.current[1]=elem
            }} />
            <input type="text" id="3" ref={(elem)=>{
                Inputref.current[2]=elem
            }} />
            <input type="text" id="4" ref={(elem)=>{
                Inputref.current[3]=elem
            }} />
        </div>
    )
}