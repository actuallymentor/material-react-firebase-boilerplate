export const valuesFromEvent = event => {
	console.log( event.target )
	let result = {}

	for( let element of event.target ) {
		if( element.value ) result[ element.name ] = element.value
	}
	return result
}

export const other = true