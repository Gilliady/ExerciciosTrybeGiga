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
let primeNumbers = [];

for (let index = 2; index <= 50; index++) {
  let isPrime = true;
  for (let index2 = 2; index2 < index; index2++) {
    if(index % index2 === 0){
      isPrime = false;
    }
  }
  if(isPrime === true){
    primeNumbers.push(index);
  }
}
console.log(primeNumbers[primeNumbers.length-1]);