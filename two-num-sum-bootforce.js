const nums = [1,2,3,4,5,6];
const target = 9
// function to check sum
var sumOftwoNums = (nums,target)=>{
    // first for loop to consider a element 
    for(var i = 0; i <= nums.length-1;i++){
        // second for loop to check with earch element 
        for(var j = i+1; j<=nums.length-1;j++){
            // check sum is equal to target or not
            if(nums[i]+nums[j] == target){
                console.log([i,j]);
                // return the element indexes
                return [i,j];
            }
        }
    }
}

sumOftwoNums(nums,target);

/*
Time complaxity = O(n^2);
Runtime = 147 ms
Memory = 43.3 MB
*/