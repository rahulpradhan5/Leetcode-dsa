const nums = [1,4,5,6,1];
target = 9;
var TwoNumSum = ()=>{
    const hasmap = new Map();
    for(var i = 0; i<= nums.length-1;i++){
        const firstNum = nums[i];
        const secondNum = target-nums[i];
        if(hasmap.has(secondNum)){
            return [i,hasmap.get(secondNum)];
        }
        hasmap.set(firstNum,i);
    }
}