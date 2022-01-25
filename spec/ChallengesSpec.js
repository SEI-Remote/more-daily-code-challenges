describe("01-twoSum", function() {
  it("returns an array", function() {
    expect(Array.isArray(twoSum([2, 7, 11, 15], 9))).toBe(true)
  })
  it("works with positive numbers", function() {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })
  it("works with negative numbers", function() {
    expect(twoSum([-3, -2, 1, 4, 9], 7)).toEqual([1, 4])
  })
})

describe("02-compareTriplets", function() {
  it("returns an array", function() {
    expect(Array.isArray(compareTriplets([5,6,7],[3,6,10]))).toBe(true)
  })
  it("works with positive numbers", function() {
    expect(compareTriplets([5,6,7],[3,6,10])).toEqual([1,1])
  })
  it("works with negative numbers", function() {
    expect(compareTriplets([17,28,30],[99,16,8])).toEqual([2,1])
  })
})

describe("03-diagonalDifference", function() {
  it("returns a number", function() {
    expect(typeof diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]])).toBe('number')
  })
  it("works with positive numbers", function() {
    expect(diagonalDifference([[11,2,4],[4,5,6],[10,8,12]])).toEqual(9)
  })
  it("works with negative numbers", function() {
    expect(diagonalDifference([[11,2,4],[4,-5,6],[10,8,-12]])).toEqual(15)
  })
})

describe("04-plusMinus", function() {
  it("returns an array", function() {
    expect(Array.isArray(plusMinus([1,1,0,-1,-1]))).toBe(true)
  })
  it("returns correct ratios", function() {
    expect(plusMinus([1,1,0,-1,-1])).toEqual(['0.400000', '0.400000', '0.200000'])
  })
  it("correct number of places after decimal", function() {
    expect(plusMinus([1,1,1,1,1])[0].split('.')[1].length).toEqual(6)
    expect(plusMinus([1,1,1,1,1])[1].split('.')[1].length).toEqual(6)
    expect(plusMinus([1,1,1,1,1])[2].split('.')[1].length).toEqual(6)
  })
})

describe("05-staircase", function() {
  it("returns an array", function() {
    expect(Array.isArray(staircase(6))).toBe(true)
  })
  it("returned array is the correct height", function() {
    expect(staircase(6).length).toEqual(6)
  })
  it("returns correct result", function() {
    expect(staircase(6)).toEqual(['     #', '    ##', '   ###', '  ####', ' #####', '######'])
  })
})


describe("06-miniMaxSum", function() {
  it("returns an array", function() {
    expect(Array.isArray(miniMaxSum([1,2,3,4,5]))).toBe(true)
  })
  it("returns correct result", function() {
    expect(miniMaxSum([5,4,1,2,3])).toEqual([10,14])
  })
})


describe("07-birthdayCakeCandles", function() {
  it("returns an integer", function() {
    expect(typeof birthdayCakeCandles([3,2,1,3])).toBe('number')
  })
  it("returns correct result", function() {
    expect(birthdayCakeCandles([3,2,1,3,3])).toEqual(3)
  })
})

describe("08-timeConversion", function() {
  it("works with 12AM edge case", function() {
    expect(timeConversion('12:01:01AM')).toEqual('00:01:01')
  })
  it("works for AM case", function() {
    expect(timeConversion('02:01:01AM')).toEqual('02:01:01')
  })
  it("works for PM case", function() {
    expect(timeConversion('10:01:01PM')).toEqual('22:01:01')
  })
})

describe("09-gradingStudents", function() {
  it("works for grades lower than 38", function() {
    expect(gradingStudents([33])).toEqual([33])
  })
  it("works for rounded grades", function() {
    expect(gradingStudents([38])).toEqual([40])
  })
  it("works for non-rounded grades", function() {
    expect(gradingStudents([67])).toEqual([67])
  })
  it("works for multiple grades", function() {
    expect(gradingStudents([33,73,38,67])).toEqual([33,75,40,67])
  })
})


describe("10-kangaroo", function() {
  it("works for a faster kangaroo already ahead", function() {
    expect(kangaroo(5,3,4,2)).toEqual('NO')
  })
  it("works for a slower kangaroo already behind", function() {
    expect(kangaroo(0,2,5,3)).toEqual('NO')
  })
  it("works for evenly-paced offset kangaroos", function() {
    expect(kangaroo(1,2,2,2)).toEqual('NO')
  })
  it("works for kangaroos starting at the same point", function() {
    expect(kangaroo(2,4,2,5)).toEqual('YES')
  })
  it("works for one kangaroo significantly out-hopping the other", function() {
    expect(kangaroo(1,5,4,3)).toEqual('NO')
  })
  it("kangaroos that will meet", function() {
    expect(kangaroo(1,5,5,3)).toEqual('YES')
  })
})

describe("11-breakingRecords", function() {
  it("returns correct result", function() {
    expect(breakingRecords([3,4,21,36,10,28,35,5,24,42])).toEqual([4,0])
    expect(breakingRecords([10,5,20,20,4,5,2,25,1])).toEqual([2,4])
  })
  it("returns an array", function() {
    expect(Array.isArray(breakingRecords([1,2,3,4,5]))).toBe(true)
  })
})