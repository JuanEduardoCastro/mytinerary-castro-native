import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'


const Home = (props) => {

    const citiesImg = [
        {img: 'https://i.imgur.com/bXzGZIi.jpg', cityName: "Hong Kong"},
        {img: 'https://i.imgur.com/rNw63tu.jpg', cityName: "Bangkok"},
        {img: 'https://i.imgur.com/qBrGYqH.jpg', cityName: "Macau"},
        {img: 'https://i.imgur.com/xt87N72.jpg', cityName: "Singapore"},  
        {img: 'https://i.imgur.com/kjy5aEG.jpg', cityName: "London"},  
        {img: 'https://i.imgur.com/drKcfng.jpg', cityName: "Paris"},  
        {img: 'https://i.imgur.com/b3rIQP5.jpg', cityName: "Dubai"},  
        {img: 'https://i.imgur.com/wo1JVfw.jpg', cityName: "Delhi"},
        {img: 'https://i.imgur.com/jiFxG5M.jpg', cityName: "Istanbul"},  
        {img: 'https://i.imgur.com/0s4VZUY.jpg', cityName: "Kuala Lumpur"},  
        {img: 'https://i.imgur.com/4AltDFO.jpg', cityName: "New York"},  
        {img: 'https://i.imgur.com/ytES0w8.jpg', cityName: "Shenzhen"}
    ]
    
    return (
        <View style={styles.container}>
            <View style={styles.containerHero}>
                <ImageBackground source={require('../assets/hero.jpg')} style={styles.background} resizeMode='cover'>
                    <Text style={styles.text}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate('cities')}}>
                        <Text style={styles.buttonText}>Cities</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.containerCarousel}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Popular Mytineraries</Text>
                </View>
                <Swiper style={styles.swiperTag} height={'100%'} >
                    {citiesImg.map((city, index) => {
                        return (
                        <View style={styles.slide1} key={index}>
                            <ImageBackground source={{ uri: city.img }} style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>{city.cityName}</Text>
                            </ImageBackground>
                        </View>        
                        )
                    })}
                </Swiper>
            </View>
            <View style={styles.footer}>
                <Text style={styles.fotterText}>© Mytinerary || Juan Eduardo Castro Trujillo</Text>
            
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scroll: {
        flex: 2,
    },

    // hero
    containerHero: {
        flex: 1,
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
        marginBottom: 8,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#956bff',
        paddingHorizontal: 30,
        paddingVertical: 10,    
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 24,
    },

    // carousel
    containerCarousel: {
        flex: 1,
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    title: {
        width: '100%',
        height: 30,
        marginVertical: 15,
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    slide1: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    slideImg: {
        width: '100%',
        height: '100%',
    }, 
    slideText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
    },

    footer: {
        width: '100%',
        height: '7%',
        backgroundColor: '#956bff',
        alignItems: 'center',
        paddingTop: 5,
    },
    footerText: {
        fontSize: 10,

    }
})
