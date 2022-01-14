var n = 12349874, rev = "";
while (n != 0) {
  let rem = n % 10
    rev = rev + rem
    n = Math.floor(n / 10)
}
console.log(rev);