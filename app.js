const box1 = document.getElementById('box1'); // caja 1
const box2 = document.getElementById('box2'); // caja 2
const box3 = document.getElementById('box3'); // caja 3
const box4 = document.getElementById('box4'); // caja 4
const box5 = document.getElementById('box5'); // caja 5

// cambiar estilo caja 1
const preguntaBox1 = confirm('desea cambiar el color de la caja 1?');
if (preguntaBox1) {
	box1.classList.remove('bg-dark');
	box1.classList.add('bg-danger');
	box1.classList.add('border');
}

// // cambiar estilo caja 2
const preguntaBox2 = confirm('desea cambiar el color de la caja 2?');
if (preguntaBox2) {
	box2.classList.remove('bg-dark');
	box2.classList.add('bg-warning');
	box2.classList.add('border');
}

// // cambiar estilo caja 3
const preguntaBox3 = confirm('desea cambiar el color de la caja 3?');
if (preguntaBox3) {
	box3.classList.remove('bg-dark');
	box3.classList.add('bg-success');
	box3.classList.add('border');
}

// // cambiar estilo caja 4
const preguntaBox4 = confirm('desea cambiar el color de la caja 4?');
if (preguntaBox4) {
	box4.classList.remove('bg-dark');
	box4.classList.add('bg-primary');
	box4.classList.add('border');
}

// // cambiar estilo caja 5
const preguntaBox5 = confirm('desea cambiar el color de la caja 5?');
if (preguntaBox5) {
	box5.classList.remove('bg-dark');
	box5.classList.add('bg-secondary');
	box5.classList.add('border');
}

// como podemos esto hacerlo reducir el codigo? bueno, para eso estan las ¡Funciones!

function changeColorBox(caja, numero, color) {
	const pregunta = confirm(`desea cambiar el estilo de la caja numero ${numero}`);
	if (pregunta) {
		caja.classList.remove('bg-dark');
		caja.classList.add(`${color}`);
	}
}

changeColorBox(box1, 1, 'bg-danger');
changeColorBox(box2, 2, 'bg-warning');
changeColorBox(box3, 3, 'bg-success');
changeColorBox(box4, 4, 'bg-primary');
changeColorBox(box5, 5, 'bg-secondary');
