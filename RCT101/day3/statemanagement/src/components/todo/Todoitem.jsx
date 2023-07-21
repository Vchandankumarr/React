const TodoItem=(props)=>{

    console.log(props)
  
    const {id,status,title,handleUpdate}=props
  
  
  
    const handleupdateclick=()=>{
      handleUpdate(id)
    }
      return (
          <div
              key={id}
              style={{
                display: "flex",
                alignItems: "cneter",
                justifyContent: "space-around",
                color:"blue",
                border:"1px solid red",
                margin:"10px",
                padding:"10px"
              }}
            >
              <h1>{title}</h1>
              <p>{status ? "Complete" : "Not Complete"}</p>
              <button onClick={handleupdateclick}>toggle</button>
            </div>
      )
  }
  

  export default TodoItem