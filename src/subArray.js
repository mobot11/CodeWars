'use strict';
/*jshint esversion: 6 */
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
//
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


//steps

// 1 loop through array,
//2 if arr sub1 is greater than arr sub2, don't add numbers, remove arr sub1
//3 if arr sub1 is less than arr sub2, add numbers
//4 if arr sub3 is less than arr sub4, add number to sum, continue until contiguous order ends, store sum in sum array
//5 map sumArray and return highest value
//6 profit
var testArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var negativeArray = [-2, -2, -2, -2, -2, -2];

var maxSequence = function(arr) {

    var maxCurrent = 0,
        maxGlobal = 0,
        counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter++;
        }
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);

        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent
        }
    }
    if (counter === arr.length) {
        maxGlobal = 0;
    }
    return maxGlobal;
}

console.log(maxSequence(negativeArray));
