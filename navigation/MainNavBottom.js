import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cities from '../screens/Cities'
import City from '../screens/City'
import Home from '../screens/Home'
import UserLogIn from '../screens/UserLogIn'
import UserSignUp from '../screens/UserSignUp'

const Bottom = createBottomTabNavigator()

const Nav = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name='home' component={Home} />
            <Bottom.Screen name='cities' component={Cities} />
            <Bottom.Screen name='city' component={City} />
            <Bottom.Screen name='signup' component={UserSignUp} />
            <Bottom.Screen name='login' component={UserLogIn} />
        </Bottom.Navigator>
    )
}

export default Nav
