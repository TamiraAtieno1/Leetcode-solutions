/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * 
 * You must implement a solution with a linear runtime complexity and use only constant extra space.(O(n))
 */

function singleNum(nums){
    const count = new Map();

    // creating a map to store the occurences of each char in the array

    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    // Use forof loop as we don't need to deal with indices

    for (const num of nums) {
        if (count.get(num) === 1){
            return num;
        }
        
    }
}

let nums = [2, 2, 1]

console.log(singleNum(nums))