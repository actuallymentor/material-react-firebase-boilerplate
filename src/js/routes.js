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
import { Loading } from './components/stateless/generic'

class RouteMan extends React.Component {



	///////////////////////////////////////////////////
	// Redirect rules
	// Triggered when the state and/or history update
	///////////////////////////////////////////////////

	componentWillReceiveProps( nextProps ) {
		// Redux
		const { dispatch } = nextProps


		// Get user status, current path and push function
		const { user, history: { push }, location: { pathname: path } } = nextProps

		// User is logged in, but at login page
		if( [ '/', '/login' ].includes( path ) && user ) push( '/profile' )

		// User is not logged in
		if( path != '/login' && !user ) push( '/login' )
	}

	render( ) {

		const { loadingMessage } = this.props

		return <div id="app">

			{ /* Menu is always shown, regardless of route */ }
			<NavBar />

			{ /* Show loading spinner on top if loader is on */ }
			{ loadingMessage && <Loading message={ loadingMessage } /> }

			{ /* These are the routes configured in the app */ }
			<Switch>
				<Route exact path='/'>
						<Redirect push to='/login' />
				</Route>
				<Route exact path='/login' component={ LoginRegister } />
				<Route exact path='/profile' component={ f => <h1>You are logged in</h1> } />

				<Route component={ f => <h1>Router default</h1> } />
			</Switch>
		</div>
	}

}

// To give the Routeman access to redux and the routing history etc we connect it to both
export const Routes = withRouter( connect( store => ( {
	user: store.user ? true : false,
	loadingMessage: store.loadingMessage
} ) )( RouteMan ) )

// Create and export history object
// Using hash type ( /#/ ) so that we don't need server-side config to prevent 404s
export const History = createHashHistory()