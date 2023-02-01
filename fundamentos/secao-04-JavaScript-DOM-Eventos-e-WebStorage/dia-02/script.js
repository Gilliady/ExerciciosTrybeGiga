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
};
const addClass = (element, className) => {
  element.className = className;
};
const updateText = (element, text) => {
  element.innerHTML = text;
};
createElementAndAppendChild(document.querySelector("body"), "h1", 'title');
updateText(document.querySelector("h1"), "TrybeTrip - Agência de Viagens");
createElementAndAppendChild(document.querySelector("body"), "main", 'main-content');
createElementAndAppendChild(document.querySelector('.main-content'), 'section', 'center-content');
createElementAndAppendChild(document.querySelector('.center-content'), 'p', '');
updateText(document.querySelector('.center-content p'), 'Espero que esteja tudo certo :).');

