


function Button(data){
    const {text, buttonColor}=data
    return <button style={{color:buttonColor}}> {text}</button>
}

export default Button