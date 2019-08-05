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


const persistedReducer = persistReducer( { key: 'root', storage }, reducers )

// Middleware
const middleware = applyMiddleware( logger, promise )


// Export store and persistor
export const store = createStore( persistedReducer, middleware )
export const persistor = persistStore( store )