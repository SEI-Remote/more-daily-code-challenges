function getRandomNum() {
  return (Math.floor(Math.random()*13)+1)
}
console.log(getRandomNum())
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

// function twoSum(nums, target) {
//   let vals = {}
//   for (let i=0; i < nums.length; i++) {
//     console.log(vals, 'vals')
//     if (target - nums[i] in vals) {
//       return [vals[target - nums[i]], i]
//     } else {
//       vals[nums[i]] = i
//     }
//   }
// }

function twoSum(arr, int) {
  for (let i = 0; i < arr.length; i++ ) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i]+arr[j] === int) {
        return [i,j]        
      }
    }
  }
}

// console.log(twoSum([4, 5, 1, 3, 8], 11))

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
For elements 0, Bob is awarded a point because b[0] > a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.


Constraints
1 ≤ a[i] ≤ 100
1 ≤ b[i] ≤ 100

Sample Input 0
[5, 6, 7]
[3, 6, 10]

Sample Output 0
[1, 1]

Explanation 0
In this example, let's compare each individual score:

a[0] > b[0], so Alice receives a point.
a[1] = b[1], so nobody receives a point.
a[2] > b[2], so Bob receives a point.
Alice's comparison score is 1, and Bob's comparison score is 1. Thus, we return the array [1,1].

Sample Input 1

[17, 28, 30]
[99, 16, 8]

Sample Output 1
[2, 1]

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

function compareTriplets(arrOne, arrTwo) {
  let arrOneTotal = 0
  let arrTwoTotal = 0
  for (let i=0; i < arrOne.length; i++) {
    if (arrOne[i] > arrTwo[i]) {
      arrOneTotal += 1

    }
    else if (arrOne[i] < arrTwo[i]) {
      arrTwoTotal += 1
    }
  }
  return [arrOneTotal, arrTwoTotal]
}

// console.log(compareTriplets([13,33,56], [12,53,65]))