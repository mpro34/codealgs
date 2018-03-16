//CodeRust Interview Questions - Arrays
/* REVIEW Using Pointers to loop through arrays, Binary Search with pointers, Kadane's Alg for Subarrays, Quick Sort with pivot points.

/* 1. Binary Seach
  * A. Given a sorted array of integers, return the index of the given key. Return -1 if not found.
  * B. Get the middle value of the array, if key > middle value, then slice the top half of the array, else slice the lower half of the arary. Repeat this process on the newly sliced arrays, until the size of the array <= 1.
*/
let binarySearch = function(arr, key) {
  let retVal = -1;
  while (arr.length > 1) {
    let midVal = arr[(arr.length-1)/2];
    if (key === arr[midVal]) {
      return midVal;
    }
    if (key > arr[midVal]) {
      arr = arr.slice(midVal);
    }
    else {
      arr = arr.slice(0, midVal-1);
    }
    retVal = midVal;
  }
  return retVal;
}
//  Time - O(n/2)
//  Space - O(1)
/* TODO NOTES - Can use a recursive solution here to recurse if the key is > or < the midValue. Use High and Low variables to signify the location of a value */

/* 2. Max in Sliding Window
  * A. Given a large array of integers and a window of size 'w', find the current maximum in the window as the window slides through the entire array.
  * B. Iterate through input array and slice array from i to i+w. Within each slice, push the max to a result array. Return result
*/
let maxWindowSlide = function(arr, w) {
  let result = [];
  for (let i=0; i<arr.length; ++i) {
    let _window = arr.slice(i, i+w);
    result.push((Math.max(_window)));
  }
  return result;
}
//  Time - O(3n)
//  Space - O(n/3)
/* TODO NOTES - Use a Linked List here to push and pop the current max, then print*/

/* 3. Search Rotated Array
  * A. Search a given number in a sorted array that has been rotated by some arbitrary number.
  * B. Normal Binary search, but the given array will be rotated, so slightly different, but same implementation. Start with a low and high vars pointing to the start and end of the input array. A mid value is equal to start + floor((start+end)/2). If the mid is equal to the key, return the midpoint. Else if the key > mid, then start = mid and end stays the same. If key < mid, then start stays the same and end = mid - 1. Keep repeating until length of array <= 1.
*/
let binarySearchRecurse(arr, start, end, key) {
  let mid = start + Math.floor((end - start) / 2);
  if (arr[mid] === key) {
    return mid;
  }
  if (start === end) {
    return -1;
  }
  if (key > arr[mid]) {
    return binarySearchRecurse(arr, mid + 1, end, key);
  }
  else if (key < arr[mid]) {
    return binarySearchRecurse(arr, start, mid - 1, key);
  }
  return -1;
}
let searchRotatedArray = function(arr, key) {
  return binarySearchRecurse(arr, 0, arr.length-1, key);
}
//  Time - O()
//  Space - O()
/* TODO NOTES - */


/* 4. Smallest Common Number
  * A. Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.
  * B. Use the smallest of the three arrays as the looping term, to decrease amount of loops. Use smallestArray[i] as the target to search the other arrays for. If found, return target, else, continue to next target
*/
let smallestCommon = function(arr1, arr2, arr3) {
  let targetArr = [];
  let compArr1 = [];
  let compArr2 = [];
  //Determine the smallest array
  if (arr1.length <= arr2.length) {
    if (arr1.length <= arr3.length) {
      targetArr = arr1;
      compArr1 = arr2;
      compArr2 = arr3;
    }
    else if (arr3.length < arr1.length) {
      targetArr = arr3;
      compArr1 = arr1;
      compArr2 = arr2;
    }
  }
  else {
    targetArr = arr2;
    compArr1 = arr1;
    compArr2 = arr3;
  }
  let target = 0;

  for (let value of targetArr) {
    target = value;
    if (compArr1.find((el) => el === value) !== undefined &&
        compArr2.find((el) => el === value) !== undefined) {
      return value;
    }
  }
  return -1;
}
//  Time - O(nlogn)
//  Space - O(3n)
/* TODO NOTES - Similar to using start and end, use pointers to the beginning of each array and increment them given conditions. In this case if one of the pointers reaches the end of the array it is pointing to (variable assigned to it). Then for this problem the solution is unknown.*/


/* 5. Rotate Array
  * A. Given an array of integers, rotate the array by 'N' elements.
  * B. Given the number of rotations can be negative or positive, slice the input array based on the n value and if n is - or +. Then once we have two slices concat them back together to form new array and return.
*/
let rotateArray = function(arr, n) {
  let retArr = [];
  let piece = [];
  if (n >= 1) {
    retVar = arr.slice(0, arr.length-1-n);
    piece = arr.slice(arr.length-n, arr.length-1);
    return piece.concat(retVal);
  }
  else {
    retVar = arr.slice(n*-1, arr.length-1);
    piece = arr.slice(0, n*-1);
    return retVar.concat(piece);
  }
}
//  Time - O(n)
//  Space - O(2n)
/* TODO NOTES - Shifting is also viable for this problem.*/


