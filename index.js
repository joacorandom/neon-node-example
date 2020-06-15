const fibonacci =  require('./lib/fibonacci');
const fibonacciNative = require('./lib/fibonacci-native');


(async _ => {
    const total = parseInt(process.argv[2], 10) || 15; 
    const useNative = process.argv[3] === 'native';
    const result = useNative ? await fibonacciNative(total) : await fibonacci(total);
    console.log(result);
})();