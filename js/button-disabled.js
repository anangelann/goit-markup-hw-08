const inputs = document.querySelectorAll('input[type=checkbox]');
const button = document.querySelector('.button__submit');

function check() {
	button.disabled = true;
	inputs.forEach((input) => {
		if (input.checked) button.disabled = false;
	});
}

inputs.forEach((input) => input.addEventListener('change', check));
