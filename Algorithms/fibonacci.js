// Simple Fibonacci sequence
function fibonacci (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// reduce duplicate calculation
function fibonacci2 (n) {
  const m = new Map();
  function fn (x) {
    if (x <= 0) return 0;
    if (x === 1) return 1;

    if (m.has(x)) return m.get(x);
    const v = fn(x - 1) + fn(x - 2);
    m.set(x, v);
    return v;
  }
  return fn(n);
}