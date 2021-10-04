import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import usersActions from '../redux/actions/usersActions'
import { connect } from 'react-redux'


const UserLogIn = (props) => {

    const [loginData, setLoginData] = useState({ userEmail: '', userPassword: '' })    

    const storeData = async () => {
        try {
          await AsyncStorage.setItem('token', props.token)
          await AsyncStorage.setItem('userName', props.userName)
          await AsyncStorage.setItem('userPhoto', props.userPhoto)
        } catch (error) {
          console.log(error)
        }
      }
    
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          const userName = await AsyncStorage.getItem('userName')
          const userPhoto = await AsyncStorage.getItem('userPhoto')
        } catch (error) {
          console.log(error)
        }
      }

      const removeValue = async () => {
          try {
              await AsyncStorage.removeItem('token')
          } catch (error) {
              console.log(error)
          }
      }

      const sendUserDataHandler = async () => {
        let response = await props.logInUser(loginData)
        if (response.data.success) {
            storeData()
            console.log("esta adentro", response )
            props.navigation.navigate('home', { user: props })
        } else {
            console.log(response.data.error)
        }
      }



    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.form}>
                    <Text style={styles.title}>Log In here</Text>
                    <TextInput 
                        style={styles.emailInput}
                        onChange={(e) => setLoginData({ ...loginData, userEmail: e.nativeEvent.text})}
                        placeholder="* Enter your email" 
                        keyboardType='email-address' />
                    <TextInput 
                        style={styles.emailInput}
                        onChange={(e) => setLoginData({ ...loginData, userPassword: e.nativeEvent.text})}
                        placeholder="* Enter your password" 
                        secureTextEntry={true} />
                    <TouchableOpacity style={styles.button} onPress={sendUserDataHandler}>
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableOpacity>
                    <View style={styles.loginLine}>
                        <Text style={styles.textForLogIn}>If you don`t have an account,</Text>
                    </View>
                    <View style={styles.viewForLogIn}>
                        <Text style={styles.textForLogIn}>please click here to</Text>
                        <TouchableOpacity style={styles.login} onPress={() => props.navigation.navigate('signup')}>
                            <Text style={styles.loginText}>Sign Up!!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        userName: state.users.userNameStore,
        userPhot: state.users.userPhotoStore
    }
}

const mapDispatchToProps = {
    logInUser: usersActions.logInUser
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLogIn)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#b1afff',
        alignItems: `center`,
    },
    form: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    title: {

        width: '100%',
        height: 50,
        textAlign: 'center',
        fontSize: 26,
        paddingTop: 10,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    emailInput: {
        width: '80%',
        height: 35,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#8483be',
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 18,
        marginTop: 20,
    },
    selectView: {
        width: '80%',
        height: 35,
        backgroundColor: 'white',
        fontSize: 14,
        paddingHorizontal: 12,
        paddingTop: 5,
        borderWidth: 1,
        borderColor: '#8483be',
        borderRadius: 5,
        color: 'black',
        paddingRight: 30,
        fontSize: 18,
        marginTop: 20,
    },  
    selectInput: {
        fontSize: 24,
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
        textAlign: 'center',
    },
    loginLine: {
        width: '80%',
        marginTop: 20,
    },
    viewForLogIn: {
        width: '80%',
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textForLogIn: {
        fontSize: 16,
        textAlign: 'center',
    },
    loginText: {
        marginLeft: 4,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#956bff'
    }
})

