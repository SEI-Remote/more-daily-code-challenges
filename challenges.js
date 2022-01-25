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




/*-----------------------------------------------------------------------------

Challenge: 03 - diagonalDifference

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






/*-----------------------------------------------------------------------------
Challenge: 08 - timeConversion

Difficulty - Easy

Given a time in 12-hour AM/PM format, write a function named timeConversion to convert it to military (24-hour) time.

Note:
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
s = '12:01:00PM'
Result: '12:01:00'.

s = '12:01:00AM'
Result: '00:01:00'.

s = '07:05:45PM'
Result: '19:05:45'
-----------------------------------------------------------------------------*/
// Your solution for 08- here:






/*-----------------------------------------------------------------------------
Challenge: 09 - gradingStudents

Difficulty - Easy

HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 1 to 100.
Any  less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

Examples

grade = 84 rounds to 85 (85 - 84 is less than 3)
grade = 29 do not round (result is less than 38)
grade = 57 do not round (60 - 57 is 3 or higher)

Given the initial value of grades for each of Sam's students, write a function named gradingStudents to return the rounded grades.

Sample Input 

[73,67,38,33]

Sample Output 

[75,67,40,33]

Explanation

Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75 - 73 < 3, the student's grade is rounded to 75.
Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70 - 67 = 3, the grade will not be modified and the student's final grade is 67.
Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40 - 38 < 3, the student's grade will be rounded to 40.
Student 4 received a grade below 38, so the grade will not be modified and the student's final grade is 33.
-----------------------------------------------------------------------------*/
// Your solution for 09- here:





/*-----------------------------------------------------------------------------
Challenge: 10 - kangaroo

Difficulty - Easy

You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

Example
x1 = 2
v1 = 1
x2 = 1
v2 = 2

After one jump, they are both at x = 3, so the answer is YES.


Sample Input 0
0, 3, 4, 2

Sample Output 0
YES

Explanation 0

The two kangaroos jump through the following sequence of locations:

k1 (0, 3, 6, 9, 12)
k2 (4, 6, 8, 10, 12)

It is clear that the kangaroos meet at the same location (number 12 on the number line) after same number of jumps (4 jumps), so we print YES.

Sample Input 1
0, 2, 5, 3

Sample Output 1
NO

Explanation 1

The second kangaroo has a starting location that is ahead (further along the number line) of the first kangaroo's starting location (i.e., x2 > x1). Because the second kangaroo moves at a faster rate (meaning v2 > v1) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.

-----------------------------------------------------------------------------*/
// Your solution for 10- here:






/*-----------------------------------------------------------------------------
Challenge: 11 - breakingRecords

Difficulty - Medium

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
Given the scores for a season, write a function named breakingRecords to determine the number of times Maria breaks her records for most and least points scored during the season.  

Sample Input 0
[10,5,20,20,4,5,2,25,1]

Sample Output 0
[2,4]

Explanation 0

She broke her best record twice and her worst record four times, so we return [2,4] as our answer. Note that she did not break her record for best score when she tied her current record, as her score during that game was not strictly greater than her best record at the time.

Sample Input 1
[3,4,21,36,10,28,35,5,24,42]

Sample Output 1
[4,0]

Explanation 1

She broke her best record four times and her worst record zero times (no score during the season was lower than the one she earned during her first game), so we return [4,0] as our answer.

-----------------------------------------------------------------------------*/
// Your solution for 11- here:

