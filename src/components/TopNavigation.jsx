// src/components/TopNavigation.jsx
import React from 'react';
import { Menu, Filter } from 'lucide-react';

const TopNavigation = () => {
  return (
    <div className="top-navigation">
      <button className="nav-button">
        <Menu size={28} />
      </button>
      <button className="nav-button">
        <Filter size={24} />
      </button>
    </div>
  );
};

export default TopNavigation;