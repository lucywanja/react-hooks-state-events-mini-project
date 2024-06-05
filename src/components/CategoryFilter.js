import React from "react";

import { CATEGORIES, TASKS } from "../data";
import '../index.css'

function CategoryFilter({ handleCategoryFilter }) {

  const filterCategory = (item, index) => {
    const buttons = [...Array(CATEGORIES.length)].map((_, i) => `cat${i}`);

    document.getElementById(`cat${index}`).classList.toggle('selected');

    buttons.forEach((id) => {
      if (id !== `cat${index}`)
      {
        document.getElementById(id).classList.remove('selected');
        document.getElementById(id).classList.add('notselected');
      }
    });

    //buttons.map((id) => ('cat' + id !== `cat${index}` ? document.getElementById('cat' + index).classList.add('notselected') : document.getElementById('cat' + index).classList.remove('selected')));
    handleCategoryFilter(item, index)
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((item, index) => (
        <button
          id={'cat' + index}
          key={index}
          onClick={() => filterCategory(item, index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
