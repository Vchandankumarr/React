import { useState } from "react";

function Addtodos({handlechange}) {
  const [ inputval, setInputVal ] = useState("");

//   const handlechange = () => {
//     console.log("onclick button add todo item");

//     const newtodo = {
//       title: inputval,
//       status: true,
//     };
//     // console.log(newtodo);

//     fetch(`http://localhost:3000/todos`,{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(newtodo)
//     }).then((res)=>{console.log(res)
//     })
//   };

const handleadd=()=>{
    handlechange(inputval)
    setInputVal("")
}

  return (
    <div>
      <p>add todo</p>
      <input
        value={inputval}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="add new todo item"
      />
      <button onClick={handleadd}> add todo</button>
    </div>
  );
}

export default Addtodos;
