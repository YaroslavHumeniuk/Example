var boje = {
	rucak: "Crimson",
	pice: "Teal"
};

var osobe = [{
		ime: "Pera",
		prezime: "Peric"
	}, {
		ime: "Marko",
		prezime: "Markovic"
	},
	{
		ime: "Jovo",
		prezime: "Jovic"
	}
];

function clearErrors() {
	document.querySelector('.messages-cont').style.display = 'none'
	document.getElementById('messages').innerHTML = ''
}

function showErrors(errors) {
	if (errors.length) {
		const fragment = document.createDocumentFragment()

		document.querySelector('.messages-cont').style.display = 'block'
		errors.forEach(function ({
			field,
			msg
		}) {
			var li = document.createElement('li')
			li.innerHTML = `<strong>${field}</strong>: ${msg}`;
			fragment.appendChild(li);
		});
		document.getElementById('messages').appendChild(fragment)
	}
}

function validateForm(form) {
	const errors = []
	const {
		usr,
		prz,
		status,
		sel1,
		sel2
	} = form.elements

	if (usr.value.trim() === '') {
		errors.push({
			field: 'usr',
			msg: 'Field `usr` iz empty'
		})
	} else if (usr.value[0].toUpperCase() !== usr.value[0]) {
		errors.push({
			field: 'usr',
			msg: 'First letter in field `usr` must be in upper case'
		})
	}

	if (prz.value.trim() === '') {
		errors.push({
			field: 'prz',
			msg: 'Field `prz` iz empty'
		})
	} else if (prz.value[0].toUpperCase() !== prz.value[0]) {
		errors.push({
			field: 'prz',
			msg: 'First letter in field `prz` must be in upper case'
		})
	}

	if (status.checked) {
		if (sel1.selectedIndex < 0) {
			errors.push({
				field: 'sel1',
				msg: 'Field `sel1` not selected'
			})
		}
		if (sel1.selectedIndex == 2 && sel2.selectedIndex < 0) {
			errors.push({
				field: 'sel2',
				msg: 'Field `sel2` not selected'
			})
		}
	}

	if (osobe.findIndex(function (element) {
			return element.ime === usr.value && element.prezime === prz.value
		}) < 0) {
		errors.push({
			field: 'osobe',
			msg: 'Osobe must be from list: [{ ime: "Pera", prezime: "Peric" }, { ime: "Marko", prezime: "Markovic" }, { ime: "Jovo", prezime: "Jovic" } ] ' })
	}

	if (errors.length) {
		showErrors(errors)
		return false
	} else {
		return true
	}
}

function clearSelect(select) {
	var length = select.options.length
	for (let i = 0; i < length; i++) {
		select.options[length - i - 1] = null;
	}
}

function initForm() {
	console.log('initForm:', 'start')
	const form = document.getElementById("form")
	form.addEventListener("submit", function (evt) {
		evt.preventDefault();
		clearErrors()
		if (validateForm(form)) {
			form.submit()
		}
	});

	const status = document.getElementById("status")
	const sel1 = document.getElementById("sel1")
	const sel2 = document.getElementById("sel2")
	const select_paragraf = document.getElementById("select_paragraf")
	const poruka = document.getElementById("poruka")

	status.addEventListener("change", function (evt) {
		sel1.disabled = !status.checked;
		sel2.disabled = !status.checked;
		if (!status.checked) {
			sel2.style.visibility = 'hidden'
			select_paragraf.parentElement.style.backgroundColor = `#337ab7`
			poruka.innerHTML = ''
		}
	});

	sel1.addEventListener("change", function (evt) {
		if (sel1.selectedIndex === 2) {
			sel2.style.visibility = 'visible'
			poruka.innerHTML = 'rucak'
			select_paragraf.parentElement.style.backgroundColor = boje[poruka.innerHTML]
		} else {
			sel2.style.visibility = 'hidden'
			select_paragraf.parentElement.style.backgroundColor = `#337ab7`
			poruka.innerHTML = ''
		}
	});

	sel2.addEventListener("change", function (evt) {
		let msg = ''
		if (sel2.selectedIndex === 0) {
			msg = 'rucak'
		} else {
			msg = 'pice'
		}
		select_paragraf.parentElement.style.backgroundColor = boje[msg]
		poruka.innerHTML = msg
	});
}