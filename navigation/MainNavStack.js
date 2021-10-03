import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cities from '../screens/Cities'
import City from '../screens/City'
import Home from '../screens/Home'
import Activities from '../screens/Activities'

const Stack = createNativeStackNavigator()

const Nav = () => {
    return (
        <Stack.Navigator options={{}}>
            <Stack.Screen name='home' component={Home} options={{
                title: 'Mytinerary'
            }}/>
            <Stack.Screen name='cities' component={Cities} />
            <Stack.Screen name='city' component={City} />
            <Stack.Screen name='activities' component={Activities} />            
        </Stack.Navigator>
    )
}

export default Nav