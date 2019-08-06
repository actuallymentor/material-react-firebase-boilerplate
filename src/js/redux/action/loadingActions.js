const setLoading = message => ( {
	type: 'SETLOADING',
	payload: Promise.resolve( message )
} )

export default setLoading