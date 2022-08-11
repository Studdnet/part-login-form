const registration = document.querySelector('.registration'),
	pwShowHide = document.querySelectorAll('.showHidePw'),
	pwFields = document.querySelectorAll('.password'),
	signUp = document.querySelector('.signup-link'),
	login = document.querySelector('.login-link'),
	button = document.getElementById('signUp'),
	buttonClose = document.querySelectorAll('.close');



// js code to show/hide password and change icon

pwShowHide.forEach(eyeIcon => {
	eyeIcon.addEventListener('click', () => {
		pwFields.forEach(pwField => {
			if (pwField.type === 'password') {
				pwField.type = 'text';

				pwShowHide.forEach(icon => {
					icon.classList.replace('uil-eye-slash', 'uil-eye');
				});

			} else {
				pwField.type = 'password';

				pwShowHide.forEach(icon => {
					icon.classList.replace('uil-eye', 'uil-eye-slash');
				});
			}
		});
	});
});

// js code to appear signup and login form
signUp.addEventListener('click', () => {
	registration.classList.add('active');
});
login.addEventListener('click', () => {
	registration.classList.remove('active');
});

// js code to open / close registration form
button.addEventListener('click', () => {
	button.style.opacity = '0';
	button.style.visibility = 'hidden';

	registration.style.opacity = '1';
	registration.style.visibility = 'visible';
	
});

buttonClose.forEach(close =>{

	close.addEventListener('click', () => {
	
		button.style.opacity = '1';
		button.style.visibility = 'visible';
	
		registration.style.opacity = '0';
		registration.style.visibility = 'hidden';
	});
});

