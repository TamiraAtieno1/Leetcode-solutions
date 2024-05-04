/**
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 */

function duplicateNum(nums){
    const counts = new Map();

     /**
     *  I faced a logic err by placing num === 2 as this did not account for the case where the number appears more than twice,
     * Thus using (>=) accounts for if it appears more than twice
     */


    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);

        if (counts.get(num) >= 2) {
            return true;
        }
    }
    
    // placed here so that after the whole code runs and none appear more than or exactly twice code returns false
    return false;
}

let nums = [1, 2, 3, 1];

console.log(duplicateNum(nums));

// This method has a higher run time because I looped twice in that array

/**
 *     for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    
    /**
     *  I faced a logic err by placing num === 2 as this did not account for the case where the number appears more than twice,
     * Thus using (>=) accounts for if it appears more than twice
     *for (const num of nums) {
        if (counts.get(num) >= 2) {
            return true;
        }
    }
    // placed here so that after the whole code runs and none appear more than or exactly twice code returns false
    return false;
}
     */
    