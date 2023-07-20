


function Button(data){
    const {text, buttonColor,handleClick}=data
    // console.log(data)
    return <button onClick={handleClick
        // ()=>{alert(`${text} Clicked me!!!!`)}
    }
     style={{color:buttonColor}}> {text}</button>
}

export default Button