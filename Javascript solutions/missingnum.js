// Given an array nums containing n distinct numbers in the range [0, n]
//  return the only number in the range that is missing from the array.

/**
 * if the numbers in the array were [0, 1, 3, 4, 2]
 * n should be 5 as we have 5 numbers.
 * We are then trying to find the missing number in the range [0, 5] which would be 5
 * So the output should be 5
 */

function missingNum(nums){
    nums.sort(); //arranges number in ascending order

    let missing = nums.length;
    /**
     * we loop through the numbers in the sorted array
     * if statement basically checks if i in the sorted array is not equals to i and if not the number is returned as the output
     */
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            missing = i
        }
        
    }

    return missing;

}

let nums = [0, 1, 3]

console.log(missingNum(nums));