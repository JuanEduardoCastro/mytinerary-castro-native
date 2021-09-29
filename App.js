import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cities from './screens/Cities'
import Home from './screens/Home'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'

const myStore = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {

  return (
    <Provider store={myStore} >
      {/* <Home /> */}
      <Cities />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
