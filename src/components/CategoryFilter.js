import React  from "react";

import { CATEGORIES, TASKS } from "../data";


function CategoryFilter({ handleCategoryFilter } ) {

  const filterCategory =(i,index) => {
    console.log(index)
    handleCategoryFilter(i)
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((item,index)=>(
        <button
          key={index}
          onClick={()=>filterCategory(item,index)}
        >
          { item } 
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
