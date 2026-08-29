
// Problem - 1 

/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}



// problem - 2

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    return Math.max(...nums);
}



// problem - 3

/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}



// problem - 4

/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}



// problem - 5

/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
    const matches = str.toLowerCase().match(/[aeiou]/g);
    return matches ? matches.length : 0;
}



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



// problem - 7

/**
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
    return arr.flat(Infinity);
}



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



// problem - 10 

/**
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
    return structuredClone(obj);
}





