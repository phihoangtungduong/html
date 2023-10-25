var N = prompt('Nhap N: ')
var t =[]
for(var i = 0;i<N;i++) {
    x = prompt('Nhap phan tu: ')
    t.push(x)
}
alert(t)
// document.write(`t[${i}] = ${t[i]}`)
t.sort(function(a, b) {
    return a - b;
});
alert(t)