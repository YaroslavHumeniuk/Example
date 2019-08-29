console.log('Hello world')


var upozorenje = {
	grad: ["Grad mora biti velikim slovima"]
};

proveraJMBG.addEventListener('jmbg', function(evt){
  let length = proveraJMBG.value.length
  if (length < 13) alert.textContent = 'маловато будет!'
})

// function validateForm(ftnForm) {
// 	const errors = []
// 	const {
// 		ime,
// 		prezime,
// 		jmbg,
// 		grad,
// 	} = ftnForm.elements

// 	if (ime.value.trim() === '') {
// 		errors.push({
// 			field: 'ime',
// 			msg: 'Field `ime` iz empty'
// 		})
// 	}

// 	if (prezime.value.trim() === '') {
// 		errors.push({
// 			field: 'prezime',
// 			msg: 'Field `prezime` iz empty'
// 		})
// 	}

//   if (jmbg.value.trim() === '') {
// 		errors.push({
// 			field: 'jmbg',
// 			msg: 'Field `jmbg` iz empty'
// 		})
//   }
  
//   if (grad.value.trim() === '') {
// 		errors.push({
// 			field: 'grad',
// 			msg: 'Field `grad` iz empty'
// 		})
// 	}

// 	if (errors.length) {
// 		showErrors(errors)
// 		return false
// 	} else {
// 		return true
// 	}
// }