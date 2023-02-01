/* Para dar início a página, você deve criar algumas tags:
Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
Adicione a tag main com a classe main-content como filho da tag body;
Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
Adicione 3 tags h3, todas sendo filhas do main criado no passo 2. */
const createElementAndAppendChild = (parent, element, className) => {
  const elementCreated = document.createElement(element);
  parent.appendChild(elementCreated);
  className !== "" && addClass(elementCreated, className);
  return elementCreated;
};
const addClass = (element, className) => {
  element.className = className;
};
const updateText = (element, text) => {
  element.innerHTML = text;
};
createElementAndAppendChild(document.querySelector("body"), "h1", "title");
updateText(document.querySelector("h1"), "TrybeTrip - Agência de Viagens");
createElementAndAppendChild(
  document.querySelector("body"),
  "main",
  "main-content"
);
createElementAndAppendChild(
  document.querySelector(".main-content"),
  "section",
  "center-content"
);
createElementAndAppendChild(document.querySelector(".center-content"), "p", "");
updateText(
  document.querySelector(".center-content p"),
  "Espero que esteja tudo certo :)."
);
createElementAndAppendChild(
  document.querySelector(".main-content"),
  "section",
  "left-content"
);
createElementAndAppendChild(
  document.querySelector(".main-content"),
  "section",
  "right-content"
);
const imgCenter = createElementAndAppendChild(
  document.querySelector(".center-content"),
  "img",
  "small-image"
);
imgCenter.src = "https://picsum.photos/200";
createElementAndAppendChild(document.querySelector('.right-content'), 'ul', '');
const contarAteDez = {
  1: 'um',
  2: 'dois',
  3: 'três',
  4: 'quatro',
  5: 'cinco',
  6: 'seis',
  7: 'sete',
  8: 'oito',
  9: 'nove',
  10: 'dez',
  
}
for (let index = 1; index <= 10; index += 1) {
  let liIndex = createElementAndAppendChild(document.querySelector('ul'), 'li', '');
  liIndex.innerHTML = contarAteDez[index];
}
for (let index = 1; index <= 3; index += 1) {
  createElementAndAppendChild(document.querySelector('.main-content'), 'h3', '');
}
for (let index = 0; index < 3; index += 1) {
  addClass(document.querySelectorAll('h3')[index], 'description');
}
document.querySelector('.main-content').removeChild(document.querySelector('.left-content'))
document.querySelector('.right-content').style.marginRight = 'auto';
document.querySelector('.center-content').style.backgroundColor = 'green';
for (let index = 0; index < document.querySelectorAll('li').length; index += 1) {
  let element = document.querySelectorAll('li')[index];
  if (element.innerHTML.includes('nove') || element.innerHTML.includes('dez')) {
    document.querySelector('ul').removeChild(element);
    index -= 1;
  }
  
}