/**
 * Given a string s, reverse only all the vowels in the string and return it.
   The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once
 */
  // helper functions
   function reverseVowels(s){
    // Creating a Set to store all possible outcomes of the vowels both capital and small
    const vowels = new Set (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    //  split function separates the string into an array
    let sArray = s.split("");

    //  create the pointers for left and right of the array
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      // move the left pointer when vowel is found
      while( left < right && !vowels.has(sArray[left])){
        left++
      }

      // move thr right pointer back when vowel found
      while( left < right && !vowels.has(sArray[right])){
        right--
      }

      if (left < right) {
        [sArray[left], sArray[right] = sArray[right], sArray[left]];
        left++;
        right--;
      }
    }

    return sArray.join('');
   }