/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.
  
  Unstable sort.
  
  Time Complexity?
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums = []) {
    // This will iterate through the entire array looking
    // for the smallest number to place at the beginning.
    for (let i = 0; i < nums.length; i++) {
        // This variable will hold the smallest (min) number
        let smallest = i;
        // iterate through the unsorted protion of the array by starting
        // at the index to the right of 'i'
        for (let j = i + 1; j < nums.length; j++) {
            // if a value is less than the min, make 'j' the new min.
            if (nums[j] < nums[smallest]) {
                smallest = j;
            }
        }
        // swap the value at the front of the unsorted array with the 
        // mininum value
        let temp = nums[smallest];
        nums[smallest] = nums[i];
        nums[i] = temp;
    }
    return nums;
}

console.log("numsOrdered")
console.log(numsOrdered)
console.log(selectionSort(numsOrdered))
console.log("numsRandomOrder")
console.log(numsRandomOrder)
console.log(selectionSort(numsRandomOrder))
console.log("numsReversed")
console.log(numsReversed)
console.log(selectionSort(numsReversed))