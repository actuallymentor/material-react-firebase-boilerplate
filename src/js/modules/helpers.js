// Grab the values of a form from it's event object
export const valuesFromEvent = event => {

	//
	if( event.target.value ) return event.target.value

	// If it is a form (target has multiple elements)
	let result = {}
	for( let element of event.target ) {
		if( element.value ) result[ element.name ] = element.value

		// if input type is file, return file, not value
		if( element.type == 'file' ) result[ element.name ] = element.files.length <= 1 ? element.files[0] : element.files
	}
	return result
}

// Timestamps
export const stringToMsTimestamp = string => Date.parse( string )
export const msTimestampToString = ms => {
	const date = new Date( ms ).toDateString()
	return date.includes( 'Invalid' ) ? undefined : date
}
export const msTimestampToYYYMMDD = ms => {
	const theDate = new Date( ms )
	const d = {
		day: String( theDate.getDate() ),
		month: String( theDate.getMonth() + 1 ),
		year: theDate.getFullYear()
	}
	return `${ d.year }-${ d.month.length < 2 ? '0' + d.month : d.month }-${ d.day.length < 2 ? '0' + d.day : d.day }`
}
export const timeStamp = f => new Date( ).getTime()