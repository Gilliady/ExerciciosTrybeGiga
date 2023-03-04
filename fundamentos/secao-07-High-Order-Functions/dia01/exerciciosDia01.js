const addNewEmployee = (nomeCompleto) => {
  const fullName = nomeCompleto.split(' ');
  let email = '';
  fullName.forEach((element, index) => {
    if (index < fullName.length -1){
      email += `${element.toLowerCase()}_`;
    } else {
      email += `${element.toLowerCase()}@trybe.com`;
    }
  });

  return {nomeCompleto, email};
};
const newEmployees = (addEmploye) => {
  
  const employees = {
    id1: addEmploye('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: addEmploye('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: addEmploye('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const checkNumbers = (numberChosed, drawnNumber) => {
  if (numberChosed === drawnNumber) {
    return true;
  }
  return false;
}

const raffle = (check) => check === true ? 'Parabéns você ganhou': 'Tente Novamente';


console.log(raffle(checkNumbers(1, Math.floor(Math.random() * 5))));

const corrector = (rightAwnsers, studentAwnsers) => {
  let grades = 0;
  rightAwnsers.forEach((element, index) => {
    if (studentAwnsers[index] !== 'N.A') {
      if (studentAwnsers[index] !== element) {
        grades -= 0.5;
      } else {
        grades += 1;
      }
    }
  });
  return `Nota: ${grades}`;
}

const correctTests = (rightAwnsers, studentAwnsers, correct) => correct(rightAwnsers, studentAwnsers);
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(correctTests(RIGHT_ANSWERS, STUDENT_ANSWERS, corrector));