// src/components/HistoryScreen.jsx
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const HistoryScreen = () => {
  // Sample trading history data
  const historyData = [
    { 
      id: 1, 
      pair: 'EUR/GBP', 
      type: 'Buy', 
      amount: 1000, 
      profit: '+$234.50', 
      status: 'closed', 
      date: '2025-11-13 14:30', 
      color: 'green' 
    },
    { 
      id: 2, 
      pair: 'USD/JPY', 
      type: 'Sell', 
      amount: 1500, 
      profit: '-$89.20', 
      status: 'closed', 
      date: '2025-11-13 13:15', 
      color: 'red' 
    },
    { 
      id: 3, 
      pair: 'GBP/USD', 
      type: 'Buy', 
      amount: 2000, 
      profit: '+$567.80', 
      status: 'closed', 
      date: '2025-11-13 12:00', 
      color: 'green' 
    },
    { 
      id: 4, 
      pair: 'EUR/USD', 
      type: 'Buy', 
      amount: 800, 
      profit: '+$123.40', 
      status: 'closed', 
      date: '2025-11-13 10:45', 
      color: 'green' 
    },
    { 
      id: 5, 
      pair: 'AUD/CAD', 
      type: 'Sell', 
      amount: 1200, 
      profit: '-$45.60', 
      status: 'closed', 
      date: '2025-11-12 16:20', 
      color: 'red' 
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-20 p-4">
      <h2 className="screen-title">Trading History</h2>
      
      {/* Summary Statistics */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Profit</div>
          <div className="stat-value positive">+$790.90</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Win Rate</div>
          <div className="stat-value">60%</div>
        </div>
      </div>

      {/* History List */}
      <div className="history-list">
        {historyData.map((trade) => (
          <div key={trade.id} className="history-item">
            <div className="trade-header">
              <div className="trade-info">
                <div className={`trade-icon ${trade.type === 'Buy' ? 'buy-icon' : 'sell-icon'}`}>
                  {trade.type === 'Buy' ? (
                    <ArrowUpRight className="icon-buy" size={20} />
                  ) : (
                    <ArrowDownRight className="icon-sell" size={20} />
                  )}
                </div>
                <div>
                  <div className="trade-pair">{trade.pair}</div>
                  <div className="trade-details">{trade.type} • ${trade.amount}</div>
                </div>
              </div>
              <div className="trade-result">
                <div className={`trade-profit ${trade.color === 'green' ? 'positive' : 'negative'}`}>
                  {trade.profit}
                </div>
                <div className="trade-status">{trade.status}</div>
              </div>
            </div>
            <div className="trade-date">{trade.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryScreen;