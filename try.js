var prices = [1,2,3,4,5];
  var maxProfit = function(prices) {
    var profit = 0;
    for(var i = 1; i < prices.length;i++){
        if(prices[i]>prices[i-1]){
            profit +=(prices[i]-prices[i-1]);
        }
    }
console.log(profit);
return profit;
};
maxProfit(prices);