import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from '../stateless/generic'

// Data
import app from '../modules/firebase'
import { valuesFromEvent } from '../modules/helpers'

export default class LoginRegister extends Component {

	constructor( props ) {

		super( props )

		this.state = {
			action: 'login'
		}

		this.toggleAction = this.toggleAction.bind( this )
		this.handleSumbit = this.handleSumbit.bind( this )
	}

	toggleAction( e ) {
		e.preventDefault()
		const { action } = this.state
		return this.updateState( { action: action == 'login' ? 'register' : 'login' } )
	}

	async handleSumbit( e ) {
		e.preventDefault()
		const { action } = this.state
		const { name, email, password } = valuesFromEvent( e )
		await action == 'register' ? app.registerUser( name, email, password ) : app.loginUser( email, password )
	}


	render( ) {

		const { action } = this.state

		setInterval( f => console.log( app.user.email ), 1000 )

		return <div className="card">
			<p>Logged in as { app.user && app.user.email }</p>
			<form onSubmit={ this.handleSumbit } >
				<h2>{ action }</h2>
				{ action == 'register' && <input name="name" type='text' placeholder="name" /> }
				<input name="email" type="email" placeholder="email" autoComplete="email" />
				<input name="password" type="password" placeholder="password" autoComplete="current-password" />
				<input type="submit" value={ action } />
				<a onClick={ this.toggleAction } href="#">Or { action == 'login' ? 'register' : 'login' } instead</a>
			</form>
		</div>
	}

}