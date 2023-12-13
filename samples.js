// const fs = require('fs');

// const printHelloWorldFromFile = () => {
//   try {
//     const fileContent = fs.readFileSync('yourFileName.txt', 'utf-8');
//     for (let i = 0; i < 5; i++) {
//       console.log(fileContent);
//     }
//   } catch (error) {
//     console.error('Error reading the file:', error.message);
//   }
// };
// printHelloWorldFromFile();

// var numbers = [9, 2, 7, 1, 1, 5];

// var maxNumber = numbers.reduce((max, current) => {
//   console.log('max', max);
//   console.log('current', current);
//   return current > max ? current : max;
// });

// console.log(maxNumber); // Output: 9

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// let res = twoSum([2, 3, 4, 5, 6], 10);
// console.log(res);

// function merge(nums1, m, nums2, n) {
//   let index1 = m - 1; // Index of the last element in nums1
//   let index2 = n - 1; // Index of the last element in nums2
//   let mergedIndex = m + n - 1; // Index of the last position in the merged array

//   console.log('index1', index1); // 2
//   console.log('index2', index2); // 2
//   console.log('mergedIndex', mergedIndex); // 5

//   // Continue merging until there are no more elements in nums2
//   while (index2 >= 0) {
//     // Compare elements from both arrays and place the larger one at the end of nums1
//     if (index1 >= 0 && nums1[index1] > nums2[index2]) {
//       nums1[mergedIndex] = nums1[index1];
//       index1--;
//     } else {
//       nums1[mergedIndex] = nums2[index2];
//       index2--;
//     }
//     console.log('nums1', nums1);
//     //console.log('nums2', nums2);
//     // Move to the next position in the merged array
//     mergedIndex--;
//   }
// }

// const nums1 = [1, 10, 17, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;

// merge(nums1, m, nums2, n);

// console.log(nums1);
// Output: [1, 10, 17, 3, 5, 6];

// const nums1 = [1, 10, 17, 3, 5, 6];
// const res = nums1.sort((a, b) => b - a);
// console.log(res);

// function mergeArrays(arr1, arr2) {
//   // Concatenate the two arrays
//   const mergedArray = [...arr1, ...arr2];
//   //arr1.concat(arr2);

//   // Use the Array.sort() method to sort the merged array in ascending order
//   mergedArray.sort((a, b) => a - b);

//   return mergedArray;
// }

// // Example usage:
// const array1 = [3, 8, 1, 5];
// const array2 = [7, 2, 4, 6];

// const result = mergeArrays(array1, array2);
// console.log(result);
// // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// const mergeArray = (arr1, arr2) => {
//   const merged = arr1.concat(arr2);
//   return merged.sort((a, b) => a - b);
// };
// console.log(mergeArray([3, 6, 9, 3, 2], [10, 19]));

// move smallest left
// const bubbleSort = () => {
//   const sortArray = [4, 5, 2, 6, 8, 7, 1];
//   console.log(`Start - ${sortArray}`);
//   for (index = 0; index < sortArray.length; index++) {
//     for (
//       rightOfIndex = index + 1;
//       rightOfIndex < sortArray.length;
//       rightOfIndex++
//     ) {
//       if (sortArray[index] > sortArray[rightOfIndex]) {
//         const temp = sortArray[index];
//         sortArray[index] = sortArray[rightOfIndex];
//         sortArray[rightOfIndex] = temp;
//       }
//     }
//     console.log(`Pass ${index} - ${sortArray}`);
//   }
// };

// bubbleSort();

/*

Start - 4,5,2,6,8,7,1
Compare 4 + 5, leave
Compare 4 + 2 swap
2, 5, 4, 6, 8, 7, 1
Compare 2 + 6 leave
Compare 2 + 8 leave 
Compare 2 + 7 leave
Compare 2 + 1 swap
Result 1,5,4,6,8,7,2
Pass 0 - 1,5,4,6,8,7,2 

Compare 5 + 4 swap 
1,4,5,6,8,7,2 
1,2,5,6,8,7,4

etc

Pass 1 - 1,2,5,6,8,7,4
Pass 2 - 1,2,4,6,8,7,5
Pass 3 - 1,2,4,5,8,7,6
Pass 4 - 1,2,4,5,6,8,7
Pass 5 - 1,2,4,5,6,7,8
Pass 6 - 1,2,4,5,6,7,8

*/

//const array = [5, 2, 8, 1, 4];

// // For numbers
// const ascendingNumbers = array.slice().sort((a, b) => a - b);
// console.log(ascendingNumbers); // Output: [1, 2, 4, 5, 8]

// // For strings
// const ascendingStrings = array.slice().sort();
// console.log(ascendingStrings); // Output: [1, 2, 4, 5, 8]

// Note: The use of slice() is to create a shallow copy of the array,
// ensuring that the original array is not modified. If you want to sort the
// array in-place, you can omit slice().

// Insertion Sort
// 2 Arrays, sorted (left), unsorted (right)
// Set market between the 2 arrays at index +1
// compare next elements in unsorted array and keep shifting elements right until elements is in right
// position in sorted array
// const insertionSort = () => {
//   const arrayToSort = [5, 3, 8, 2, 1];
//   for (let index = 1; index < arrayToSort.length; index++) {
//     let nextUnsortedElement = arrayToSort[index]; // select first unsorted element
//     let indexSortedArray = index - 1; // start of sorted array

//     // prevent index OOB error indexSortedArray >= 0
//     while (
//       indexSortedArray >= 0 &&
//       arrayToSort[indexSortedArray] > nextUnsortedElement // compare item to item on left
//     ) {
//       arrayToSort[indexSortedArray + 1] = arrayToSort[indexSortedArray]; // shift right until in correct position
//       indexSortedArray--;
//     }

//     arrayToSort[indexSortedArray + 1] = nextUnsortedElement;
//   }
//   console.log('arrayToSort', arrayToSort);
//   return arrayToSort;
// };

// insertionSort();

const isPalindrome = () => {
  const str = 'heh';
  return str === [...str].reverse().join('');
};

console.log('isPalindrome', isPalindrome());

const findMaxNumber = () => {
  const arr = [2, 3, 8, 5];
  return Math.max(...arr);
};

console.log('findMaxNumber', findMaxNumber());

const filterEvenNumbers = () => {
  const arr = [2, 3, 8, 5];
  return arr.filter((x) => x % 2 == 0);
};

console.log('filterEvenNumbers', filterEvenNumbers());
