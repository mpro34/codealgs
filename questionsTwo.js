/* 1. Sum of Two Values
 * A. Given an array of integers and a value, determine if there are any two integers in the array which sum equal to the given value.
 * B. Assuming that values in the array can be equal to target, 0, less than 0 and greater than the target. Use each
 * value in the array as the CompKey which is equal to the target - current iterated value, then we need to iterate
 * through rest of the array and find the CompKey, then add result to output arr. Else return empty array. 
 * /
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
