export const VALIDATION = {
	name: {
		required: 'Please enter your name',
		minLength: {
			value: 3,
			message: 'Name must be at least 3 characters',
		},
		maxLength: {
			value: 20,
			message: 'Name must be at least 20 characters',
		},
	},
	email: {
		required: 'Please enter email',
		pattern: {
			value:
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: 'Please enter a valid email',
		},
	},
	password: {
		required: 'Please enter password',
	},
}
