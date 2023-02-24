function fibonacciRange(startIndex, endIndex) {
    let result = [];
    let a = 0, b = 1, fib = 1;
  
    for (let i = 1; i <= endIndex; i++) {
      if (i >= startIndex) {
        result.push(fib);
      }
      fib = a + b;
      a = b;
      b = fib;
    }
  
    return result;
}

console.log(fibonacciRange(1, 2));
module.exports = fibonacciRange;
  

  