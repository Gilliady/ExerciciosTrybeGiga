/* Acesse o elemento elementoOndeVoceEsta.
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai.
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de pai. */
document.getElementById('elementoOndeVoceEsta');
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'green';
document.getElementById('primeiroFilhoDoFilho').innerHTML = '<p>Testando aqui</p>';
console.log(document.getElementById('elementoOndeVoceEsta').parentElement.firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('pai').childNodes[5]);

function highestCount(num) {
  let maiorNum = Math.max(...num);
  let qtsMaiorNum = 0;
  console.log(maiorNum);
  for (let index = 0; index < num.length; index += 1) {
    if (maiorNum === num[index]) {
      qtsMaiorNum += 1;
    }
  }
  return qtsMaiorNum;
}
