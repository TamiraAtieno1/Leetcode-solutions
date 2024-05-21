// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
/**
 * We can loop through s to check for the non repeating character
 * we can map through all the characters in s and store them somewhere
 * the we can proceed to check the map for any unique characters
 */

function firstUniqueChar(s){
    const counts = new Map();

    // creating a map to store the occurences of each character in the object s

    for (const char of s) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }

    /**
     * this loop iterates through the char in s
     * then uses the counts.get to get the counts of each of the characters stored in the map
     * if its count is equals to one it returns it's position in the string s
     */

    for (let i = 0; i < s.length; i++) {
        if (counts.get(s[i]) === 1) {
            return i;
        }
        
    }

    // if there's no unique character it returns -1

    return -1;
};

let s = "leetcode"

console.log(firstUniqueChar(s))

