const {
    findMean,
    findMedian,
    findMode,
} = require("./math");

describe("#findMean", function () {
    it("finds the mean of an array of numbers", function () { 
      expect(findMean([4,8,2,4,6,12])).toEqual(6)
    })
})
  
describe("#findMedian", function(){
    it("finds the median of an odd set", function () { 
        expect(findMedian([1, -1, 4])).toEqual(1)
      })
    it("finds the median of an even set", function(){ 
      expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
    })
})
  
describe("#findMode", function () {
    it("finds the mode", function () { 
      expect(findMode([1,2,2,2,2,3,4])).toEqual(2)
    })
})