const clickActive = document.querySelectorAll('.clickActive');
const submitBtn = document.querySelector('#btnSubmit');
const noteUser = document.querySelector('#noteUser');
const containerRate = document.querySelector('.rate');
const containerThank = document.querySelector('.thank');
let count = 0;

clickActive.forEach(el => {
	el.addEventListener('click', (e) => {
		const activeClass = document.querySelector('.active');
		activeClass !== null &&	activeClass.classList.remove('active');
		e.target.classList.add('active');
	})
});

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	
	if(localStorage.getItem('dieOrNot')) {
		alert("A dead person cannot vote !");
		document.location.reload();	
	} else {
		const activeClass = document.querySelector('.active');
		if(activeClass !== null) {
			const note = activeClass.textContent;
			noteUser.textContent = note;
			containerRate.style.display = 'none';
			containerThank.style.display = 'flex';
		} else if(count < 1) {
			alert('Please, Choose a note or i kill you !');
			count++;
		} else {
			alert('Pan ! Pan Pan ! You are dead !');
			localStorage.setItem('dieOrNot', 'true');
			document.location.reload();
		}
	}
});

// Revive
const revive = document.querySelector('#revive');
	
revive.addEventListener('click', () => {
	if(localStorage.getItem('dieOrNot')) {
		localStorage.removeItem('dieOrNot');
		alert('You are revive');
	}
});