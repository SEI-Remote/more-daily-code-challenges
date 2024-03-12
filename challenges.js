/*-----------------------------------------------------------------------------
Challenge: 01 - twoSum

Difficulty - Easy

Prompt:

- Write a function called twoSum that takes an array of numbers and a target number
  and returns the indeces of the two numbers in the array that add up to the target. 
- Indices must be returned in the same relative order they appear within the array
- You may not use the same element twice, and if no two numbers add up to the 
  target, return the string 'No Sum'

Examples:

twoSum([2,7,11,15], 9) //=> [0,1]
twoSum([3,2,4], 6) //=> [1,2]
twoSum([8,7], 16) //=> 'No Sum'
-----------------------------------------------------------------------------*/
// Your solution for 01- here:



/*-----------------------------------------------------------------------------
Challenge: 02 - compareTriplets

Difficulty - Easy

Prompt:

Alice and Bob each created one problem for HackerRank. A reviewer rates the two
challenges, awarding points on a scale from 1 to 100 for three categories:
problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = [a[0], a[1], a[2]], 
and the rating for Bob's challenge is the triplet b = [b[0], b[1], b[2]].

Your task is to find their comparison points by comparing a[0] with b[0], 
a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

- Write a function called compareTriplets that accepts two arrays and returns
  an array of the respective comparison points of those two arrays.
- The returned array should return in the order of [Alice's points, Bob's points]

Examples:

compareTriplets([1, 2, 3], [3, 2, 1]) //=> [1, 1]
compareTriplets([5, 6, 7], [3, 6, 10]) //=> [1, 1]
compareTriplets([17, 28, 30], [99, 16, 8]) //=> [2, 1]
-----------------------------------------------------------------------------*/
// Your solution for 02- here:



/*-----------------------------------------------------------------------------

Challenge: 03 - diagonalDifference

Difficulty - Easy

Prompt:

- Write a function called diagonalDifference that accepts an array of 
  three arrays (a square 2D matrix) and returns the absolute difference 
  between the sum of its diagonals. 

Given the square matrix below:

[[1,2,3],
[4,5,6],
[9,8,9]]

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15-17| = 2.

Example:

diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]]) // => 15
-----------------------------------------------------------------------------*/
// Your solution for 03- here:



/*-----------------------------------------------------------------------------
Challenge: 04 - plusMinus

Difficulty - Easy

Prompt:

- Write a function called plusMinus that accepts an array of numbers and returns an array of the ratios of its elements that are positive, negative, and zero (as strings).
- The ratios should be represented as the decimal value of each fraction, accurate to 6 places after the decimal. 

Example:

plusMinus([1,1,0,-1,-1]) //=> ['0.400000', '0.400000', '0.200000']

There are 5 elements, two positive, two negative and one zero. 
Their ratios are 2/5 (0.400000), 2/5 (0.400000), and 1/5 (0.200000).
-----------------------------------------------------------------------------*/
// Your solution for 04- here:



/*-----------------------------------------------------------------------------
Challenge: 05 - staircase

Difficulty - Easy

Prompt:

This is a staircase of size n = 4:

[
'   #',
'  ##',
' ###',
'####',
]

Its base and height are both equal to n. It is drawn using # symbols and spaces. 

- Write a function called staircase that accepts a number (n) and returns a staircase of size n.
- The starcase will be an array of strings.
- The last line must have 0 spaces in it.

Example: 

staircase(6) // =>  
[
'     #',
'    ##',
'   ###',
'  ####',
' #####',
'######'
]
-----------------------------------------------------------------------------*/
// Your solution for 05- here:


/*-----------------------------------------------------------------------------
Challenge: 06 - miniMaxSum

Difficulty - Easy

Prompt:

- Write a function called miniMaxSum that accepts an array of positive numbers and returns the minimum and maximum values that can be calculated by summing exactly four of the five numbers
- Return the minimum and maximum within an array

Examples:
miniMaxSum([1,3,5,7,9]) //=> [16,24]
miniMaxSum([1,2,3,4,5]) //=> [10,14]
-----------------------------------------------------------------------------*/
// Your solution for 06- here:



