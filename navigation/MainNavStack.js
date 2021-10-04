import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cities from '../screens/Cities'
import City from '../screens/City'
import Home from '../screens/Home'
import Activities from '../screens/Activities'
import Entypo from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const Nav = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#956bff',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
            },
            headerTintColor: 'black',
            // headerRigth: () => (<Button titel='boton' color='black' onPress={() => console.log("menu")} /> )
        }}>
            <Stack.Screen name='home' component={Home} options={{
                title: 'Mytinerary',
                headerRigth: () => (<Entypo name='menu' size={20} color='black' /> ),

            }}/>
            <Stack.Screen name='cities' component={Cities} options={{
                title: 'Cities'
            }}/>
            <Stack.Screen name='city' component={City} options={({ route }) => ({ title: route.params.name })}/>
            <Stack.Screen name='activities' component={Activities} option={{
                title: 'Activities',
            }}/>            
        </Stack.Navigator>
    )
}

export default Nav