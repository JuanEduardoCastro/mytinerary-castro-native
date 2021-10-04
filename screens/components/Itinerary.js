import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { Image, TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native'

const Itinerary = (props) => {

    let price = []
    for (let i = 0; i < props.itinerary.item.price; i++) {
        price.push(<FontAwesome5 name='money-bill-alt' key={i} size={24} color='green' style={styles.moneyIcon}/>)
    }

    // console.log(props.itinerary)

    return (
        <View style={styles.container}>
            <View style={styles.containerSize}>
                <Text style={styles.titleText}>{props.itinerary.item.itineraryName}</Text>
                <Image source={{ uri: props.itinerary.item.itineraryPhoto }} style={styles.cardImg} resizeMode='cover' />
                <View style={styles.authorCard}>
                    <View style={styles.author}>
                        <Image source={{ uri: props.itinerary.item.authorPhoto}} style={styles.authorImg} resizeMode='cover' />
                        <Text style={styles.authorName}>{props.itinerary.item.authorName}</Text>
                    </View>
                    <View style={styles.likes}>
                        <TouchableOpacity style={styles.like} onPress={() => Alert.alert("You must be logged in to like a itinerary")} >
                            <AntDesign name='hearto' size={26} color='black' />
                        </TouchableOpacity>
                        <Text style={styles.likesNumber}>{props.itinerary.item.likes}</Text>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>{props.itinerary.item.introSentence}</Text>
                </View>
                <View style={styles.hashtagsLine}>
                    {props.itinerary.item.hashtags.map((hashtag, index) => {
                        return <Text style={styles.hashtagText} key={index}>#{hashtag}</Text>
                    })}
                </View>
                <View style={styles.price}>
                    <Text style={styles.priceText}>Price:</Text>
                    {price.map(bill => {
                        return bill
                    })}
                </View>
                <View style={styles.time}>
                    <AntDesign name='clockcircle' size={24} color='black' />
                    <Text style={styles.timeText}>{props.itinerary.item.duration} hours</Text>
                </View>
                <View style={styles.activitiesButton}>
                    <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate('activities', {id: props.itinerary.item._id} )}}>
                        <Text style={styles.buttonText}>Go to activities</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
        </View>
    )
}

export default Itinerary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        minHeight: 750,
    },
    containerSize: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20
    },  
    titleText: {
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 8,
    },
    cardImg: {
        width: '95%',
        height: '40%',
    },

    authorCard: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        marginTop: 20
    },
    author: {
        width: '70%',
        minHeight: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    nameLine: {
        height: '20%',
        justifyContent: 'center'
    }, 
    authorName: {
        fontSize:20,
        paddingLeft: 8,
    },
    authorImg: {
        width: '30%',
        height: '100%',
        borderRadius: 50,
    },
    likes: {
        width: '30%',
        minHeight: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 8
    },
    likesNumber: {
        fontSize: 20,
        paddingLeft: 8,
    },

    description: {
        width: '100%',
        height: '18%',
        padding: 10,
    },
    descriptionText: {
        textAlign: 'justify',
        fontSize: 15,
        paddingHorizontal: 10
    },
    hashtagsLine: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    hashtagText: {
        width: '33%',
        height: '100%',
        color: 'gray',
        paddingHorizontal: 20
    },
    price: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    priceText: {
        fontSize: 16,
    },
    moneyIcon: {
        marginLeft: 8,
    },
    time: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    timeText: {
        marginLeft: 8
    },
    activitiesButton: {
        width: '60%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#956bff',
        paddingHorizontal: 30,
        paddingVertical: 12,    
        borderRadius: 5,
        marginTop: 15,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
    }



})
