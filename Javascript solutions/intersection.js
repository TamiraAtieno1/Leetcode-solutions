/**
 * Given two integer arrays nums1 and nums2, return an array of their 
   intersection
   Each element in the result must be unique and you may return the result in any order.
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(num1, num2){
    let numArray = [];
    for (let num of num1) {
      if (num2.incudes(num1) && ! numArray.includes(num1)) {
        numArray.push(num)
      }
    }
    return numArray
}