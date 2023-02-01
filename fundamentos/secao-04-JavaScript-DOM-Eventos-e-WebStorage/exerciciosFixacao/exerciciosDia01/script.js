const title = document.getElementById("page-title");

const subTitle = document.getElementById("subtitle");

const subTitleByTag = document.getElementsByTagName('h4');

const paragraph = document.getElementById("paragraph");

const secondParagraph = document.getElementById("second-paragraph");

const paragraphs = document.getElementsByClassName('paragraphs');

title.innerHTML = 'Baby Driver';

subTitle.innerText = 'Dirigindo e curtindo sonzera';

subTitleByTag[0].style.color = 'lightpink';
for (let paragraph = 0; paragraph < paragraphs.length; paragraph++) {
  paragraphs[paragraph].style.color = 'green';  
}

secondParagraph.innerText = 'DK-san'
