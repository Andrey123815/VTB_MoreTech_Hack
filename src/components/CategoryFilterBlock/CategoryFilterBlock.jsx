import React, {useState} from 'react';
import './CategoryFilterBlock.scss';
import {CATEGORY_FILTERS} from "../../configurations/filters.js";
import CategoryFilterTab from "../../UI-KIT/CategoryFilterTab/CategoryFilterTab.jsx";

const initFilterType = 'education';

function CategoryFilterBlock() {
  const [currFilterType, setCurrFilterType] = useState(initFilterType);
  return (
    <div className="category-filter-block">
      {CATEGORY_FILTERS.map(({type, description}) =>
        <CategoryFilterTab
          key={type}
          filterText={description}
          active={type === currFilterType}
          onClick={() => setCurrFilterType(type)}
        />
      )}
    </div>
  );
}

export default CategoryFilterBlock;
