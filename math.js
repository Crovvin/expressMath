function createCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
}

function convertArray(strings) {
    let result = [];
    for (let i = 0; i < strings.length; i++) {
      let newNumber = Number(strings[i]);
      if (Number.isNaN(newNumber)) {
        return new Error(
          `The value '${strings[i]}' at index ${i} is not a valid number.`
        );
      }
      result.push(newNumber);
    }
    return result;
}
  
function findMode(arr) {
    let count = 0;
    let highest;
    let freqCounter = createCounter(arr);
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        highest = key;
        count = freqCounter[key];
      }
    }
    return +highest;
}
  
  
function findMean(numbers){
    if(numbers.length === 0) return 0;
    return numbers.reduce(function (acc, cur) {return acc + cur;}) / numbers.length
}
  
function findMedian(numbers){
    let median;
    numbers.sort((a, b) => a - b);
    let middle = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 0) {
      median = (numbers[middle] + numbers[middle - 1]) / 2;
    } else {
      median = numbers[middle];
    }
    return median
}

module.exports = {
    createCounter,
    findMean,
    findMedian,
    findMode,
    convertArray
};
  