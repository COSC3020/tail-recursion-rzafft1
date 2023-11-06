
function fib(n)
{
    if (n == 0 || n == 1) return 1

    return fib_acc(n, 0, 1, 0)
}

function fib_acc(n, n1, n2) 
{
    if (n < 2) 
    {
        return n2
    }
    else
    {
        return fib_acc(n - 1, n2, n1 + n2);
    }
}

console.log(fib(7))
  