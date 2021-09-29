import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Carousel from './components/Carousel'
import Hero from './components/Hero'

const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} scrollsToTop={true} scrollEnabled showVerticalScrollbar={true} >
                <Hero />
                <Carousel />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scroll: {

    },
})
