let fatorial = 10
let result = fatorial;
for (let index = fatorial - 1; index <= fatorial && index > 0; index -= 1) {
    result *= index;
    console.log(result);
}


let word = 'tryber';
let invertedWord = '';
for (let index = word.length -1; index >= 0; index -= 1) {
  invertedWord += word[index];
  console.log(invertedWord);
}
