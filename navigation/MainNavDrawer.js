import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import UserLogOut from '../screens/UserLogOut'
import UserLogIn from '../screens/UserLogIn'
import UserSignUp from '../screens/UserSignUp'
import MainNavStack from './MainNavStack'
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const Drawer = createDrawerNavigator()

const Nav = (props) => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name='home' component={MainNavStack} options={{ 
                headerShown: false
            }}/>
            {!props.token && <Drawer.Screen name='signup' component={UserSignUp} />}
            {!props.token && <Drawer.Screen name='login' component={UserLogIn} />}
            {props.token && <Drawer.Screen name='logOut' component={UserLogOut}  />}

        </Drawer.Navigator>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        userName: state.users.userNameStore,
    }
}

export default connect(mapStateToProps)(Nav)
