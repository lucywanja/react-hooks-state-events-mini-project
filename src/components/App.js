import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);

  const deleteTask = (taskToDelete, index) => {
    console.log(taskToDelete);
    console.log(index);
    // setTasks(tasks.filter(task => task !== taskToDelete));
    const updatedTasks = tasks.filter((i) => i.text !== taskToDelete.text);
    // Update the state with the new array of tasks
    console.log(updatedTasks);
    setTasks(updatedTasks);
  };

  function handleCategoryFilter(selectedCategory, index) {


    console.log(tasks)

    if (selectedCategory === 'All')
    {
      setTasks(TASKS);
    } else
    {
      setTasks(TASKS.filter((i) => i.category === selectedCategory));
    }



    console.log(selectedCategory);
  }
  const handleTaskFormSubmit = (newTask) => {
    console.log(newTask)
    console.log(tasks)

    setTasks([...tasks, newTask]);
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleCategoryFilter={handleCategoryFilter} />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      {/* 1.Pass the tasks array(it's called TASKS) from data.js to the tracklist component using a prop named task */}
    </div>
  );
}

export default App;


// summary of task(TO be diplayed)
// The App component passes the TASKS array to the TaskList component.
// The TaskList component uses the map method to create a list of Task components, each receiving a task prop.
// Each Task component renders the details of a task.

// TASK :Task component so that it shows the task's text and category.When the delete button is clicked, the task should be removed from the list

// A.initializes the tasks state with the TASKS array.
// CREATE Delete Function: The deleteTask function filters out the task to be deleted from the tasks array and updates the state.
//  IN SUMMARY FOR THE TASK PART
// State Management: The App component manages the state of the tasks and includes a function to delete tasks.
//Passing Props: The deleteTask function is passed down from App to TaskList, and then to each Task.
//Task Component: Displays task details and calls the delete function when the delete button is clicked.