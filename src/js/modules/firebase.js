// import * as firebase from 'firebase'
import * as firebase from 'firebase/app'
import '@firebase/firestore'
import '@firebase/auth'
const config = require( '../../../firebase.js' )

class App {

	constructor( ) {
		// Initialise Firebase connection
		this.fb = firebase.initializeApp( config )
		this.db = this.fb.firestore()

		// Default values
		this.user = undefined
	}


	// ///////////////////////////////
	// User management
	// ///////////////////////////////

	getUser() {
		return new Promise( ( res, rej ) => {
			if( this.user ) return res( this.user )
			return this.fb.auth().onAuthStateChanged( user => {
				if( user ) {
					this.user = user
					return res( user )
				} else {
					return rej( 'No logged in user' )
				}
			} )
		} )
	}

	async registerUser( username, email, password ){
		await this.fb.auth().createUserWithEmailAndPassword( email, password )
		await this.loginUser( email, password )
		await user.updateProfile( {
			displayName: username
		} )
		return this.user
	}

	async loginUser( email, password ) {
		let user = await this.fb.auth().signInWithEmailAndPassword( email, password )
		if( user ) this.user = user
	}

	async logoutUser(  ) {
		await this.fb.auth( ).signOut( )
	}

}

export default new App()