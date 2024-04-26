// Given two strings needle and haystack, 
// return the index of the first occurrence of needle in haystack, 
// or -1 if needle is not part of haystack.

// if haystack is sadbutsad then needle would be sad(first occurence of needle in haystack would be 0)
// if needle was look then return -1 coz it's not part of the haystack.

// 
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    let hLen = haystack.length;
    let nLen = needle.length;
    let nIndex = 0

    for (let i = 0; i < hLen; i++) {
        // basically seeks to eliminate needle if it's first character doesn't match the haystack's first character
        // if the first character of haystack is the same as the one at the begining of nLen(which is nIndex) inrement the needle Index
        if (haystack.charAt(i) === needle.charAt(nIndex)) {
            nIndex++;
            // else if the needle doesn't appear at the beginning of the haystack you adjust the i to start from the next index
            //  after the place the mismatch occured. start from the next index after the mismatched one to allow for iteration in all the characters in the haystack.
        } else {
            i = i - nIndex;

            // restate that needle index should start from 0

            nIndex = 0
        }
        // checking if needleIndex has reached the nLen
        // nLen+1 gets rid of 0 based system and gives it in 1 based system easier to understand
        if (nIndex === nLen){

            return i - nLen + 1;
        }

    }

    return -1;

};

let haystack = "butsad";
let needle = "sad"

console.log(strStr(haystack, needle));


// let haystack = "sadbutsad";
// let needle = haystack.substring(0,3);

// console.log(needle)