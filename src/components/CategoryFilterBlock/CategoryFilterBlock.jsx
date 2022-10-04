import React from 'react';
import './CategoryFilterBlock.scss';
import {FILTERS} from "../../configurations/filters.js";
import CategoryFilterTab from "../../UI-KIT/CategoryFilterTab/CategoryFilterTab.jsx";

function CategoryFilterBlock() {
  return (
    <div className="category-filter-block">
      {FILTERS.map((filter) => <CategoryFilterTab filter={filter} />)}
    </div>
  );
}

export default CategoryFilterBlock;
