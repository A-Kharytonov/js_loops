// const age = prompt('Вкажiть ваш вiк')

// const ageNum = Number(age);	

// if (ageNum >= 1 && ageNum <= 11) {
// 	alert('Ви дитина - кайфуйте')
// } else if (ageNum >= 12 && ageNum <= 17){
// 	alert('Ви пiдлiток')
// } else if (ageNum >= 18 && ageNum <= 59){
// 	alert('Ви дорослий - працюйте') 
// }else if (ageNum >= 60) {
//   alert('Ви пенсiонер - кайфуйте');
// }if (isNaN(ageNum) || ageNum <= 0) {
//   alert('Введено некоректний вік');
// }

// Збираємо форму і елементи
// const form = document.getElementById('ageForm');
// const result = document.getElementById('result');

// Додаємо обробник події при сабміті форми
// form.addEventListener('submit', function(event) {
	// event.preventDefault();  // Запобігаємо перезавантаженню сторінки

// Отримуємо вік з поля введення
	// const age = Number(document.getElementById('age').value);

// Перевірка на коректність введених даних
	// if (isNaN(age) || age < 0) {
	// 	result.textContent = 'Будь ласка, введіть коректний вік.';
	// 	return;
	// }

// Визначаємо категорію на основі віку
// 	if (age <= 11) {
// 		result.textContent = 'Ви дитина.';
// 	} else if (age <= 17) {
// 		result.textContent = 'Ви підліток.';
// 	} else if (age <= 59) {
// 		result.textContent = 'Ви дорослий.';
// 	} else {
// 		result.textContent = 'Ви пенсіонер.';
// 	}
// }); 

const form = document.querySelector('#ageForm');
const result = document.querySelector('#result');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	const age = Number(document.querySelector('#age').value);
	event.preventDefault();

	if (isNaN(age) || age < 0) {
		result.textContent = 'Будь ласка, введіть коректний вік.';
		return;
}


if (age <= 11) {
	result.textContent = 'Ви дитина.';
} else if (age <= 17) {
	result.textContent = 'Ви підліток.';
} else if (age <= 59) {
	result.textContent = 'Ви дорослий.';
} else {
	result.textContent = 'Ви пенсіонер.';
}

}


const num = prompt('Введiть число вiд 0 до 9');

const symbols = {
	0: ')',
  1: '!',
  2: '@',
  3: '#',
  4: '$',
  5: '%',
  6: '^',
  7: '&',
  8: '*',
  9: '('
};

if (symbols[num]) {
	alert(`Число ${num} - символ ${symbols[num]}`);
}else {
	alert('Будь-ласка введiть правильне число')
}