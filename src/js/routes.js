import React from 'react'
import ReactDOM from 'react-dom'

// Routing
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { createHashHistory } from 'history'

// Redux
import { store } from './redux/store'
import { connect } from 'react-redux'

// Visual
import LoginRegister from './components/stateful/login-register'
import NavBar from './components/stateless/navbar'


/////////////////
// Routing rules
////////////////

// // Store listeners for route
// store.subscribe( f => {

// 	const { user } = store.getState()
// 	const { location: { pathname: path }, push: link } = History

// 	console.log( path )

// 	// User is logged in, but at login page
// 	if( [ '/', '/login' ].includes( path ) && user ) link( '/profile' )

// 	// User is not logged in
// 	if( !user ) link( '/login' )
// } )

class RouteMan extends React.Component {

	// When the state and/or history update
	componentDidUpdate( ) {

		// Get user status, current path and push function
		const { user, history: { push }, location: { pathname: path } } = this.props

		// User is logged in, but at login page
		if( [ '/', '/login' ].includes( path ) && user ) push( '/profile' )

		// User is not logged in
		if( !user ) push( '/login' )
	}

	render( ) {

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

}

export const Routes = withRouter( connect( store => ( {
	user: store.user ? true : false
} ) )( RouteMan ) )


export const History = createHashHistory()