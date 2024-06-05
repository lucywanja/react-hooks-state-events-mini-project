import React from "react";
import Task from './Task'

function TaskList({ tasks , deleteTask }) {
  return (
    <div className="tasks">
      
      {tasks.map((task, index) => (
        <Task key={index} task ={task} ind={index} deleteTask={deleteTask}/>
//  task object containing the details (e.g., category and text) for the task.
      ))}
    </div>
  );
}

export default TaskList;

// 2.Receives the tasks prop.
// Uses the map method to iterate over the tasks array and renders a Task component for each task.
// Passes each task object to the Task component as a prop.

// B. Pass Down Delete Function
// TaskList component receives the deleteTask function as a prop and passes it to each Task component.