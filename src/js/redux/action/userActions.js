import app from '../../modules/firebase'

export const getUser = f => ( {
	type: 'GETUSER',
	payload: app.getUser()
} )

export const registerUser = ( username, email, password ) => ( {
	type: "REGISTERUSER",
	payload: app.registerUser( username, email, password )
} )

export const loginUser = ( email, password ) => ( {
	type: "LOGINUSER",
	payload: app.loginUser( email, password )
} )

export const logoutUser = f => ( {
	type: 'LOGOUTUSER',
	payload: app.logoutUser()
} )