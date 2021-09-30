import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'


const Home = () => {

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
                        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('te lleva a cities')}>
                            <Text style={styles.buttonText}>Cities</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <View style={styles.containerCarousel}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Popular Mytineraries</Text>
                    </View>
                    <Swiper style={styles.swiperTag} autoplay={false} height={'100%'} >
                        <View style={styles.slide1}>
                            <ImageBackground source={{ uri: citiesImg[0].img }} style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>{citiesImg[0].cityName}</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.slide1}>
                            <ImageBackground source={{ uri: citiesImg[1].img }} style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>{citiesImg[1].cityName}</Text>
                            </ImageBackground>
                        </View> 
                        {/* {citiesImg.map((city, index) => {
                            <View style={styles.slide1} key={index}>
                                <ImageBackground source={{ uri: city.img }} style={styles.slideImg} resizeMode='cover'>
                                    <Text style={styles.slideText}>{city.cityName}</Text>
                                </ImageBackground>
                            </View>
                        })} */}
                    </Swiper>
                    {/* <Swiper style={styles.swiperTag} autoplay={false} height={'90%'} >
                        <View style={styles.slide1}>
                            <ImageBackground source={require('../assets/cities/hong_kong_06.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>HONG KONG</Text>
                            </ImageBackground>
                            <ImageBackground source={require('../assets/cities/bangkok02.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>BANGKOK</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.slide1}>
                            <ImageBackground source={require('../assets/cities/macau05.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>MACAU</Text>
                            </ImageBackground>
                            <ImageBackground source={require('../assets/cities/singapore05.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>SINGAPORE</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.slide1}>
                            <ImageBackground source={require('../assets/cities/london01.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>LONDON</Text>
                            </ImageBackground>
                            <ImageBackground source={require('../assets/cities/paris01.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>PARIS</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.slide1}>
                            <ImageBackground source={require('../assets/cities/dubai04.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>DUBAI</Text>
                            </ImageBackground>
                            <ImageBackground source={require('../assets/cities/delhi05.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>DELHI</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.slide1}>
                            <ImageBackground source={require('../assets/cities/istambul01.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>ISTANBUL</Text>
                            </ImageBackground>
                            <ImageBackground source={require('../assets/cities/kualalumpur01.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>KUALALUMPUR</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.slide1}>
                            <ImageBackground source={require('../assets/cities/new_york02.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>NEW YORK</Text>
                            </ImageBackground>
                            <ImageBackground source={require('../assets/cities/shenzhen01.jpeg')}style={styles.slideImg} resizeMode='cover'>
                                <Text style={styles.slideText}>SHENZHEN</Text>
                            </ImageBackground>
                        </View>
                    </Swiper> */}
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
        flex: 2,
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
    swiperTag: {
        backgroundColor: 'red',
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
    },
})
