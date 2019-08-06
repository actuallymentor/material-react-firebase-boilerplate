// Grab the values of a form from it's event object
export const valuesFromEvent = event => {
	let result = {}

	for( let element of event.target ) {
		if( element.value ) result[ element.name ] = element.value
	}
	return result
}

// Placeholder
export const other = true