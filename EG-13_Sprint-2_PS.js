
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
// console.log(countVowels("javascript"));        // Output: 3 (a, a, i)
// console.log(countVowels("hello world"));       // Output: 3 (e, o, o)
// console.log(countVowels("AEIOU"));             // Output: 5 (Capital vowels)
// console.log(countVowels("rhythm"));            // Output: 0 (No vowels)
// console.log(countVowels("Beautiful Day"));     // Output: 6 (e, a, u, i, u, a)


// problem - 6 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// // 5ti Example
// console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
// console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
// console.log(twoSum([3, 3], 6));          // Output: [0, 1]
// console.log(twoSum([1, 5, 3, 7], 8));    // Output: [1, 2]
// console.log(twoSum([-1, -2, -3, -4], -6)); // Output: [1, 3]


// problem - 7

/**
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
    return arr.flat(Infinity);
}

// 5ti Example
// console.log(flattenArray([1, [2, [3, 4], 5]]));        // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([[1, 2], [3, 4]]));           // Output: [1, 2, 3, 4]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]]));    // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([1, 2, 3]));                  // Output: [1, 2, 3]
// console.log(flattenArray([[], [1], [2, [3]], []]));     // Output: [1, 2, 3]

// problem - 8

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const map = {};
    for (let str of strs) {
        const sortedKey = str.split('').sort().join('');
        if (!map[sortedKey]) {
            map[sortedKey] = [];
        }
        map[sortedKey].push(str);
    }
    return Object.values(map);
}

// // 5ti Example
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// console.log(groupAnagrams([""]));
// // Output: [[""]]

// console.log(groupAnagrams(["a"]));
// // Output: [["a"]]

// console.log(groupAnagrams(["listen", "silent", "enlist", "inlets"]));
// // Output: [["listen", "silent", "enlist", "inlets"]]

// console.log(groupAnagrams(["cat", "dog", "tac"]));
// // Output: [["cat", "tac"], ["dog"]]


// problem - 9

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let seen = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// 5ti Example
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
// console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
// console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
// console.log(lengthOfLongestSubstring(""));         // Output: 0 (Empty string)
// console.log(lengthOfLongestSubstring("au"));       // Output: 2 ("au")



// problem - 10 

/**
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
    return structuredClone(obj);
}

// 5ti Example
const original1 = { a: 1, b: { c: 2 } };
console.log(deepClone(original1)); // Output: { a: 1, b: { c: 2 } }

const original2 = { name: "John", address: { city: "Dhaka", zip: 1207 } };
console.log(deepClone(original2)); // Output: { name: 'John', address: { city: 'Dhaka', zip: 1207 } }

const original3 = { items: [1, 2, [3, 4]] };
console.log(deepClone(original3)); // Output: { items: [ 1, 2, [ 3, 4 ] ] }

const original4 = { x: null, y: undefined, z: true };
console.log(deepClone(original4)); // Output: { x: null, y: undefined, z: true }

const original5 = { a: { b: { c: { d: 42 } } } };
console.log(deepClone(original5)); // Output: { a: { b: { c: { d: 42 } } } }



