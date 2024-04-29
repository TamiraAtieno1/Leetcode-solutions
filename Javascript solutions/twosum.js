// Given an array of integers nums and an integer target, 
// return indices of the two numbers 
// such that they add up to target.

// SUDO
/**
 * We could loop through the array to check each individual character in the array
 * If a certain number is less than the target significantly we can compare if it adds up to the target when added to another number in the array
 * We can nest another loop to check for other characters apart from i that can be added to make up the target
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums,target){
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return[i, j];
            }
            
        }
        
    }

}


let nums = [2, 7, 11, 15];
let target = 26;

console.log(twoSum(nums, target))