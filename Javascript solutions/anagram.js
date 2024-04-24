/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * for loop to iterate through the characters in s are same as those in t 
 * if else to set conditions
 * 1. if sLen and tLen are not equal FALSE
 * 2. (not so sure yet)
 * 
 * Another method would be to 
 * 1' Use split function to arrange the chars into an array
 * 2. Use sort function to sort the characters in the array alphabetically
 * #. Use join function to change the array back  into a string
 */



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    let sSort = s.split('').sort().join('');
    let tSort = t.split('').sort().join('');
    
    return sSort === tSort;
};

let s = "anagram";
let t = "nagaram";

console.log(isAnagram(s, t));