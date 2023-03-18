import '../style.css';
import Swal from 'sweetalert2';
const heroImg = document.querySelector('#heroImage');
const heroName = document.querySelector('#heroName');
const newHeroBtn = document.querySelector('#generateHero');
const randomHero = () => {
	fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
		.then(response => response.json())
		.then(data => {
			console.log(data.length);
			const newHero = data[Math.round(Math.random() * data.length)];
			heroImg.src = newHero.images.lg;
			heroName.textContent = newHero.name;
			Swal.fire(`Sorted this hero: ${newHero.name}`);
		})
		.catch(e => Swal.fire(e.message));
};

randomHero();

newHeroBtn.addEventListener('click', randomHero);