/* 6. Find Low/High Index
  * A. Given a sorted array of integers, return the low and high index of the given key. Return -1 if not found. The array length can be in millions with lots of duplicates.
  * B. Find the low and high indexes separately with two different binary searches. The low index BS will move the high to mid-1 and low to mid+1, whereas the high index BS will move mid-1 (mid > key) and move low mid+1 (mid < key)
*/
let findIndex = function(arr, low, high, key, method) {
  //If method === false, then search for Low Index, Else search for High Index
  if (method) {
    while (high > low) {
      let mid = low + Math.floor((high-low)/2);
      if (arr[mid] <= key) {
        low = mid+1;
      } else if (arr[mid] > key) {
        high = mid-1;
      }
    }
    if (low !== key) {
      return -1;
    } else {
      return low;
    }
  }
  else {
    while (high > low) {
      let mid = low + Math.floor((high-low)/2);
      if (arr[mid] < key) {
        low = mid + 1;
      } else if (arr[mid] >= key) {
        high = mid - 1;
      }
    }
    if (low !== key) {
      return -1;
    } else {
      return low;
    }
  }

}
let findLowHighIndex = function(arr, key) {
  let lowIndex = findIndex(arr, 0, arr.length-1, key, false);
  let highIndex = findIndex(arr, 0, arr.length-1, key, true);
  return [lowIndex, highIndex];
}
//  Time - O(n)
//  Space - O(1)
/* TODO NOTES - Using the high and low pointers are Crucial to implementing a Binary Search */


/* 7. Move zeros to the left
  * A. Given an integer array, move all elements containing '0' to the left while maintaining the order of other elements in the array.
  * B. Have two stacks, one for counting the zeros, one for everything else. Once looped through entire input array, concat the zeros stack in front of the the other stack.
*/
let moveZeros = function(arr) {
  let numStack = [];
  let zeroStack = [];
  for (let num of arr) {
    if (num === 0) {
      zeroStack.push(num);
    }
    else {
      numStack.push(num);
    }
  }
  return zeroStack.concat(numStack);
}
//  Time - O(n)
//  Space - O(2n)
/* TODO NOTES - Using a Read and Write pointer can save on Space, since on need O(1) space to store data for pointer solution! */


/* 8. Find Max Single Cell Profit
  * A. Given a list of stock prices for n days, find the maximum profit with a single buy/sell activity.
  * B. Loop through input profit array and keep track of 2 profit variables, a current buy and a global sell. Use final values in return.
*/
let binarySearch = function(arr) {
  if (arr.length < 2) {
    return;
  }

  let currentProfit = 0;
  let currentBuy = arr[0];
  let globalSell = arr[1];
  let globalProfit = globalSell - currentBuy;

  for (let price of arr) {
    currentProfit = price - currentBuy;
    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = price;
    }
    if (price < currentBuy) {
      currentBuy = price;
    }
  }
  return [globalSell - globalProfit, globalSell];

}
//  Time - O(n)
//  Space - O(1)
/* TODO NOTES - Use Kadane's Alg for max of subarrays, This is a special algorithm that should be memorized! */


/* 9. Implement QuickSort
  * A. Given an integer array, sort it in ascending order using quicksort.
  * B. Select pivot element, then sort both values higher and lower than the pivot element in order, then increment to the next value for the pivot.
*/
let quickSort = function(arr) {
  let pivot = 0;
  for (let i=1; i<arr.length; i++) {
    pivot = arr[i]
    if (arr[i-1] > arr[i]) {
      let temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = arr[i];
    }
    if (arr[i+1] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = arr[i];
    }
  }
  return arr;
}
//  Time - O(n)
//  Space - O(1)
/* TODO NOTES - Quick Sort is choosing a Pivot point and move element < than pivot to left and > than pivot to right, then select another pivot at random or the first element of the new array.*/


/* 10. Merge Overlapping Intervals
  * A. Given an array (list) of intervals as input where each interval has a start and end timestamps. Input array is sorted by starting timestamps. You are required to merge overlapping intervals and return output array (list).
  * B. Input is an Array of Intervals (i.e. [(1, 3), (4, 3), (6, 10)...] ). For each interval in the input array, compare the X to check if that's lower than low, if it is, replace as new low. Compare each Y to check if it's higher than high, if it is, replace as new high. After finished interating, return (low, high).
*/
let mergeIntervals = function(intervals) {
  let low = 0;
  let high = 0;
  for (let interval of intervals) {
    if (interval[0] < low) {
      low = interval[0];
    }
    if (interval[1] > high) {
      high = interval[1];
    }
  }
  return [low, high];
}
//  Time - O(n)
//  Space - O(1)
/* TODO NOTES - If an interval is not within the current interval output, add a new interval to the output (can have multiple intervals in the output, not just one!)*/



/* 11. Sum of Two Values
 * A. Given an array of integers and a value, determine if there are any two integers in the array which sum equal to the given value.
 * B. Assuming that values in the array can be equal to target, 0, less than 0 and greater than the target. Use each
 * value in the array as the CompKey which is equal to the target - current iterated value, then we need to iterate
 * through rest of the array and find the CompKey, then add result to output arr. Else return empty array.
 */
 //Method 1 - Hash Array
 let sumOfValues = function(arr, targetSum) {
   let hashSet = [];
   for (let value of arr) {
     let compKey = targetSum - value;
     if (!hashSet.has(compKey) {
       hashSet.push(value);
     }
     else {
       return true;
     }
   }
   return false;
 }
 //Method 2 - Pointers
 let sumOfValues = function(arr, targetSum) {
  arr.sort(); //This solution RELIES on being a sorted array, since the pointers are moving from higher to lower or lower to higher values!
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[length];
    if (sum === targetSum) {
      return true;
    }
    if (sum < targetSum) {
      start++;
    }
    else {
      end--;
    }
  }
  return false;
 }

 /*
  * Time = O(nlogn)
  * Space = O(1) //Time is Worse than Method 1, but Space is much better.
  * TODO NOTES = Use a Hash Table / Stack here to store values that we have passed through and keeps track of state of
  * the algorithm. Another option is to use pointers and move them from the front and end after comparing the sum of the
  * pointer values being greater to or less than the target sum! Two ways of solving the same problem. This is an
  * important question to know.
  */
