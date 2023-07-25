const Postitem=(prop)=>{
    // console.log(prop)
    const {id,title}=prop
    console.log(id,title)
    return(
        <div style={{border:"1px solid red", padding:"10px", margin:"10px"}}>
            <h1>{id}</h1>
            <p>{title}</p>
                    </div>
    )
}

export default Postitem 