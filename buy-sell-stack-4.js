var prices = [3,3,5,0,0,3,1,4];
var maxProfit = function(prices) {
    var min_price1 = prices[0];
    var max_profit1 = 0;
    var min_price2 = prices[0];
    var max_profit2 = 0;
    for(var i = 0; i < prices.length;i++){
        min_price1 = Math.min(prices[i],min_price1);
        max_profit1 = Math.max(max_profit1,(prices[i] - min_price1));
        //find minmum price from perivious profit and corrent no
        min_price2 =Math.min(min_price2,prices[i]-max_profit1);
        max_profit2 = Math.max(max_profit2,prices[i] - min_price2)
    }
    console.log(max_profit2);
    return max_profit2
  };
  maxProfit(prices);
  /*
  time complaxity O(n);
  space complaxity contsant
  */