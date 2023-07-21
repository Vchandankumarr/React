

import { useState } from "react";

const AddTodo=({handleAdd})=>{
    const [text, setText] = useState("");

    const handleChange = (e) => {
        // console.log(e)
        setText(e.target.value);
        // console.log(e.target.value)
      };

      const onClick=()=>{
        handleAdd(text)
         setText("");
      }
    return (
        <div>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="add new todo"
        />
        <button onClick={onClick}>add</button>
        <h4>{text}</h4>
      </div>
    )
}


export default AddTodo