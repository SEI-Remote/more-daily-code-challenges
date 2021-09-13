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