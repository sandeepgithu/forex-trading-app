// src/components/TradeScreen.jsx
import React from 'react';
import { ArrowUpRight, ArrowDownRight, ChevronRight, X, TrendingUp } from 'lucide-react';

const TradeScreen = ({
  selectedPair,
  tradeType,
  amount,
  onTradeTypeChange,
  onAmountChange,
  onPairSelect,
  onClosePair
}) => {
  // Sample related pairs data
  const forexData = [
    { pair: 'EUR/GBP', flag1: '🇪🇺', flag2: '🇬🇧', change: '+30', percentage: '+23.2%', leftPrice: '1478.256369', rightPrice: '1478.256369' },
    { pair: 'USD/JPY', flag1: '🇺🇸', flag2: '🇯🇵', change: '+15', percentage: '+12.5%', leftPrice: '149.234567', rightPrice: '149.456789' },
    { pair: 'GBP/USD', flag1: '🇬🇧', flag2: '🇺🇸', change: '-20', percentage: '-8.3%', leftPrice: '1.267890', rightPrice: '1.268123' },
    { pair: 'AUD/CAD', flag1: '🇦🇺', flag2: '🇨🇦', change: '+45', percentage: '+18.7%', leftPrice: '0.898765', rightPrice: '0.899123' },
  ];

  // Show empty state if no pair is selected
  if (!selectedPair) {
    return (
      <div className="flex-1 overflow-y-auto pb-20 p-4">
        <div className="empty-state">
          <TrendingUp size={64} className="empty-icon" />
          <h2 className="empty-title">Select a Trading Pair</h2>
          <p className="empty-description">Go to Home and tap on any pair to start trading</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto pb-20 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Selected Pair Information */}
        <div className="pair-info-card">
          <div className="pair-header">
            <div className="pair-info">
              <div className="currency-flag">
                <span>{selectedPair.flag1}</span>
                <span className="flag-overlap">{selectedPair.flag2}</span>
              </div>
              <div>
                <h2 className="pair-name-large">{selectedPair.pair}</h2>
                <div className={`change-display ${parseFloat(selectedPair.change) > 0 ? 'positive' : 'negative'}`}>
                  {selectedPair.change} ({selectedPair.percentage})
                </div>
              </div>
            </div>
            <button 
              onClick={onClosePair}
              className="close-button"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Bid/Ask Prices */}
          <div className="price-grid">
            <div className="price-card">
              <div className="price-label">Bid</div>
              <div className="bid-price">{selectedPair.leftPrice}</div>
            </div>
            <div className="price-card">
              <div className="price-label">Ask</div>
              <div className="ask-price">{selectedPair.rightPrice}</div>
            </div>
          </div>
        </div>

        {/* Trading Form */}
        <div className="trade-form">
          <h3 className="form-title">Place Trade</h3>
          
          {/* Buy/Sell Toggle */}
          <div className="trade-type-toggle">
            <button
              onClick={() => onTradeTypeChange('buy')}
              className={`trade-button ${tradeType === 'buy' ? 'buy-active' : 'buy-inactive'}`}
            >
              <ArrowUpRight className="button-icon" size={20} />
              Buy
            </button>
            <button
              onClick={() => onTradeTypeChange('sell')}
              className={`trade-button ${tradeType === 'sell' ? 'sell-active' : 'sell-inactive'}`}
            >
              <ArrowDownRight className="button-icon" size={20} />
              Sell
            </button>
          </div>

          {/* Amount Input */}
          <div className="amount-section">
            <label className="amount-label">Amount (USD)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => onAmountChange(e.target.value)}
              placeholder="Enter amount"
              className="amount-input"
            />
          </div>

          {/* Quick Amount Buttons */}
          <div className="quick-amount-grid">
            {['100', '500', '1000', '5000'].map((val) => (
              <button
                key={val}
                onClick={() => onAmountChange(val)}
                className="quick-amount-button"
              >
                ${val}
              </button>
            ))}
          </div>

          {/* Trade Execution Button */}
          <button
            className={`execute-trade-button ${tradeType === 'buy' ? 'buy-trade' : 'sell-trade'}`}
          >
            {tradeType === 'buy' ? 'Open Buy Position' : 'Open Sell Position'}
          </button>
        </div>

        {/* Related Trading Pairs */}
        <div className="related-pairs-section">
          <h3 className="section-title">Related Trading Pairs</h3>
          <div className="related-pairs-list">
            {forexData
              .filter(item => item.pair !== selectedPair.pair)
              .slice(0, 4)
              .map((item, idx) => (
              <div
                key={idx}
                onClick={() => onPairSelect(item)}
                className="related-pair-item"
              >
                <div className="related-pair-info">
                  <div className="currency-flag-small">
                    <span>{item.flag1}</span>
                    <span className="flag-overlap-small">{item.flag2}</span>
                  </div>
                  <div>
                    <div className="related-pair-name">{item.pair}</div>
                    <div className={`related-pair-change ${parseFloat(item.change) > 0 ? 'positive' : 'negative'}`}>
                      {item.change} ({item.percentage})
                    </div>
                  </div>
                </div>
                <div className="related-pair-price">
                  <div className="related-price">{item.leftPrice}</div>
                  <ChevronRight size={20} className="chevron-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeScreen;