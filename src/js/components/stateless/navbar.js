import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
// import { store } from '../../redux/store'
import { logoutUser } from '../../redux/action/userActions'
import { connect } from 'react-redux'

// Navigation element
// It uses an invisible input/label pair to manage CSS based drawer state
const Navigation = ( { user, dispatch } ) => <nav id="sidebar" role='navigation'>

		<input id='togglemenu' type='checkbox' hidden />
		<div id='toggle'>
			<label htmlFor='togglemenu'>Menu</label>
			<div id='hamburger'>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>

		<div id="panel">
			<Link id='homelink' to='/'>Home</Link>
			{ user && <a href="#" onClick={ f => dispatch( logoutUser() ) } >Log Out</a> }
		</div>

</nav>

export default connect( store => ( { user: store.user ? true : false } ) )( Navigation )