/*-----------------------------------------------------------------------------
Challenge: 07 - timeConversion

Difficulty - Easy

Prompt:

- Write a function called timeConversion that accepts a string (a time in 12-hour AM/PM format) and returns the same time converted to military (24-hour) time. 
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


Examples:
timeConversion('12:01:00PM') //=> '12:01:00'
timeConversion('12:01:00AM') //=> '00:01:00'
timeConversion('07:05:45PM') //=> '19:05:45'
-----------------------------------------------------------------------------*/
// Your solution for 07- here:



/*-----------------------------------------------------------------------------
Challenge: 08 - gradingStudents

Difficulty - Easy

Prompt: 

HackerLand University has the following grading policy:

- Write a function named gradingStudents that accepts an array of scores and returns the rounded grades.
- Every student receives a grade in the inclusive range of 1 to 100.
- A score of 40 or lower is a failing grade.
- If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
- If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

Examples:

A grade of 84 rounds to 85 (85 - 84 is less than 3)
A grade of 29 does not round (result is less than 38)
A grade of 57 does not round (60 - 57 is 3 or higher)

gradingStudents([73,67,38,33]) //=> [75,67,40,33]
-----------------------------------------------------------------------------*/
// Your solution for 08- here:


/*-----------------------------------------------------------------------------
Challenge: 09 - kangaroo

Difficulty - Easy

Prompt: 

You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

Examples:

kangaroo(0,3,4,2) //=> 'YES'
The two kangaroos jump through the following sequence of locations:
k1 (0, 3, 6, 9, 12)
k2 (4, 6, 8, 10, 12)
It is clear that the kangaroos meet at the same location (number 12 on the number line) after same number of jumps (4 jumps), so we print YES.

kangaroo(0,2,5,3) //=> 'NO
The second kangaroo has a starting location that is ahead (further along the number line) of the first kangaroo's starting location (i.e., x2 > x1). 
Because the second kangaroo moves at a faster rate (meaning v2 > v1) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.
-----------------------------------------------------------------------------*/
// Your solution for 09- here:


/*-----------------------------------------------------------------------------
Challenge: 10 - breakingRecords

Difficulty - Medium

Prompt: 

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season.

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
- Write a function named breakingRecords that accepts an array of scores, and return
  number of times Maria breaks her records for most and least points scored during the season.
- The function should return an array in the shape of [max, min]  

breakingRecords([10,5,20,20,4,5,2,25,1]) //=> [2,4]
breakingRecords([3,4,21,36,10,28,35,5,24,42]) //=> [4,0]
-----------------------------------------------------------------------------*/
// Your solution for 10- here:



/*-----------------------------------------------------------------------------
Challenge: 11-flatten

Difficulty: Intermediate

Prompt:

- Write a function named flatten that accepts a single array that may 
  contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays may be nested at any level.
- If any of the arrays have duplicate values, those duplicate values 
  should be present in the returned array.
- The values in the new array should maintain their ordering, 
  as shown in the examples below.

Hint:

- This assignment provides an excellent opportunity to use recursion 
  (a function that calls itself). You can also solve it by using an inner function.

Examples:

flatten( [1, [2, 3]] );
//=> [1, 2, 3] (a new array) 

flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']

-----------------------------------------------------------------------------*/
// Your solution for 11-flatten here:



/*-----------------------------------------------------------------------------
Challenge: 12-balancedBrackets

Difficulty: Intermediate

Prompt:

- Write a function called balancedBrackets that accepts a single string as an argument.
- The input string is composed entirely of parentheses, brackets, or curly braces, i.e., (), [], or {}. Referred to as "braces" from this point forward.
- The balancedBrackets function should return true if the string's braces are "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them. These examples may explain it best:

Examples:

balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
-----------------------------------------------------------------------------*/
// Your solution for 12-balancedBrackets here:



