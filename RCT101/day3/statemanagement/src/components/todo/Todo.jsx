import { useState } from "react";
import AddTodo from "./Addtodo";
import TodoItem from "./Todoitem";

// const TodoItem=(props)=>{

//   console.log(props)

//   const {id,status,title,handleUpdate}=props



//   const handleupdateclick=()=>{
//     handleUpdate(id)
//   }
//     return (
//         <div
//             key={id}
//             style={{
//               display: "flex",
//               alignItems: "cneter",
//               justifyContent: "space-around",
//               color:"blue",
//               border:"1px solid red",
//               margin:"10px",
//               padding:"10px"
//             }}
//           >
//             <h1>{title}</h1>
//             <p>{status ? "Complete" : "Not Complete"}</p>
//             <button onClick={handleupdateclick}>toggle</button>
//           </div>
//     )
// }


// const AddTodo=({handleAdd})=>{
//     const [text, setText] = useState("");

//     const handleChange = (e) => {
//         // console.log(e)
//         setText(e.target.value);
//         // console.log(e.target.value)
//       };

//       const onClick=()=>{
//         handleAdd(text)
//          setText("");
//       }
//     return (
//         <div>
//         <input
//           type="text"
//           value={text}
//           onChange={handleChange}
//           placeholder="add new todo"
//         />
//         <button onClick={onClick}>add</button>
//         <h4>{text}</h4>
//       </div>
//     )
// }

function Todo() {
  

  const [todos, setTodo] = useState([]);

 
  const addTodo = (text) => {
    // console.log(text)
    // text.length==""?alert("Please add todoo item"):true
    const newTodo = {
      // title:text.length?text:alert("please add text"),
      title: text,
      status: false,
      id: Date.now() + Math.random() + text,
    };

    // console.log(newTodo)

    // SPREAD OPERATOR
    const addnewtodo = [...todos, newTodo];

    setTodo(addnewtodo);

    // to empty input tag
    // setText("");

  };


  const handleUpdate=(id)=>{

    const todoaftrupdate=todos.map((todo)=>{
      return todo.id=== id? {...todo, status: !todo.status}: todo
    })
    console.log(todoaftrupdate)

    setTodo(todoaftrupdate)
  }





  console.log(todos);

  return (
    <div>
      
      {/* <div>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="add new todo"
        />
        <button onClick={addTodo}>add</button>
        <h4>{text}</h4>
      </div> */}
        <AddTodo handleAdd={addTodo} />
      <div>
        {todos.map((element) => (
        //   <div
        //     key={element.id}
        //     style={{
        //       display: "flex",
        //       alignItems: "cneter",
        //       justifyContent: "space-around",
        //       color:"blue",
        //       border:"1px solid red",
        //       margin:"10px"
        //     }}
        //   >
        //     <h1>{element.title}</h1>
        //     <p>{element.status ? "Complete" : "Not Complete"}</p>
        //   </div>
        <TodoItem  key={element.id} {...element}  handleUpdate={handleUpdate}/>

        // <TodoItem  key={element.id} element ={...element}/>
        ))}
      </div>

     
    </div>
  );
}

export default Todo;
