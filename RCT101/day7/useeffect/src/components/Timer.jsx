import React from "react"



export default function Timer(){

    const [time,setTime]=React.useState(10  )

    React.useEffect(()=>{
       const intervalid= setInterval(()=>{

setTime((prevTim)=>{
   if(prevTim===1) clearInterval(intervalid)
    return prevTim-1
})


        },1000)


        const cleanup=()=>{
            clearInterval(intervalid)
        }
        return cleanup
    },[])


    return(
        <div>
            <h1>Time:-{time}</h1>
        </div>
    )
}


/* when dependency aarrry is emptty it means it only works when it is created or mounted 

ex :- useEffect(()=>{
    setTime(time-1)
},[]) here the empty array is the dependency array


*/