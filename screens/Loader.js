import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'
import AnimatedSplash from 'react-native-animated-splash-screen'

const Loader = () => {

    return (
        <View style={styles.container}>
                <Image style={styles.logo} source={{ uri: 'https://i.imgur.com/slgCIZZ.png'}} resizeMode='contain'></Image>
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#956bff',
    },
    logo: {
        width: '60%',
        height: '60%',
    },
})
