import React, {useState} from 'react';
import './CategoryFilterBlock.scss';
import {FILTERS} from "../../configurations/filters.js";
import CategoryFilterTab from "../../UI-KIT/CategoryFilterTab/CategoryFilterTab.jsx";

const initFilter = 'Обучение';

function CategoryFilterBlock() {
  const [currFilter, setCurrFilter] = useState(initFilter);
  return (
    <div className="category-filter-block">
      {FILTERS.map(filter =>
        <CategoryFilterTab
          key={filter}
          filter={filter}
          active={filter === currFilter}
          onClick={() => setCurrFilter(filter)}
        />
      )}
    </div>
  );
}

export default CategoryFilterBlock;
