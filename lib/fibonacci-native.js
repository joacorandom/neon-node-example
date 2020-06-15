const addon = require('../native/index.node');

async function fibonacci(n) {
    return new Promise((resolve, reject) => {  
        addon.fibonacci(n, (err, result) => {
            if(!err) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    }); 
}


module.exports = fibonacci;