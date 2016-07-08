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


// var MaxSequence = function(array) {
//   this.numberArray = [];
//   this.arrayLength = array.length;
//   this.counter = 0;
//
//   function helperFunction(numberArray, finalSums, counter) {
//     console.log(this.numberArray);
//
//
//   }
//
// };



var maxSequence = function(arr) {
    var numberArray = arr;
    var sumArray = [];

    function findSequence(arr1, arr2) {
        var sum = 0;
        var max = 0;
        var copyArray = numberArray;
        if (arr1.length === 1) {
            max = Math.max.apply(Math, arr2);
            console.log(max);
            return max;
        }

        if (arr1[0] > arr1[1] || arr[0] === arr[1]) {
            arr1.shift();

        } else {
            for (var i = 0; i < copyArray.length; i ++) {
                if(copyArray[i] > copyArray[i+1]) {
                    arr1.shift();
                }
                else if(copyArray[i] < copyArray[i+1]) {
                    if (!sum) {
                        sum = copyArray[i] + copyArray[i+1];
                        arr1.shift();
                    } else {
                        sum += copyArray[i+1];
                        arr1.shift();
                    }

                }
            }
            arr2.push(sum);

        }

      findSequence(arr1, arr2);

    }

};

console.log(maxSequence(testArray));
