import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native'
import RNPickerSlect from 'react-native-picker-select'

const UserSignUp = () => {

    const [inputFilter, setInputFilter] = useState('')
    const [userData, setUserData] = useState({ userEmail: '', userPassword: '', userName: '', userLastName: '', userPhoto: '' })    

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.form}>
                    <Text style={styles.title}>Sign Up here</Text>
                    <TextInput 
                        style={styles.emailInput}
                        onChange={(e) => setUserData({ ...userData, userEmail: e.nativeEvent.text})}
                        placeholder="* Enter your email" />
                    <TextInput 
                        style={styles.emailInput}
                        onChange={(e) => setUserData({ ...userData, userPassword: e.nativeEvent.text})}
                        placeholder="* Enter your password" />
                    <TextInput 
                        style={styles.emailInput}
                        onChange={(e) => setUserData({ ...userData, userName: e.nativeEvent.text})}
                        placeholder="* Enter your first name" />
                    <TextInput 
                        style={styles.emailInput}
                        onChange={(e) => setUserData({ ...userData, userLastName: e.nativeEvent.text})}
                        placeholder="* Enter your last name" />
                    <TextInput 
                        style={styles.emailInput}
                        onChange={(e) => setUserData({ ...userData, userPhoto: e.nativeEvent.text})}
                        placeholder="* Enter your photo url" />
                    <View style={styles.selectView}>
                        <RNPickerSlect
                        style={{ ...pickerSelectStyles }}
                        placeholder={{ label: '* Select a country', value: '' }}
                        onValueChange={(value) => console.log(value)}
                        items={[ 
                            { label: 'pais1', value: 'pais1' },
                            { label: 'pais2', value: 'pais2' },
                            { label: 'pais3', value: 'pais3' },
                        ]} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert("manda los datos del usuario")}>
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableOpacity>
                    <View style={styles.loginLine}>
                        <Text style={styles.textForLogIn}>If you already have an account,</Text>
                    </View>
                    <View style={styles.viewForLogIn}>
                        <Text style={styles.textForLogIn}>please click here to</Text>
                        <TouchableOpacity style={styles.login} onPress={() => Alert.alerta("me lleva a login")}>
                            <Text style={styles.loginText}>Log In!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default UserSignUp 

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

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 18,
    }
})
