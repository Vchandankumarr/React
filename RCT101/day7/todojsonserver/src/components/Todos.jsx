import { useState, useEffect } from "react";

import Addtodos from "./Addtodos";
import Todoitem from "./Todoitem";

const gettodos = () => {
  return fetch(`http://localhost:3000/todos`).then((res) => res.json());
};
// console.log(gettodos())

// async function fetchtodo(){
// let data=await gettodos()

// console.log(data)

// }
// fetchtodo()

function Todos() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [err, seterr] = useState(false);


  const fetchandupdatetodos = async () => {
    try {
      setLoading(true);
      let data = await gettodos();
      // console.log(data);
      setTodos(data);
      setLoading(false);

    } catch (error) {

      seterr(false);
      setLoading(false);
      console.log(error);
    }
  };

  const handlechange = (inputval) => {
    console.log("onclick button add todo item");

    const newtodo = {
      title: inputval,
      status: true,
    };
    // console.log(newtodo);

    fetch(`http://localhost:3000/todos`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newtodo)
    }).then(( )=>{fetchandupdatetodos()
    })
  };

//   to delete todo item

const handledelete=(id)=>{
    fetch(`http://localhost:3000/todos/${id}`,
    {
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>fetchandupdatetodos())
}

// to update status
const handletoggle=(id,body)=>{
    fetch(`http://localhost:3000/todos/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    }).then((res)=>fetchandupdatetodos())
}


  useEffect(() => {
    console.log("use erffect");
   

    fetchandupdatetodos();
  }, []);

  // console.log(todos)
  return (
    <div>
      <Addtodos handlechange={handlechange} />
      {/* <Todoitem/> */}
        {/* {console.log(todos)} */}

      {loading ? (
        <h1>Loading ....!</h1>
      ) : err ? (
        <h1>Something wend wrong</h1>
      ) : (
        todos.map((todo) => <Todoitem key={todo.id} handledelete={handledelete} handletoggle={handletoggle}   {...todo} />
        //    <div>{todo.title}</div>
        )
      )}
    </div>
  );
}

export default Todos;
