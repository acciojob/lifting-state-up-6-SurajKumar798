import React from 'react';
const TodoList = ({todos, handlecomplete})=>{
  return(
    <div>
     {todos.map((todo)=> (
       <div key={todo.id} style={{marginBottom: "10px"}}
          <span style={{ marginRight: "10px" }}>
            {todo.text} {todo.completed ? "completed" : "Not completed"}
          </span>
         {!todo.completed && (
           <button onClick={()=> handleComplete(todo.id)}>
            Complete
           </button>
         )}
        </div>
      ))}
    </div>
  );
};
export default TodoList;
