/* let jogadas = ["pedra", "papel", "tesoura"];
let playComputador = jogadas[Math.floor(Math.random() * jogadas.length)];
let playPlayer = jogadas[2];

console.log(playPlayer + ' ' + playComputador);

if(playPlayer === playComputador){
  
  console.log('A Ties');

}else {
  switch(playPlayer){
    case jogadas[0]:
    if(playComputador == jogadas[1]){
      console.log('Computador vence.');
    }else {
      console.log('Jogador vence.');
    }
    break;
    case jogadas[1]:
      if(playComputador == jogadas[2]){
        console.log('Computador vence.');
      }else{
        console.log('Jogador vence.');
      }
    break;
    case jogadas[2]:
      if(playComputador == jogadas[0]){
        console.log('Computador vence.');
      }else{
        console.log('Jogador vence.');
      }
    break;
  }
} */

let carolIdade = 25;
let flavioIdade = 33;
let noelIdade = 45;
let idades =  [carolIdade, flavioIdade, noelIdade];
let menorIdade = null;

if(carolIdade < flavioIdade && carolIdade < noelIdade){
  console.log('Carolzita é a pessoa mais nova');
}else if( flavioIdade < carolIdade && flavioIdade < noelIdade){
  console.log('Flavio é a pessoa mais nova.');
}else{
  console.log('Noel é a pessoa mais nova.');
}