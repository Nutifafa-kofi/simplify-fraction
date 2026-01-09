// function that takes a fraction number to it's lowest form
function simplifyFraction(numerator, denominator) {
  if (denominator === 0) {
    return null;
  }

  function gcd(a, b) {
    while (b !== 0) {
      let temporary = b;
      b = a % b;
      a = temporary;
    }
    return a;
  }
  let divisor = gcd(Math.abs(numerator), Math.abs(denominator));
  return `${numerator / divisor}/${denominator / divisor}`;
}
console.log(simplifyFraction(8, 12));
