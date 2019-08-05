export default ( state = null, action ) => {

	switch( action.type ) {

		// Login/register action logic
		case "GETUSER_FULFILLED":
		case "REGISTERUSER_FULFILLED":
		case "LOGINUSER_FULFILLED":
			// Payload contains the result of the frequest to the server
			const { displayName } = action.payload
			return { ...state, name: displayName }
		break

	
		// Logout action logic
		case "LOGOUTUSER_FULFILLED":
			// Returning null here causes state.user to be nothing
			return null
		break

		// Just return the state if no known action is specified
		default:
			return state
	}
}