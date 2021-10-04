import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const UserLogOut = (props) => {

    const okPressHandler = () => {
        props.logOutUser()
        props.navigation.navigate('home')
    }

    const notOkPressHandler = () => {
        props.navigation.navigate('home')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>You are about to log out of your account.</Text>
            <Text style={styles.text}>Are you sure you want to log out?</Text>
            <TouchableOpacity style={styles.button} onPress={okPressHandler}>
                <Text style={styles.buttonText}>Yes, I am sure!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={notOkPressHandler}>
                <Text style={styles.buttonText}>No, I want to go back</Text>
            </TouchableOpacity>

        </View>
    )
}

const mapDispatchToProps = {
    logOutUser: usersActions.logOutUser
}

export default connect(null, mapDispatchToProps)(UserLogOut)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b1afff',
    },
    text: {
        fontSize: 18
    },
    button: {
        width: '80%',
        backgroundColor: '#956bff',
        paddingHorizontal: 30,
        paddingVertical: 12,    
        borderRadius: 5,
        marginTop: 40,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }

})
