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
  it("does not accept duplicates", function() {
    expect(twoSum([8, 5, 1, 3, 9], 16)).toEqual('No Sum')
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


describe("07-timeConversion", function() {
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

describe("08-gradingStudents", function() {
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


describe("9-kangaroo", function() {
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
    expect(kangaroo(2,4,2,4)).toEqual('YES')
  })
  it("works for one kangaroo significantly out-hopping the other", function() {
    expect(kangaroo(1,5,4,3)).toEqual('NO')
  })
  it("works for kangaroos that will meet", function() {
    expect(kangaroo(1,5,5,3)).toEqual('YES')
  })
})

describe("10-breakingRecords", function() {
  it("returns correct result", function() {
    expect(breakingRecords([3,4,21,36,10,28,35,5,24,42])).toEqual([4,0])
    expect(breakingRecords([10,5,20,20,4,5,2,25,1])).toEqual([2,4])
  })
  it("returns an array", function() {
    expect(Array.isArray(breakingRecords([1,2,3,4,5]))).toBe(true)
  })
})


describe("11-flatten", function () {
  it("returns a new array", function () {
    var arr = [];
    expect(flatten(arr)).not.toBe(arr);
  });
  it("flattens a nested array", function () {
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3]);
  });
  it("flattens an array with deeply nested arrays", function () {
    expect(flatten([1, [2, [3, [4]]], 1, 'a', ['b', 'c']])).toEqual([1, 2, 3, 4, 1, 'a', 'b', 'c']);
  });
});

describe("12-balancedBrackets", function () {
  it("returns false when not balanced", function () {
    expect(balancedBrackets('(]')).toBe(false);
    expect(balancedBrackets('[(])')).toBe(false);
  });
  it("returns true when balanced", function () {
    expect(balancedBrackets('()')).toBe(true);
    expect(balancedBrackets('[{}]')).toBe(true);
    expect(balancedBrackets('[({}[])]')).toBe(true);
  });
});

describe("13-isWinningTicket", function () {
  it("returns a boolean", function () {
    expect(typeof isWinningTicket([['a', 1]])).toBe('boolean');
  });
  it("checks for winning ticket", function () {
    expect(isWinningTicket([['ABC', 65]])).toBe(true);
    expect(isWinningTicket([['ABC', 999]])).toBe(false);
    expect(isWinningTicket([['ABC', 999], ['XY', 89]])).toBe(false);
    expect(isWinningTicket([['ABC', 66], ['dddd', 100], ['Hello', 108]])).toBe(true);
    expect(isWinningTicket([['dddd', 15], ['Hello', 108], ['ABC', 66]])).toBe(false);
  });
});

describe("14-getNumForIP", function () {
  it("returns a number", function () {
    expect(typeof getNumForIP('0.0.0.0')).toBe('number');
  });
  it("returns the correct number for an IP address", function () {
    expect(getNumForIP('0.0.0.1')).toBe(1);
    expect(getNumForIP('0.0.2.0')).toBe(512);
    expect(getNumForIP('192.156.99.15')).toBe(3231474447);
    expect(getNumForIP('10.0.0.1')).toBe(167772161);
  });
});

describe("15-toCamelCase", function () {
  it("returns a string", function () {
    expect(typeof toCamelCase('a')).toBe('string');
  });
  it("returns the correct string", function () {
    expect(toCamelCase('wdi-rocks')).toBe('wdiRocks')
    expect(toCamelCase('banana_Turkey_potato')).toBe('bananaTurkeyPotato')
    expect(toCamelCase('Mama-mia')).toBe('MamaMia')
    expect(toCamelCase('A_b_c')).toBe('ABC')
  });
});

describe("16-countTheBits", function () {
  it("returns a number", function () {
    expect(typeof countTheBits(0)).toBe('number');
  });
  it("returns the correct number of bits", function () {
    expect(countTheBits(0)).toBe(0);
    expect(countTheBits(13)).toBe(3)
    expect(countTheBits(256)).toBe(1)
    expect(countTheBits(255)).toBe(8)
    expect(countTheBits(65535)).toBe(16)
  });
});

describe("17-gridTrip", function () {
  it("returns an array", function () {
    expect(Array.isArray(gridTrip([0, 0], 'U1'))).toBe(true);
  });
  it("returns the correct final position", function () {
    expect(gridTrip([0, 0], 'U2R1')).toEqual([1, 2])
    expect(gridTrip([10, 5], 'D5L15U2')).toEqual([-5, 2])
    expect(gridTrip([100, -22], 'L2L15D50U1D9')).toEqual([83, -80])
  });
});

describe("18-addChecker", function () {
  it("returns a boolean", function () {
    expect(typeof addChecker([0, 1], 2)).toBe('boolean');
  });
  it("checks if two ints add up to desired total", function () {
    expect(addChecker([1, 2], 3)).toBe(true);
    expect(addChecker([-3, 2], 9)).toBe(false);
    expect(addChecker([10, 15, 16, 22], 32)).toBe(true);
    expect(addChecker([10, 15, 16, 22], 19)).toBe(false);
  });
});

describe("19-snail", function () {
  it("returns an array", function() {
    expect(Array.isArray(snail([[1,2,3],[8,9,4],[7,6,5]]))).toBe(true)
  })
  it("handles empty matrix", function () {
    expect(snail([[]])).toHaveSize(0)
  })
  it("returns correctly sorted", function () {
    expect(snail([[1]])).toEqual([1]);
    expect(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    expect(snail([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10], 
      [11, 12, 13, 14, 15], 
      [16, 17, 18, 19, 20], 
      [21, 22, 23, 24, 25]
    ])).toEqual(
      [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
    );
  });
});

describe("20-totalTaskTime", function () {
  it("returns zero when there are no tasks", function () {
    expect(totalTaskTime([], 1)).toBe(0);
  });
  it("handles two tasks and two threads", function () {
    expect(totalTaskTime([4, 2, 5], 1)).toBe(11);
    expect(totalTaskTime([5, 8], 2)).toBe(8);
    expect(totalTaskTime([4, 2, 10], 2)).toBe(12);
  });
  it("handles tasks with three threads", function () {
    expect(totalTaskTime([5, 2, 6, 8, 7, 2], 3)).toBe(12);
  });
});

