var num = 1234, res = 0;
while (num != 0) {
    let l_digit = num % 10;
    res += l_digit ** 3;
    num = Math.floor(num / 10)

}
console.log(res);
