import React from "react";

// task component  accept props and display the task details dynamically
function Task({ task , deleteTask ,ind }) {
  
  const handleDelete = () => {

     deleteTask(task,ind);
    //console.log("data is deleted")
 
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
// 3. Receives a task prop.
//Uses the task prop to display the task's category and text dynamically.

// c.Calls the delete function when the delete button is clicked 
