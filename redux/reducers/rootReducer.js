import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import usersReducer from './usersReducer'
import itinerariesReducer from './itinerariesReducer'

const rootReducer = combineReducers({
    cities: citiesReducer,
    user: usersReducer,
    itineraries: itinerariesReducer,
})

export default rootReducer