/*-----------------------------------------------------------------------------
Challenge: 13-isWinningTicket

Difficulty:Intermediate

Prompt:

- Write a function called isWinningTicket that accepts a single array as an argument.
- The input array represents a 'lottery ticket' consisting of one or more nested 2-value arrays. The first value of a nested array will be a string, the second an integer.
- The isWinningTicket function should return true if all of the nested arrays have a character in the string whose numeric character code equals the integer (2nd value).
- If any of the nested arrays have a string where all of the character's character code does not match the integer, then return false.

Hints:

- A character/string can be created from a character code using the String.fromCharCode() class method.
- A character within a string's character code can be obtained using the charCodeAt() string method.

Examples:

isWinningTicket( [ ['ABC', 65] ] ) // => true
isWinningTicket( [ ['ABC', 999], ['XY', 89] ] ) // => false
isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] ) // => true
isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] ) // => false
-----------------------------------------------------------------------------*/
// Your solution for 13-isWinningTicket here:



/*-----------------------------------------------------------------------------
Challenge: 14-getNumForIP

Difficulty: Intermediate

Prompt:

- Write a function called getNumForIP that accepts a single string as an argument.
- The input string is formatted as an IPv4 address used in networking, such as '192.156.99.15'. To the computer, IP addresses are 32-bit binary numbers. However, people usually find it more convenient to work with these numbers as four sets of 8-bit integers in their decimal form. Each set is separated by a '.' character.
- The getNumForIP function should return the numeric value of the string IP address being passed in as an argument.

Hints:

- Each 8-bit number can hold a value between 0 and 255.
- An IP's right most 8-bit number represents how many of 256 raised to the power of 0 (equals 1) there are. The next 8-bit number represents how many of 256 raised to the power of 1 (256) there are, etc. For example, if you took the right-most two 8-bit numbers of the IP address 192.156.99.15, you would have 15 * (256 ** 0), which equals 15, and 99 * (256**1), which equals 25344.
- To compute the numeric value for an IP address, you first compute the value for each of the four 8-bit chunks (as described in the above hint), and add them together!

Examples:

getNumForIP( '0.0.0.1' ) // => 1
getNumForIP( '0.0.2.0' ) // => 512
getNumForIP( '192.156.99.15' ) // => 3231474447
getNumForIP( '10.0.0.1' ) // => 167772161
-----------------------------------------------------------------------------*/
// Your solution for 14-getNumForIP here:



/*-----------------------------------------------------------------------------
Challenge: 15-toCamelCase

Difficulty: Intermediate

Prompt:

- Write a function called toCamelCase that accepts a single string as an argument.
- The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.
- If the string argument does not contain a "_" or a "-", return the same string.

Hints:

- This is a great challenge for using regular expressions combined with the String.replace method.

Examples:

toCamelCase( 'sei' ) // => 'sei'
toCamelCase( 'sei-rocks' ) // => 'seiRocks'
toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
toCamelCase( 'Mama-mia' ) // => 'MamaMia'
toCamelCase( 'A_b_c' ) // => 'ABC'
-----------------------------------------------------------------------------*/
// Your solution for 15-toCamelCase here:



/*-----------------------------------------------------------------------------
Challenge: 16-countTheBits

Difficulty: Intermediate

Prompt:

- Write a function called countTheBits that accepts a single numeric argument that will be an integer.
- The function should return the number of bits set to 1 in the number's binary representation.

Hints:

- We typically work with "decimal" numbers daily. Decimal is "base 10", where there are 10 digits available - 0 thru 9. However, it's binary that computers understand - 1's and 0's. The 1's and 0's are called bits.
- As an example, the decimal value of 13 is represented in binary as 1101. There are 3 one bits and 1 zero bit in the decimal number of 13.
- Carefully read the documentation for the Number.prototype.toString method.

Examples:

countTheBits( 0 ) // => 0
countTheBits( 13 ) // => 3
countTheBits( 256 ) // => 1
countTheBits( 255 ) //=> 8
countTheBits( 65535 ) //=> 16
-----------------------------------------------------------------------------*/
// Your solution for 16-countTheBits here:



