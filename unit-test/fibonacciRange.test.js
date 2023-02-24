const fibonacciRange = require('./fib');

test('fibonacciRange returns the correct sequence between two indices', () => {
    expect(fibonacciRange(1, 0)).toEqual([]);
    expect(fibonacciRange(1, 1)).toEqual([1]);
    expect(fibonacciRange(1, 2)).toEqual([1, 1]);
    expect(fibonacciRange(3, 5)).toEqual([2, 3, 5]);
    expect(fibonacciRange(4, 8)).toEqual([3, 5, 8, 13, 21]);
});