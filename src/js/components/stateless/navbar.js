import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { store } from '../../redux/store'
import { logoutUser } from '../../redux/action/userActions'

export default () => <nav id="sidebar" role='navigation'>

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
			<a href="#" onClick={ f => store.dispatch( logoutUser() ) } >Log Out</a>
		</div>

</nav>