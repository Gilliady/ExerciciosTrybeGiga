let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;
let higherNumber = 0;
let smallerNumber = numbers[0];
let oddNumbersCounter = 0;
for (const number of numbers) {
  //Percorra o array imprimindo todos os valores nele contidos com a função console.log();
  console.log(number);

  //Some todos os valores contidos no array e imprima o resultado;
  sum += number;
  //Utilizando for, descubra qual o maior valor contido no array e imprima-o;
  if(higherNumber < number){
    higherNumber = number;
  }
  //Utilizando for, descubra qual o menor valor contido no array e imprima-o;
  if(smallerNumber > number){
    smallerNumber = number;
  }
  //Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado";
  if(number % 2 != 0){
    oddNumbersCounter += 1;
  }
}
console.log(sum);

//Calcule e imprima a média aritmética dos valores contidos no array;
media = sum / numbers.length;
console.log(media);

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if(media > 20){
  console.log('valor maior que 20.');
}else{
  console.log('valor menor ou igual a 20');
}

console.log('maior número: ' + higherNumber);
console.log('menor número: ' + smallerNumber);
if(oddNumbersCounter !== 0){
  console.log('quantidade de números ímpares: ' + oddNumbersCounter);
}else{
  console.log('nenhum valor ímpar encontrado');
}

let oneToTwentyFive = [];
for(let index = 1; index <= 25; index += 1){
  oneToTwentyFive.push(index);
}
for (const actualNumber of oneToTwentyFive) {
  console.log(actualNumber);
  console.log(actualNumber + ' dividido por 2 é igual a: ' + actualNumber / 2);
}