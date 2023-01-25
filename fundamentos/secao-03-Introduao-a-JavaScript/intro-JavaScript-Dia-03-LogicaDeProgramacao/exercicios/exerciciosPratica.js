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

let array = ['java', 'javascript', 'python', 'html', 'css'];
let smallerWord = array[0];
let higherWord = '';
for (let index = 0; index < array.length; index += 1) {
  if(smallerWord.length > array[index].length){
    smallerWord = array[index];
  }else if(higherWord.length < array[index].length){
    higherWord = array[index];
  } 
}
console.log(smallerWord);
console.log(higherWord);