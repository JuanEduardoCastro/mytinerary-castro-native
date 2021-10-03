import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const CitiesCard = (props) => {

    
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: props.city.item.imgSource }} style={styles.cardImg} resizeMode='cover'>
                <Text style={styles.cardText}>{props.city.item.cityName} </Text>
            </ImageBackground>
        </View>
    )
}

export default CitiesCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 200,
        marginVertical: 10,
        backgroundColor: '#ddd'
    },
    cardImg: {
        width: '100%',
        height: '100%',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
    },
    cardText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    }
})
