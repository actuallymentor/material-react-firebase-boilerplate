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

		// Set up listeners
		this.listeners = {}
		this.listenUser()

		// Default values
		this.user = undefined
	}


	// ///////////////////////////////
	// User management
	// ///////////////////////////////
	listenUser() {
		setInterval( f => this.fb.auth().onAuthStateChanged( user => this.user = user ), 1000 )
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

// // ///////////////////////////////
// // Listener management
// // ///////////////////////////////
// resetListenerByName( name, all ) {
// 	if( name ) {
// 		// Run unsubscribe if listener exists
// 		if( this.listeners[ name ] ) this.listeners[ name ]()
// 		// Check for matching listeners based on partial match
// 		for( let listenername in this.listeners ) {
// 			// if partial match, unsub
// 			if( listenername.includes( name ) ) this.listeners[ listenername ]()
// 		}
// 	}
// 	if( all ) {
// 		// Unsubscribe for each key in listener object
// 		for( let listenername in this.listeners ) this.listeners[ listenername ]()
// 		// Reset object
// 		this.listeners = {}
// 	}
// }
// addListener( name, unsubscribe ) {
// 	// If listener exists, unsubscribe
// 	if( this.listeners[ name ] ) this.listeners[ name ]()
// 	// Register listener
// 	this.listeners[ name ] = unsubscribe
// }