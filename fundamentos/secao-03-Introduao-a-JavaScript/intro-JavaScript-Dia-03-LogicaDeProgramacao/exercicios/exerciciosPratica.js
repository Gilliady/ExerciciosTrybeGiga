let fatorial = 10
let result = fatorial;
for (let index = fatorial - 1; index <= fatorial && index > 0; index -= 1) {
    result *= index;
    console.log(result);
}