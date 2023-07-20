function Avatar(data){

    let {src,title,rounded}=data
    return (
        <>
        <img src={src} alt="Avatar"  width="100px" style={{borderRadius:rounded?"50%" :"10%"}}/> 
       <h1>{title}</h1> 
       </>
    )
}

export default Avatar