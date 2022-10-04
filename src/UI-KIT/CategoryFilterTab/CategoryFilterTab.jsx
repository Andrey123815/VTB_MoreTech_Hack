import React from 'react';
import './CategoryFilterTab.scss';

function CategoryFilterTab(props) {
  return (
    <section
      className={props.active ? "category-filter-tab active" : "category-filter-tab"}
      onClick={props.onClick}
    >
      <div className="tab__start-line-mark"></div>
      <div className="tab__filter">{props.filter}</div>
    </section>
  );
}

export default CategoryFilterTab;
