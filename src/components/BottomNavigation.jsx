// src/components/BottomNavigation.jsx
import React from 'react';
import { Home, TrendingUp, Clock, User } from 'lucide-react';

const BottomNavigation = ({ activeTab, onTabChange }) => {
  // Navigation items configuration
  const navItems = [
    { id: 'Home', icon: Home, label: 'Home' },
    { id: 'Trade', icon: TrendingUp, label: 'Trade' },
    { id: 'History', icon: Clock, label: 'History' },
    { id: 'Profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="bottom-navigation">
      <div className="bottom-nav-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`nav-item ${activeTab === item.id ? 'nav-item-active' : 'nav-item-inactive'}`}
          >
            <item.icon size={24} />
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;