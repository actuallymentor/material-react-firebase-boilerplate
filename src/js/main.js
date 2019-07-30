import React from 'react'
import ReactDOM from 'react-dom'

// Visual
import LoginRegister from './stateful/login-register'

// Data
import { user } from './modules/firebase'

class App extends React.Component {

	// Render the main application element
	render( ) {
		return <div id="app">
			<LoginRegister />
		</div>
	}
}


ReactDOM.render( <App />, document.getElementById('container') )