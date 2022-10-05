import React from 'react';
import './CategoryFilterTab.scss';

function CategoryFilterTab(props) {
  return (
    <section
      className={props.active ? "category-filter-tab_active" : "category-filter-tab"}
      onClick={props.onClick}
    >
      <div className="category-tab__line-mark"></div>
      <div className="category-tab__filter-text">{props.filter}</div>
    </section>
  );
}

export default CategoryFilterTab;
