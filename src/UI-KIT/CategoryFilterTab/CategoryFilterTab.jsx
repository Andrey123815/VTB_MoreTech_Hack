import React from 'react';
import './CategoryFilterTab.scss';

function CategoryFilterTab(props) {
  return (
    <section className="category-filter-tab">
      <div className="tab__start-line-mark"></div>
      <div className="tab__filter">{props.filter}</div>
    </section>
  );
}

export default CategoryFilterTab;
