async function fibonacci(n) {
    return new Promise((resolve) => {
        let f0 = 1n;
        let f1 = 1n;
        for(let i = 2; i <= n; i ++) {
            let f2 = f0 + f1;
            f0 = f1;
            f1 = f2;
        }
        resolve(f0.toString());
    });
}

module.exports = fibonacci;
