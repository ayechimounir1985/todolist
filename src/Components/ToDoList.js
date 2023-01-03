const ToDoList = ({ todos, deleting,toggle}) => {
    console.log(todos)
  return (
    <div>
      {todos.map(el => (
        <>
          <h3 style={{textDecoration:(el.isdone)? 'line-through':''}} >{el.task}</h3>
          <button onClick={()=>deleting(el.id)}>Delete</button>
          <button onClick={()=>toggle(el.id)}>Done</button>
        </>
      ))}
    </div>
  );
};
export default ToDoList;
