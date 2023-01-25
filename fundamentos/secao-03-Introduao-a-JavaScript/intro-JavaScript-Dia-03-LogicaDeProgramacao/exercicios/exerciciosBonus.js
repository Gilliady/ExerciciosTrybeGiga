let n = 5;
let word = '';
for (let index = 0; index < n; index += 1) {
  word = '';
  for(let index2 = 0; index2 < n; index2 += 1){
    word += '*';
        
    }
    console.log(word);
}
word = '';
for (let index = 0; index < n; index += 1) {
  word += '*';
  console.log(word);     
}
word = '';
for (let index = 0; index < n; index += 1) {
  word = '';
  for (let index2 = 0; index2 < n; index2++) {
    word += ' ';
  }
  word[0].replace = '*';
  console.log(word);
   
}

let number = 3;
let isPrime = true;
for(let index = 0; index < number; index += 1){
  if(number % index === 0 && index != 1 && index != number){
    isPrime = false;
  }

  
}
if(isPrime == true){
  console.log(number + ' é um número primo');
}else{
  console.log(number + ' não é um número primo');
}