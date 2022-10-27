var prices = [1,2];
var maxProfit = function(prices) {
    var min_price = prices[0];
    var max_profit = 0;
    for(var i = 0; i < prices.length;i++){
        min_price = Math.min(prices[i],min_price);
        max_profit = Math.max(max_profit,(prices[i] - min_price));
    }
    console.log(max_profit);
    return max_profit
  };
  maxProfit(prices);
  /*
  time complaxity O(n);
  space complaxity contsant
  */