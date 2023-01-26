let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
let info_2 = {
  personagem: 'Tio Patinhas',
  origem: 'CChristmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
console.log('Bem vinda, ' + info.personagem);
info['recorrente'] = 'Sim';
console.log(info.recorrente);
for (const key in info) {
    console.log(key);
}
for (const key in info) {
  console.log(info[key]);
}

for (const key in info) {
  if(info[key] != info.recorrente){
    console.log(info[key] + ' e ' + info_2[key]);
  }else{  if(info[key] == info_2[key]){ 
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info_2[key])
  }
  }
}