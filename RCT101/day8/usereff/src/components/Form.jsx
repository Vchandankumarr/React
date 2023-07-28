 import { useState } from "react";



 const initstate={
    username:"",
    country:"",
    isMarried:false

 }

 export default  function Forms(){
    const [formstate, setFormstate]=useState(initstate)


    const handlechange=(e)=>{
    setFormstate({...formstate,
        [e.target.name]:e.target.value})
    }

    return (
        <div>
            <h1>FORMS</h1>
            <form >
                <label>
                    Username:-{" "}
                    <input name="username" type="text" value={formstate.username} onChange={handlechange} />
                </label>
        <br /><br />
                <label >Country:-{" "}
                    <select name="country"  value={formstate.country} onChange={handlechange} >
                        <option value="India">India</option>
                        <option value="Japan">Japan</option>
                    </select>
                </label>
                        <br /><br />
                <label>
                    IsMarried
                    <input name="isMarried" type="checkbox" value={formstate.isMarried} onChange={handlechange}  />
                </label>
                <br /><br />
                
                <input type="submit" />
            </form>
        </div>
    )
 }