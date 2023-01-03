import { useState } from "react";

const Addtodo = ({ adding }) => {
  const [add, setAdd] = useState("");
  return (
    <div>
      <input onChange={(e) => setAdd(e.target.value)} type={"text"}></input>
      <button
        onClick={()=>adding({
          id: Math.random(),
          isdone: false,
          task: add,
        })}
      >
        Add</button>
    </div>
  );
};
export default Addtodo;
