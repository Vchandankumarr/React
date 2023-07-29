 import { useState } from "react";



 const initstate={
    username:"",
    country:"",
    isMarried:false

 }

 export default  function Forms(){
    const [formstate, setFormstate]=useState(initstate)


    const handlechange=(e)=>{
        console.log(e.target.value)
        // for check box e.target.checked
        // console.log(e.target.checked)

        const val=e.target.type==="checkbox"?e.target.checked:e.target.value
    setFormstate({...formstate,
        [e.target.name]:val})
    }


    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(formstate)
        console.log("inside form")

    }

    const {username,country,isMarried}=formstate
    return (
        <div>
            <h1>FORMS</h1>
            <form onSubmit={handlesubmit}  >
                <label>
                    Username:-{" "}
                    <input name="username" type="text" value={username} onChange={handlechange} required />
                </label>
        <br /><br />
                <label >Country:-{" "}
                    <select name="country"  value={country} onChange={handlechange} required>
                        <option value="India">India</option>
                        <option value="Japan">Japan</option>
                    </select>
                </label>
                        <br /><br />
                <label>
                    IsMarried
                    <input name="isMarried" type="checkbox" value={isMarried} onChange={handlechange}  required/>
                </label>
                <br /><br />
                   
                <input type="submit" />
            </form>
        </div>
    )
 }