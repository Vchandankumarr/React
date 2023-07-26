

function Todoitem({id,title,status,handledelete,handletoggle}){
    // console.log(prop)
    // const {id,title,status}=prop
    // console.log(id,title,status)


    // const handledelete=()=>{
    //     fetch(`http://localhost:3000/todos/${id}`,
    //     {
    //         method:"DELETE",
    //         headers:{
    //             "Content-Type":"application/json"
    //         }
    //     }).then((res)=>console.log(res))
    // }

// const deleteitem=(id)=>{
//     handledelete(id)
// }


const handleupdate=()=>{
    const body={
        
        status: !status
      }
    handletoggle(id,body)

}

    return (
        <div style={{border:"1px solid red", margin:"10px" }}>
        <p>{id}</p>
        <h1>{title}</h1>
        <h2>{status?"Completed":"Not Completed"}</h2>
        <button onClick={()=>handledelete(id)}>Delete</button>
        <button onClick={handleupdate}>Toggle</button>
        </div>
    )
}


export default Todoitem