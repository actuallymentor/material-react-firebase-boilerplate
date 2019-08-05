import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// Routing, using HashRouter instead of BrowserRouter tomake sure no server-side config is needed
import {  Router } from 'react-router-dom'
import { Routes, History } from './routes'

class App extends React.Component {

	// Render the main application element
	render( ) {
		return (

			<Provider store={ store } >
				<PersistGate loading={null} persistor={ persistor }>
					<Router history={ History }>
						<Routes />
					</Router>
				</PersistGate>
			</Provider>

		)
	}
}


ReactDOM.render( <App />, document.getElementById('container') )