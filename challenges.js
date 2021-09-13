/*-----------------------------------------------------------------------------
Challenge: 01 - twoSum

Difficulty - Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.  Name the function twoSum.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

The indices must be returned in the same relative order that they appear within the array.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length 
Only one valid answer exists.

-----------------------------------------------------------------------------*/
// Your solution for 01- here:
// [0,1,3,7,5]
// i loop 0
  // j loop 1, 3, 7, 5
// i loop 1
  // j loop 3, 7, 5
// target = 4 
// 1,2
function twoSum(nums,target){
  for( let i = 0; i< nums.length; i++ ){
    for( let j=i+1; j< nums.length; j++){
      if (nums[i]+nums[j] === target){ 
        return [i,j]
      }
    }   
  }
}

// [0,1,3,7,5]
// target 4
function twoSum(nums, target) {
  let vals = {}
  for (let i=0; i< nums.length; i++) {
    if (target - nums[i] in vals){
      return [vals[target-nums[i]], i]
    } else {
      vals[nums[i]] = i
    }
  }
}


/*-----------------------------------------------------------------------------
Challenge: 02 - compareTriplets

Difficulty - Easy

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = [a[0], a[1], a[2]], and the rating for Bob's challenge is the triplet b = [b[0], b[1], b[2]].

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Example

a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.

Input Format

The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

Constraints
1 ≤ a[i] ≤ 100
1 ≤ b[i] ≤ 100

Sample Input 0
5 6 7
3 6 10

Sample Output 0
1 1

Explanation 0
In this example, let's compare each individual score:

a[0] > b[0], so Alice receives a point.
a[1] = b[1], so nobody receives a point.
a[2] > b[2], so Bob receives a point.
Alice's comparison score is 1, and Bob's comparison score is 1. Thus, we return the array [1,1].

Sample Input 1

17 28 30
99 16 8

Sample Output 1
2 1

Explanation 1

Comparing the 0th elements,  so Bob receives a point.
Comparing the 1st and 2nd elements, 28 > 16 and 30 > 8 so Alice receives two points.
The return array is [2,1].


Sample input:
[13,33,56]
[12,53,65]

Result: 
[1,2]
-----------------------------------------------------------------------------*/
// Your solution for 02- here:


function compareTriplets(a, b) {
  let bobScore = 0
  let aliceScore = 0

  for(let i = 0; i < a.length; i++){
    // comparing array a index 0 against array b index of 0 
    if (a[i] > b[i]) {
      aliceScore ++
    } else if (a[i] < b[i]) {
      bobScore ++
    }
  }
  return [aliceScore, bobScore]
}

/*-----------------------------------------------------------------------------

Challenge: 03

Difficulty - Easy

Given a square 2D matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

[[1,2,3],
[4,5,6],
[9,8,9]]

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15-17| = 2.

Function description

Write a function named diagonalDifference that accepts an array.

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

[[11,2,4],
[4,5,6],
[10,8,-12]]

Sample Output

15

Explanation

The primary diagonal is:

11
  5
    -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

    4
  5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15
-----------------------------------------------------------------------------*/
// Your solution for 03- here:

function diagonalDifference(matrix) {
  let sumDiagonalLR = 0
  let sumDiagonalRL = 0
  for(let i = 0; i < matrix.length; i ++) {
    sumDiagonalLR += matrix[i][i]
    sumDiagonalRL += matrix[i][matrix.length - (i + 1)]
  }
  return Math.abs(sumDiagonalLR - sumDiagonalRL)
}

/*-----------------------------------------------------------------------------
Challenge: 04 - plusMinus

Difficulty - Easy

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Create an array to hold the decimal value of each fraction, accurate to 6 places after the decimal.

Example
arr = [1,1,0,-1,-1]

There are 5 elements, two positive, two negative and one zero. Their ratios are 2/5 (0.400000), 2/5 (0.400000), and 1/5 (0.200000).

The function plusMinus should return an array like this:

[0.400000, 0.400000, 0.200000]

-----------------------------------------------------------------------------*/
// Your solution for 04- here:

