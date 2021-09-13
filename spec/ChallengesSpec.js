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
