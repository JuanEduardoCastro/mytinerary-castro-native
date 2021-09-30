import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cities from './screens/Cities'
import Home from './screens/Home'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
import UserSignUp from './screens/UserSignUp'
import UserLogIn from './screens/UserLogIn'
import City from './screens/City'

const myStore = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {

  return (
    <Provider store={myStore} >
      {/* <Home /> */}
      {/* <Cities />  */}
      <City />
      {/* <UserSignUp /> */}
      {/* <UserLogIn /> */}
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
