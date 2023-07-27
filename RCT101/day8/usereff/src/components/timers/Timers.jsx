import { useState,useEffect } from "react";




export default function Timer(){

    const [time, setTime]=useState(10)
    
    // useEffect(()=>{
    //     const intervalid=setInterval(()=>{
    //        setTime((prevtime)=>{
    //         if(prevtime===1){
    //             clearInterval(intervalid)
    //         }
    //         return   prevtime-1 
    //             })
    //     },1000)
    // },[])

    useEffect(()=>{
        // setTime(time-1)

        const intervalid=setInterval(()=>{
            setTime((prevtime)=>{
                // console.log(prevtime) 
                if(prevtime===1){
                    clearInterval(intervalid)
                }
                return prevtime-1})
        },1000)

        const cleanup=()=>{
            clearInterval(intervalid)
        }
        return cleanup
    },[])


    return (
        <div>
            <h1>Timer</h1>
            <h1>Time:{time}</h1>
        </div>
    )
}