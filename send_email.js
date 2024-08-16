document
	.getElementById('open-popup-btn')
	.addEventListener('click', function () {
		document.getElementById('popup').style.display = 'flex'
	})

document
	.getElementById('close-popup-btn')
	.addEventListener('click', function () {
		document.getElementById('popup').style.display = 'none'
	})

document
	.getElementById('contact-form')
	.addEventListener('submit', function (e) {
		e.preventDefault() 

		var email = document.getElementById('email').value

	
		fetch('send_email.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: 'email=' + encodeURIComponent(email),
		})
			.then(function (response) {
				if (response.ok) {
					alert('Письмо отправлено!')
					document.getElementById('popup').style.display = 'none'
				} else {
					alert('Ошибка отправки письма.')
				}
			})
			.catch(function (error) {
				console.error('Ошибка:', error)
				alert('Ошибка отправки письма.')
			})
	})
