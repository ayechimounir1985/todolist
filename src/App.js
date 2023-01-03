import { useState } from "react";
import ToDoList from "./Components/ToDoList";
import Addtodo from "./Components/AddTodo";
function App() {
  const [todos, setTodos] = useState([{
    id: 1234,
    task: "learn react",
    isdone: false,
  }]);

  const adding=(x)=>{
  setTodos([...todos,x])
  
  }
const deleting =(id) => {
setTodos(todos.filter(el=>el.id!==id))
}
const toggle =(id)=> {
  setTodos(todos.map(el=>(el.id==id)?{...el,isdone:!el.isdone}:el))
}
  return <div className="App">
    <Addtodo adding={adding} />
    <ToDoList todos={todos}deleting={deleting} toggle={toggle}/>
  </div>;
}

export default App;
