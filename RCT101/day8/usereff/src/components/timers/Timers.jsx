



import { useState,useEffect,useRef } from "react";





const fixtime=(val)=>{
        return val<10?`0${val}`:val
}


const formattime=(time)=>{
    const seconds=time%60;
     const minutes=Math.floor(time/60)%60
     const hours=Math.floor(time/3600)

    return` ${fixtime(hours)}:${fixtime(minutes)}:${fixtime(seconds)}`
}

function Timer(){

const settimer=useRef(null)

    const [time,setTime]=useState(3620)



    const starttimer=()=>{

        // the below line of code prevents settiemr to run again when already on set interval is running

        if(settimer.current!==null){
            return
        }

         settimer.current=  setInterval(()=>{
            setTime((prevtime)=>{

                if(prevtime===1){
                    clearInterval(settimer.current)
                }
                return prevtime-1
            })
        },1000)
    }

    useEffect(()=>{
      


        const cleanup=()=>{
            // clearInterval(settimer.current)
            stoptimer()
        }
        return cleanup
    },[])


    const stoptimer=()=>{
        clearInterval(settimer.current)
        settimer.current=null
    }

    const resettimer=()=>{
        stoptimer()
        setTime(100)
    }

    return(
        <div>
            <h1>Timer</h1>
            <h2>Time:{formattime(time)}/S</h2>
            <button onClick={starttimer}>Start timer</button>
            <button onClick={stoptimer}>Stop timer</button>
            <button onClick={resettimer}>reset timer</button>
            
        </div>
    )
}

export default Timer