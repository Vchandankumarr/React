
import { useRef,useEffect } from "react"

function Fun (){
    const inputRef=useRef(null)


    useEffect(()=>{
        inputRef.current.focus()
    },[])

    // console.log(inpu tRef.current)
    const handleclick=()=>{
        
        
        // inputRef.current.fucus()
    }

    return (
        <div>
            <h1> Usereff from userref folder</h1>

            <input type="text" ref={inputRef  } />
            <button onClick={handleclick}>Focus should be on input box</button>
        </div>
    )
}


export default Fun