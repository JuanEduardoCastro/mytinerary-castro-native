import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
import { NavigationContainer } from '@react-navigation/native'
import Nav from './navigation/MainNavDrawer'

const myStore = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {

  return (
    <NavigationContainer>
      <Provider store={myStore} >
        {<Nav />}
      </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
