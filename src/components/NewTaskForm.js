import React, { useState } from "react";

import { CATEGORIES, TASKS } from "../data";

function NewTaskForm({ onTaskFormSubmit }) {

  const [details, setDetails] = useState();

  const [categoryList, setCategoryList] = useState();

  const filteredCategoryList = CATEGORIES.filter((item) => {
    return item !== "All"

  });
  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryList(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { text: details, category: categoryList };
    onTaskFormSubmit(newTask);
    setDetails("");
    setCategoryList("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          <option>Select Category</option>
          {filteredCategoryList.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
