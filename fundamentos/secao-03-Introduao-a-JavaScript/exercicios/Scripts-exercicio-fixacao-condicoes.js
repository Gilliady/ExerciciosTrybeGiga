const score = 69;
if(score >= 80){
  console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
}else if(score < 80 && score >= 60){
  console.log("Você está na nossa lista de espera");
}else if(score < 60 && score){
  console.log("Infelizmente você reprovou.");
}