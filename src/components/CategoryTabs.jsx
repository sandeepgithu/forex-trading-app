// src/components/CategoryTabs.jsx
import React from 'react';

const CategoryTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="category-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`tab-button ${activeTab === tab ? 'tab-button-active' : 'tab-button-inactive'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;