/**
 * Stock Trading Profit/Loss Tracker
 * Difficulty: Medium
 *
 * Implement a stock trading system that processes events and calculates profit/loss.
 * Support four event types: BUY, SELL, CHANGE, and QUERY.
 * Track multiple stocks, their purchase prices, quantities, and current market prices.
 *
 * Example 1:
 * Input: ["BUY AAPL 100", "CHANGE AAPL 5", "QUERY"]
 * Output: [500]
 *
 * Example 2:
 * Input: ["BUY AAPL 100", "BUY AAPL 50", "CHANGE AAPL -3", "QUERY"]
 * Output: [-450]
 *
 * Example 3:
 * Input: ["BUY AAPL 100", "SELL AAPL 50", "CHANGE AAPL 10", "QUERY"]
 * Output: [500]
 *
 * Constraints:
 * - Stock symbols are uppercase strings
 * - Quantities are positive integers
 * - Price changes can be positive or negative integers
 * - Cannot sell more shares than you own
 * - Initial stock price is $0 (changes are relative)
 *
 * Target Complexity:
 * Time: O(N) where N is number of events
 * Space: O(S) where S is number of unique stocks
 */

function stockTracker(events) {
  const stockMap = new Map();
  let total = 0;
  const results = [];
  
  for (const event of events) {
    const [action, stock, valueStr] = event.split(' ');
    const value = Number(valueStr);
    
    if (action === "QUERY") {
      results.push(total);
      
    } else if (action === "BUY") {
      stockMap.set(stock, (stockMap.get(stock) || 0) + value);
      
    } else if (action === "SELL") {
      if (stockMap.has(stock)) {
        stockMap.set(stock, stockMap.get(stock) - value);
      }
      
    } else if (action === "CHANGE") {
      if (stockMap.has(stock)) {
        total += stockMap.get(stock) * value;
      }
    }
  }
  
  return results;
}


console.log(stockTracker(["BUY AAPL 100", "CHANGE AAPL 5", "QUERY"]));
// Expected: [500] ✓ (100 shares × $5 = 500)

console.log(stockTracker(["BUY AAPL 100", "BUY AAPL 50", "CHANGE AAPL -3", "QUERY"]));
// Expected: [-450] ✓ (150 shares × -$3 = -450)

console.log(stockTracker(["CHANGE AAPL 10", "BUY AAPL 100", "CHANGE AAPL 5", "QUERY"]));
// Expected: [500] ✓ (100 shares × $5 = 500, the first CHANGE doesn't affect us)

console.log(stockTracker(["BUY AAPL 100", "SELL AAPL 50", "QUERY", "CHANGE AAPL -2", "QUERY"]));
// Expected: [0, -100] ✓ (50 remaining shares × -$2 = -100)

/**
 * Time Complexity: O(N) where N is the number of events
 * - Single pass through all events
 * - Each operation (BUY, SELL, CHANGE, QUERY) is O(1) with Map operations
 *
 * Space Complexity: O(S) where S is the number of unique stocks
 * - stockMap stores quantity for each unique stock symbol
 * - results array stores one entry per QUERY event
 *
 * Pattern: State Management + Hash Map + Cumulative Delta Tracking
 *
 * Key Insight: Track cumulative profit/loss by adding (quantity × price_change)
 * for each CHANGE event. When SELL reduces quantity, future CHANGEs automatically
 * affect fewer shares. No need to track purchase prices or current market prices.
 */