
// Problem - 1 

/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 5ti Example run kore dekhar jonno
// console.log(reverseString("hello"));                  // Output: olleh
// console.log(reverseString("JavaScript"));             // Output: tpircSavaJ
// console.log(reverseString("Madam In Eden Im Adam"));  // Output: madam mI nedE nI madaM
// console.log(reverseString("12345!@#$"));              // Output: $#@!54321
// console.log(reverseString("A"));                      // Output: A


// problem - 2

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    return Math.max(...nums);
}

// 5ti Example run kore dekhar jonno
// console.log(findMax([3, 7, 2, 9, 5]));          // Output: 9
// console.log(findMax([-1, -5, -3, -9]));         // Output: -1 (Negative numbers)
// console.log(findMax([42]));                     // Output: 42 (Single element)
// console.log(findMax([10, 20, 30, 20, 10]));     // Output: 30 (Duplicate values)
// console.log(findMax([0, 100, 50, 99]));         // Output: 100


// problem - 3

/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 5ti Example
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello"));   // Output: false
// console.log(isPalindrome("madam"));   // Output: true
// console.log(isPalindrome("level"));   // Output: true
// console.log(isPalindrome("world"));   // Output: false


// problem - 4

/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// 5ti Example
// console.log(sumArray([10, 20, 30, 40])); // Output: 100
// console.log(sumArray([1, 2, 3, 4, 5]));   // Output: 15
// console.log(sumArray([-5, 5, 10]));       // Output: 10
// console.log(sumArray([42]));              // Output: 42
// console.log(sumArray([]));                // Output: 0



// problem - 5

/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
    const matches = str.toLowerCase().match(/[aeiou]/g);
    return matches ? matches.length : 0;
}

// 5ti Example
console.log(countVowels("javascript"));        // Output: 3 (a, a, i)
console.log(countVowels("hello world"));       // Output: 3 (e, o, o)
console.log(countVowels("AEIOU"));             // Output: 5 (Capital vowels)
console.log(countVowels("rhythm"));            // Output: 0 (No vowels)
console.log(countVowels("Beautiful Day"));     // Output: 6 (e, a, u, i, u, a)

