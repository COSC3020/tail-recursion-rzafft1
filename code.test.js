const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function testfib(n) {
    var fib_old = 1;
    var fib = 1;
    var fib_new;
    while(n > 2) 
    {
        fib_new = fib + fib_old;
        fib_old = fib;
        fib = fib_new;
        --n;
    }
    return fib;
}

const test =
    jsc.forall(jsc.integer(0, 25), function(n) {
        console.error(n)
        return JSON.stringify(fib(n)) == JSON.stringify(testfib(n));
    });

jsc.assert(test, { tests: 100 });
