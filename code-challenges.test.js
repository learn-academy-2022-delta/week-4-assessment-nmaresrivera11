// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

/* Psuedo Code:
- First I need to make a function named delShuff
- Parameters of the function will be an array
- delShuff will need a method to remove the first item from the array (.slice(1))
- delShuff will shuffle content(.Math.floor(Math.random))
- Return a subset of an array with the remaining values indexes shuffled
*/

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('delShuff', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"];
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it('removes the first item from the array and shuffles the remaining content', () => {
      expect(delShuff(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
      expect(delShuff(colors1)).not.toEqual(expect.arrayContaining(["purple"]));
    });
    it('removes the first item from the array and shuffles the remaining content', () => {
      expect(delShuff(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
      expect(delShuff(colors2)).not.toEqual(expect.arrayContaining(["chartreuse"]));

    });
  });
// ReferenceError: delShuff is not defined
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

const delShuff = (array) => {
    let newArray = array.slice(1)
    let reversed = newArray.sort(() => Math.floor(Math.random() - 0.5))
    return reversed
}
// console.log(delShuff(colors1)); // [ 'pink', 'yellow', 'green', 'blue' ]
// console.log(delShuff(colors2)); // [ 'indigo', 'saffron', 'periwinkle', 'aquamarine', 'ochre' ]
// PASS  ./code-challenges.test.js
// delShuff
//   ✓ removes the first item from the array and shuffles the remaining content (1 ms)
//   ✓ removes the first item from the array and shuffles the remaining content


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
/* Psuedo Code:
- First I will create a function named tinyBig
- The functions parameters will be an array
- The function will iterate to select the minimum and maximum number
- It will return the least and greatest value in this order in a new array
*/

// a) Create a test with expect statements for each of the variables provided.

describe("tinyBig", () => {
    it("returns an array of the minimum and maximum numbers in that order", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
      expect(tinyBig(nums1)).toEqual([-8, 90])
      expect(tinyBig(nums2)).toEqual([5, 109])
    })
  })
// ReferenceError: tinyBig is not defined
// Expected output: [-8, 90]
// Expected output: [5, 109]

// b) Create the function that makes the test pass.

const tinyBig = (array) => {
    let max = array[0];
    let min = array [0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i]
        } else if(array[i] > max) {
            max = array[i]
        }
    }
    return [min, max]
}
// console.log(tinyBig(nums1)); // [ -8, 90 ]
// console.log(tinyBig(nums2)); // [ 5, 109 ]
// PASS  ./code-challenges.test.js
// tinyBig
//   ✓ returns an array of the minimum and maximum numbers in that order (1 ms)


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
/* Psuedo Code:
- First I want to name a function noReps
- Then I want the parameters to take in two arrays
- I will declare the (.concat) version of both arrays to be 'together'
- Then I will declare a new variable to use the spread operator to disregard repeating values
- The function noReps will return both testArrays without repeating values
*/

// a) Create a test with an expect statement using the variables provided.
describe("noReps", () => {
    it("returns one array with no duplicate values", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
      expect(noReps(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
  })
// ReferenceError: noReps is not defined
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.

const noReps = (arr1, arr2) => {
    let together = arr1.concat(arr2);
    let unique = [...new Set(together)]
    return unique
}
// console.log(noReps(testArray1, testArray2)); // [ 3, 7, 10, 5, 4, 8,  2, 1 ]
//  PASS  ./code-challenges.test.js
//   noReps
//   ✓ returns one array with no duplicate values (1 ms)