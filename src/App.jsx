// src/App.jsx
import React, { useState } from 'react';
import TopNavigation from './components/TopNavigation';
import CategoryTabs from './components/CategoryTabs';
import BottomNavigation from './components/BottomNavigation';
import HomeScreen from './components/HomeScreen';
import TradeScreen from './components/TradeScreen';
import HistoryScreen from './components/HistoryScreen';
import ProfileScreen from './components/ProfileScreen';
import './App.css';

const ForexTradingApp = () => {
  // State management for the entire app
  const [activeTab, setActiveTab] = useState('Forex');
  const [activeBottomTab, setActiveBottomTab] = useState('Home');
  const [selectedPair, setSelectedPair] = useState(null);
  const [tradeType, setTradeType] = useState('buy');
  const [amount, setAmount] = useState('');

  // Tab configuration
  const tabs = ['Favourites', 'Forex', 'Crypto', 'Indices', 'Demo'];

  // Function to render the appropriate screen based on active bottom tab
  const renderContent = () => {
    switch (activeBottomTab) {
      case 'Home':
        return (
          <HomeScreen 
            activeTab={activeTab}
            onPairSelect={(pair) => {
              setSelectedPair(pair);
              setActiveBottomTab('Trade');
            }}
          />
        );
      case 'Trade':
        return (
          <TradeScreen
            selectedPair={selectedPair}
            tradeType={tradeType}
            amount={amount}
            onTradeTypeChange={setTradeType}
            onAmountChange={setAmount}
            onPairSelect={setSelectedPair}
            onClosePair={() => setSelectedPair(null)}
          />
        );
      case 'History':
        return <HistoryScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="forex-trading-app">
      {/* Top navigation bar */}
      <TopNavigation />
      
      {/* Category tabs - only visible on Home screen */}
      {activeBottomTab === 'Home' && (
        <CategoryTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}

      {/* Main content area */}
      {renderContent()}

      {/* Bottom navigation bar */}
      <BottomNavigation
        activeTab={activeBottomTab}
        onTabChange={setActiveBottomTab}
      />
    </div>
  );
};

export default ForexTradingApp;