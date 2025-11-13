// src/components/ProfileScreen.jsx
import React from 'react';
import { User, TrendingUp, Clock, Filter, ChevronRight } from 'lucide-react';

const ProfileScreen = () => {
  // Profile menu items
  const menuItems = [
    { icon: User, label: 'Account Settings', color: 'text-blue-500' },
    { icon: TrendingUp, label: 'Trading Preferences', color: 'text-green-500' },
    { icon: Clock, label: 'Transaction History', color: 'text-yellow-500' },
    { icon: Filter, label: 'Privacy & Security', color: 'text-purple-500' },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-20 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="avatar">Sp</div>
          <h2 className="profile-name">Sandeep</h2>
          <p className="profile-email">singsandeep971@gmail.com</p>
          <div className="verification-badge">Verified Account</div>
        </div>

        {/* Account Balance */}
        <div className="balance-card">
          <h3 className="balance-title">Account Balance</h3>
          <div className="balance-amount">$12,450.75</div>
          <div className="balance-change positive">+$2,345.50 (23.4%) this month</div>
        </div>

        {/* Quick Stats */}
        <div className="stats-grid-profile">
          <div className="stat-card-profile">
            <div className="stat-label-profile">Total Trades</div>
            <div className="stat-value-profile">147</div>
          </div>
          <div className="stat-card-profile">
            <div className="stat-label-profile">Active Positions</div>
            <div className="stat-value-profile">5</div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="menu-list">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className="menu-item"
            >
              <div className="menu-item-content">
                <item.icon className={item.color} size={24} />
                <span className="menu-item-label">{item.label}</span>
              </div>
              <ChevronRight className="menu-chevron" size={20} />
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;