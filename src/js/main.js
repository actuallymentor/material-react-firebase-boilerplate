import React from 'react'
import ReactDOM from 'react-dom'

// Visual
import LoginRegister from './components/stateful/login-register'

// Data
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

class App extends React.Component {

	// Render the main application element
	render( ) {
		return (

			<Provider store={ store } >
				<PersistGate loading={null} persistor={persistor}>
					<div id="app">
						<LoginRegister />
					</div>
				</PersistGate>
			</Provider>

		)
	}
}


ReactDOM.render( <App />, document.getElementById('container') )