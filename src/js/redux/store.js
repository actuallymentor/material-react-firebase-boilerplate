import { applyMiddleware, combineReducers, createStore } from 'redux'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'

// Reducers
import userReducer from './reducer/userReducer'

// Redux persistance
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

// Reducers
const reducers = combineReducers( { 
	user: userReducer
} )

// Reducer 'middleware' that wraps around the rest of the reducers
const metaReducer = ( state, action ) => {

	switch( action.type ) {

		// After logging in ( or getting previous session )
		case "GETUSER_FULFILLED":
		case "REGISTERUSER_FULFILLED":
		case "LOGINUSER_FULFILLED":

		break

	}

	return reducers( state, action )
}

const persistedReducer = persistReducer( { key: 'root', storage }, metaReducer )

// Middleware
const middleware = applyMiddleware( logger, promise )


// Export store and persistor
export const store = createStore( persistedReducer, middleware )
export const persistor = persistStore( store )