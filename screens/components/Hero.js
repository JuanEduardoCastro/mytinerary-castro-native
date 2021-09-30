import React from 'react'
import { Alert, Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Carousel from './Carousel'

const Hero = () => {
    return (
        <View style={styles.containerHome}>
            <ImageBackground source={require('../../assets/hero.jpg')} style={styles.background} resizeMode='cover'>
                <Text style={styles.text}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('te lleva a cities')}>
                    <Text style={styles.buttonText}>Cities</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Hero

const styles = StyleSheet.create({
    conntainerHome: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        paddingHorizontal: 24,
        marginBottom: 60,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#956bff',
        paddingHorizontal: 30,
        paddingVertical: 12,    
        borderRadius: 5,
        marginTop: 40,
    },
    buttonText: {
        fontSize: 24,
    }
})