/*-----------------------------------------------------------------------------
Challenge: 17-gridTrip

Difficulty: Intermediate

Prompt:

- This challenge uses an imaginary grid where the y coordinate increases when you move up and decreases when you move down. Similarly, the x coordinate increases when you move right and decreases when you move left.
- Write a function called gridTrip that accepts two arguments.
- The first argument is an array containing two integers. The value in the first index of the array represents the starting x position on the grid. The second value in the array represents the starting y position.
- The second argument is a string representing "moves" using the characters 'U', 'D', 'R' & 'L' to mean moving Up, Down, Right & Left, respectively. Each direction character is followed by digits representing how many units to move in that direction. For example, a string of 'D15R2U4' moves down 15 units, right 2 units, and finally, up 4 units from the starting coordinates.
- The direction characters will always be upper case.
- The gridTrip function should return a new array of two integers: the final x position and the final y position. Do not modify the array argument).

Hint:
- Using the String.match method to return an array of regular expression matches can be helpful if you want to break the single string of moves into an array of distinct moves by direction. Be sure to use the global flag, e.g. /cat/g, when defining the regexp.

Examples:

gridTrip( [0, 0], 'U2R1' ) // => [1, 2]
gridTrip( [10, 5], 'D5L15U2' ) //-> [-5, 2]
gridTrip( [100, -22], 'L2L15D50U1D9') //=> [83, -80]
-----------------------------------------------------------------------------*/
// Your solution for 17-gridTrip here:



/*-----------------------------------------------------------------------------
Challenge: 18-addChecker

Difficulty: Intermediate

Prompt:

- Write a function called addChecker that accepts two arguments.
- The first argument is an array containing at least two integers. The integers in the array have been pre-sorted in ascending order.
- The second argument is an integer.
- The addChecker function should return true if there are two integers in the array of integers (first argument) that, when added together, equals the integer passed in as the second argument.
- If there are no two integers in the array with a sum equal to the second argument, addChecker should return false.

Hint:

- An efficient solution can leverage the fact that the integers in the array come sorted for you.

Examples:

addChecker( [1, 2], 3 ) // => true
addChecker( [-3, 2], 9 ) // => false
addChecker( [10, 15, 16, 22], 32 ) // => true
addChecker( [10, 15, 16, 22], 19 ) // => false
-----------------------------------------------------------------------------*/
// Your solution for 18-addChecker here:



/*-----------------------------------------------------------------------------
Challenge: 19-Snail

Difficulty: Difficult

Prompt: 

- Write a function called snail that accepts an n by n array and returns the 
  array elements arranged from outermost elements to the middle element, traveling clockwise.
- The idea is to traverse the 2-d array in a clockwise snailshape pattern.
- An empty matrix will be represented as an empty array inside an array, like so: [[]]

Examples: 

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) //=> [1,2,3,6,9,8,7,4,5]

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) //=> [1,2,3,4,5,6,7,8,9]
-----------------------------------------------------------------------------*/
// Your solution for 19- here:


/*-----------------------------------------------------------------------------
Challenge: 20-totalTaskTime

Difficulty: Difficult

Prompt:

- Write a function called totalTaskTime that accepts two arguments.
- The first argument is an array of integers referred to as a "queue". 
- Each integer in the queue represents a "task" - specifically, the amount of time 
  to complete that task.
- The second argument is an integer representing the number of CPU "threads" 
  available to  process all of the tasks in the queue.
- The totalTaskTime function should return an integer representing the total 
  time it will take to complete all of the tasks in the queue.
- You may mutate the "queue" array (first argument) if you wish.

Hint:

- Solve it with paper and pencil first. Look for patterns and generalize. Pseudocode!

Examples:

totalTaskTime( [], 1 ) // => 0
totalTaskTime( [4, 2, 5], 1 ) // => 11
totalTaskTime( [5, 8], 2 ) // => 8
totalTaskTime( [4, 2, 10], 2 ) // => 12
totalTaskTime( [2, 2, 3, 3, 4, 4], 2 ) //=> 9
totalTaskTime( [5, 2, 6, 8, 7, 2], 3 ) // => 12
-----------------------------------------------------------------------------*/
// Your solution for 20- here:
