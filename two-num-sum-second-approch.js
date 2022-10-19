const nums = [1,2,3,4,5,6];
const target = 9;
 var TwoNumSum = (nums,target)=>{
    // take first element
    for(var i = 0;i<=nums.length-1;i++){
        // subtract first element from target
        var res = target - nums[i];
        // check the second element is in array and the second element index will not same to the first elemnet
        if(res == nums.find(f=>f==res) && i != nums.findIndex(f=>f==res)){
            console.log([i,nums.findIndex(f=>f==res)]);
            // return the indexes
            return [i,nums.findIndex(f=>f==res)]
        }
    }
 }

 TwoNumSum(nums,target);

 /*
 Runtime = 1845 ms
 Memory = 44.8 MB
 */