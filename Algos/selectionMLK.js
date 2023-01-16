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
    //variables
    let runner = 0; // this repreents the index
    let minIndex = 0;
    let sortedIndex = null; // collects the sorted index
    //iterate through array
    for (let i = 0; i < nums.length; i++)
        // look for the next min value 
        if (nums[i] < nums[minIndex]) {

        }
    // when we find min value we store it in our min variable 
    // swap with pointer 

    // pointer variable neds to be re-assigned

}