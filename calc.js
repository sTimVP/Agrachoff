document.addEventListener('DOMContentLoaded', function () {
	const rangeInput = document.getElementById('area')
	const areaValue = document.querySelector('.area-value')

	function updateValue() {
		areaValue.textContent = `${rangeInput.value}м²`
	}

	updateValue()

	rangeInput.addEventListener('input', updateValue)
})
