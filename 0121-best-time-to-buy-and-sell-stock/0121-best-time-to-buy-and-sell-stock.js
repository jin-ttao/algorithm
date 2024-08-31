/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices == null || prices.length <= 1) return 0;
    
    let minPriceBuy = prices[0];
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        minPriceBuy = Math.min(minPriceBuy, prices[i]);
        profit = Math.max(profit, prices[i] - minPriceBuy);
    }
    
    return profit;
};
