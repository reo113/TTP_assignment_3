//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
function twoSum(nums, target){ 
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        //if the map has the complement, return the index of the complement and the current index
        let comp = target - nums[i];
        if(map.has(comp)){
            return [map.get(comp), i];
        }
        //if the map does not have the complement, add the current number and index to the map
        map.set(nums[i], i);
    }
    return [];

}
// exports functions to be tested
module.exports = twoSum;