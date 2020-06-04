const addon = require('../native');
function fibonacci(n) {
    if (n < 2) {
        return 1;
    } else {
        return fibonacci (n - 1) + fibonacci(n - 2);
    }
}


console.log(addon.fibonacci(40));
//console.log(fibonacci(40));
