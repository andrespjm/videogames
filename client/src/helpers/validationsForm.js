export const validationForm = form => {
	const errors = {};
	const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	const regexDescription = /^.{1,500}$/;

	if (!form.name.trim()) {
		errors.name = 'Field Name is required';
	} else if (!regexName.test(form.name.trim())) {
		errors.name = 'Enter valid characters';
	}

	if (!form.description.trim()) {
		errors.description = 'Field Description is required';
	} else if (!regexDescription.test(form.description)) {
		errors.description =
			'Field Description, must not exceed more than 500 characters';
	}
	if (!form.released.trim()) {
		errors.released = 'Field Released is required';
	}
	if (form.rating < 1 || form.rating > 5) {
		errors.rating = 'Field Rating is required';
	}

	return errors;
};
