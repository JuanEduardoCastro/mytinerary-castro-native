import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Cities from '../screens/Cities'
import City from '../screens/City'
import Home from '../screens/Home'
import UserLogIn from '../screens/UserLogIn'
import UserSignUp from '../screens/UserSignUp'
import MainNavStack from './MainNavStack'

const Drawer = createDrawerNavigator()

const Nav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='home' component={MainNavStack} 
                options={{ headerShown: false }}/>
            <Drawer.Screen name='signup' component={UserSignUp} />
            <Drawer.Screen name='login' component={UserLogIn} />
        </Drawer.Navigator>
    )
}

export default Nav
