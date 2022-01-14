var a = 2;
var l = 8,
    u = 30;
for (i = 1; i <= u; i++) {
    let res = i ** a;
    if (res >= l && res <= u) {
        console.log(i);
    }
}