function plusMinus(nums) {
  let positiveNum = 0
  let negeativeNum = 0
  let zero = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positiveNum += 1
    } else if (nums[i] < 0){
      negeativeNum += 1
    } else zero += 1
    
  }
  return [(positiveNum / nums.length).toFixed(6), (negeativeNum/ nums.length).toFixed(6), (zero/nums.length).toFixed(6)]
}

/*-----------------------------------------------------------------------------
Challenge: 05 - staircase

Difficulty - Easy

This is a staircase of size n = 4:

[
'   #',
'  ##',
' ###',
'####',
]

Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a function named staircase that returns a staircase of size n.

Input Format

A single integer n denoting the size of the staircase.

Output Format

Return an array containing a staircase of size n using # symbols and spaces.

Note: The last line must have 0 spaces in it.

Sample Input
6 

Sample Output

[
'     #',
'    ##',
'   ###',
'  ####',
' #####',
'######'
]

Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height 6 and width of 6.

-----------------------------------------------------------------------------*/
// Your solution for 05- here:

function staircase(n){
  let stairs = []
  for (let i = 1; i <= n; i++){
    stairs.push(' '.repeat(n-i) + '#'.repeat(i))
  }
  return stairs
}

/*-----------------------------------------------------------------------------
Challenge: 06 - miniMaxSum

Difficulty - Easy

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values within an array.

Example:
arr = [1,3,5,7,9]

The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24 . The function returns [16,24].

Input Format:
An array of 5 integers.

Sample Input
[1,2,3,4,5]

Sample Output
[10,14]

Explanation

The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

Sum everything except 1, the sum is 14.
Sum everything except 2, the sum is 13.
Sum everything except 3, the sum is 12.
Sum everything except 4, the sum is 11.
Sum everything except 5, the sum is 10.

-----------------------------------------------------------------------------*/
// Your solution for 06- here:

function miniMaxSum(array) {
  let minNum = Math.min(...array)
  let maxNum = Math.max(...array)
  let sum = 0
  array.forEach(num => {
    sum += num
  })
  return [sum-maxNum, sum-minNum] 
}
// function miniMaxSum(array) {
//   let withOutFive = array[0] + array[1] + array[2] + array[3];
//   let withOutFour = array[0] + array[1] + array[2] + array[4];
//   let withOutThree = array[0] + array[1] + array[3] + array[4];
//   let withOutTwo = array[0] + array[2] + array[3] + array[4];
//   let withOutOne = array[4] + array[1] + array[2] + array[3];

//   let longArray = [withOutFive, withOutFour, withOutThree, withOutTwo, withOutOne];
//   console.log(longArray);
//   console.log();
//   return [Math.min(...longArray), Math.max(...longArray)]
// }

// function miniMaxSum(arr) {
//   let max = -Infinity;
//   let min = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if ( i != j ) {
//         sum += arr[j];
//       }
//     }
//     if (sum < min) min = sum;
//     if (sum > max) max = sum;
//   }
//   return [min, max]
// } 


/*-----------------------------------------------------------------------------
Challenge: 07 - birthdayCakeCandles

Difficulty - Easy

You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles.  Write a function named birthdayCakeCandles that returns the count of tallest candles.

Example

[4,4,1,3]

The maximum height candles are 4 units high. There are 2 of them, so return 2.

Input Format

An array of integers

Sample Input
[3,2,1,3]

Sample Output
2

Explanation

Candle heights are 3, 2, 1, and 3. The tallest candles are 3 units, and there are 2 of them.

-----------------------------------------------------------------------------*/
// Your solution for 07- here:
function birthdayCakeCandles(arr){
  canHeight = Math.max(...arr)
  let totalCan = arr.filter((c)=> c == canHeight)  
  return totalCan.length
}

// function birthdayCakeCandles(candles) {
//   let tallestCandle = 0
//   let numTallest = 0
//   candles.forEach(candle => {
//     if (candle === tallestCandle) {
//       numTallest++
//     } else if (candle > tallestCandle) {
//       tallestCandle = candle
//       numTallest = 1
//     }
//   })
//   return numTallest
// }