// src/components/HomeScreen.jsx
import React from 'react';

const HomeScreen = ({ activeTab, onPairSelect }) => {
  // Sample forex data - in real app, this would come from API
  const forexData = [
    { 
      pair: 'EUR/GBP', 
      flag1: '🇪🇺', 
      flag2: '🇬🇧', 
      change: '+30', 
      percentage: '+23.2%', 
      leftPrice: '1478.256369', 
      rightPrice: '1478.256369' 
    },
    { 
      pair: 'USD/JPY', 
      flag1: '🇺🇸', 
      flag2: '🇯🇵', 
      change: '+15', 
      percentage: '+12.5%', 
      leftPrice: '149.234567', 
      rightPrice: '149.456789' 
    },
    { 
      pair: 'GBP/USD', 
      flag1: '🇬🇧', 
      flag2: '🇺🇸', 
      change: '-20', 
      percentage: '-8.3%', 
      leftPrice: '1.267890', 
      rightPrice: '1.268123' 
    },
    { 
      pair: 'AUD/CAD', 
      flag1: '🇦🇺', 
      flag2: '🇨🇦', 
      change: '+45', 
      percentage: '+18.7%', 
      leftPrice: '0.898765', 
      rightPrice: '0.899123' 
    },
    { 
      pair: 'EUR/USD', 
      flag1: '🇪🇺', 
      flag2: '🇺🇸', 
      change: '+22', 
      percentage: '+15.4%', 
      leftPrice: '1.078910', 
      rightPrice: '1.079234' 
    },
    { 
      pair: 'NZD/JPY', 
      flag1: '🇳🇿', 
      flag2: '🇯🇵', 
      change: '-18', 
      percentage: '-10.2%', 
      leftPrice: '88.456789', 
      rightPrice: '88.567890' 
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-20">
      {forexData.map((item, index) => (
        <div
          key={index}
          onClick={() => onPairSelect(item)}
          className="trading-pair-item"
        >
          <div className="flex items-center justify-between">
            {/* Left side: Currency pair info */}
            <div className="flex items-center gap-3 flex-1">
              <div className="currency-flag-container">
                <div className="currency-flag">
                  <span>{item.flag1}</span>
                  <span className="flag-overlap">{item.flag2}</span>
                </div>
              </div>
              <div>
                <div className="time-display">15:00:00</div>
                <div className="pair-name">{item.pair}</div>
                <div className={`change-display ${parseFloat(item.change) > 0 ? 'positive' : 'negative'}`}>
                  {item.change} ({item.percentage})
                </div>
              </div>
            </div>

            {/* Right side: Price information */}
            <div className="flex gap-6 items-center">
              <div className="price-container">
                <div className="price">
                  <span className="price-whole">{item.leftPrice.split('.')[0]}</span>
                  <span className={`price-fraction ${index % 3 === 0 ? 'negative' : 'positive'}`}>
                    .{item.leftPrice.split('.')[1]}
                  </span>
                </div>
                <div className="price-label">L:235698</div>
              </div>

              <div className="price-container">
                <div className="price">
                  <span className="price-whole">{item.rightPrice.split('.')[0]}</span>
                  <span className={`price-fraction ${index % 2 === 0 ? 'positive' : 'negative'}`}>
                    .{item.rightPrice.split('.')[1]}
                  </span>
                </div>
                <div className="price-label">H:25.3659</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;