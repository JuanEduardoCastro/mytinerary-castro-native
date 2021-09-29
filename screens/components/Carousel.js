import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

const Carousel = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Popular Mytineraries</Text>
            </View>
            <Swiper style={styles.swiperTag} autoplay={false} height={'90%'} >
                <View style={styles.slide1}>
                    <ImageBackground source={require('../../assets/cities/hong_kong_06.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>HONG KONG</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/cities/bangkok02.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>BANGKOK</Text>
                    </ImageBackground>
                </View>
                <View style={styles.slide1}>
                    <ImageBackground source={require('../../assets/cities/macau05.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>MACAU</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/cities/singapore05.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>SINGAPORE</Text>
                    </ImageBackground>
                </View>
                <View style={styles.slide1}>
                    <ImageBackground source={require('../../assets/cities/london01.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>LONDON</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/cities/paris01.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>PARIS</Text>
                    </ImageBackground>
                </View>
                <View style={styles.slide1}>
                    <ImageBackground source={require('../../assets/cities/dubai04.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>DUBAI</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/cities/delhi05.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>DELHI</Text>
                    </ImageBackground>
                </View>
                <View style={styles.slide1}>
                    <ImageBackground source={require('../../assets/cities/istambul01.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>ISTANBUL</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/cities/kualalumpur01.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>KUALALUMPUR</Text>
                    </ImageBackground>
                </View>
                <View style={styles.slide1}>
                    <ImageBackground source={require('../../assets/cities/new_york02.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>NEW YORK</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/cities/shenzhen01.jpeg')}style={styles.slideImg} resizeMode='cover'>
                        <Text style={styles.slideText}>SHENZHEN</Text>
                    </ImageBackground>
                </View>
            </Swiper>
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    container: {

        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },

    title: {
        width: '100%',
        height: 30,
        marginVertical: 10,
    },

    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    slide1: {
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    slideImg: {
        width: '100%',
        height: 300,
    }, 

    slideText: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },

})


// [ {ubicacion: "hong_kong_06.jpeg", nombre: "Hong Kong"},
//     {ubicacion: "bangkok02.jpeg", nombre: "Bangkok"},

//     {ubicacion: "macau05.jpeg", nombre: "Macau"},
//     {ubicacion: "singapore05.jpeg", nombre: "Singapore"} ],  

//     [ {ubicacion: "london01.jpeg", nombre: "London"},  
//     {ubicacion: "paris01.jpeg", nombre: "Paris"},  

//     {ubicacion: "dubai04.jpeg", nombre: "Dubai"},  
//     {ubicacion: "delhi05.jpeg", nombre: "Delhi"} ],

//     [ {ubicacion: "istambul01.jpeg", nombre: "Istanbul"},  
//     {ubicacion: "kualalumpur01.jpeg", nombre: "Kuala Lumpur"},  

//     {ubicacion: "new_york02.jpeg", nombre: "New York"},  
//     {ubicacion: "shenzhen01.jpeg", nombre: "Shenzhen"} ]
