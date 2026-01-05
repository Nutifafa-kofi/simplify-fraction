function simplify(n, d) {
  if (d === 0) {
    return null;
  }
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  let divisor = gcd(Math.abs(n), Math.abs(d));
  return `${n / divisor}/${d / divisor}`;
}
console.log(simplify(8, 12));
