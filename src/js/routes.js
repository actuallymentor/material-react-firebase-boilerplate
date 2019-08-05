import React from 'react'
import ReactDOM from 'react-dom'

// Routing
import { Route, Switch, Redirect } from 'react-router-dom'
import { createHashHistory } from 'history'

// Redux
import { store } from './redux/store'

// Visual
import LoginRegister from './components/stateful/login-register'
import NavBar from './components/stateless/navbar'


/////////////////
// Routing rules
////////////////

// Store listeners for route
store.subscribe( f => {

	const { user } = store.getState()
	const { location: { pathname: path }, push: link } = History

	// User is logged in, but at login page
	if( [ '/', '/login' ].includes( path ) && user ) link( '/profile' )

	// User is not logged in
	if( !user ) link( '/login' )
} )

export const Routes = ( ) => {

	return <div id="app">
		<NavBar />
		<Switch>
			<Route exact path='/'>
					<Redirect push to='/login' />
			</Route>
			<Route exact path='/login' component={ LoginRegister } />
			<Route exact path='/profile' component={ f => <h1>You are logged in</h1> } />

			<Route component={ f => <h1>The router is having a bad day</h1> } />
		</Switch>
	</div>
}


export const History = createHashHistory()