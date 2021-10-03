import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import Itinerary from './components/Itinerary'

const City = (props) => {

    useEffect(() => {
        async function getUniqueCity() {
            try {
                await props.getUniqueCity(props.route.params.id)
                await props.getItinerariesOfACity(props.route.params.id)
            } catch (error) {
                console.log(error)
            }
        }
        getUniqueCity()
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <ImageBackground source={{ uri: props.city.imgSource }} style={styles.cityImg} resizeMode='cover'>
                    <Text style={styles.cityText}>{props.city.cityName}</Text>
                </ImageBackground>
                <View style={styles.cityInfoLine}>
                    <Image source={{ uri: props.city.flag }} style={styles.cityFlag} resizeMode='cover' />
                    <View style={styles.coinIcon}>
                        <FontAwesome5 name='coins' size={20} color='black' />
                        <Text style={styles.coinText} >{props.city.codeISO}</Text>
                    </View>
                    <View style={styles.languageIcon}>
                        <MaterialIcons name='translate' size={20} color='black' />
                        <Text style={styles.languageText}>{props.city.language}</Text>
                    </View>
                </View>
            </View>    
            <View style={styles.containerItinerary}>
                <View style={styles.itinerariesTitle}>
                    <Text style={styles.titleText}>Mytineraries</Text>
                </View>
                <View style={styles.itinerariesList}>
                    <FlatList 
                        data={props.itinerariesList}
                        keyExtractor={( itinerary ) => itinerary._id}
                        renderItem={( itinerary ) => {
                            return (
                                <View style={styles.itineraryCard} >
                                    <Itinerary itinerary={itinerary} navigation={props.navigation} />
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        city: state.cities.cityStore,
        itinerariesList: state.itineraries.itinerariesOfACityStore,
    }
}

const mapDispatchToProps = {
    getUniqueCity: citiesActions.getUniqueCity,
    getItinerariesOfACity: itinerariesActions.getItinerariesOfACity
}

export default connect(mapStateToProps,mapDispatchToProps)(City)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerImg: {
       height: '25%'
    },
    cityImg: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    cityText: {
        width: '100%',
        height: 35,
        backgroundColor: '#ddd',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
    },
    cityInfoLine: {
        width: '100%',
        height: '35%',
        backgroundColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cityFlag: {
        width: '25%',
        height: '80%',
    },
    coinIcon: {
        width: '25%',
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    coinText: {
        fontSize: 16,
        marginLeft: '6%'
    },
    languageIcon: {
        width: '28%',
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    languageText: {
        width: '60%',
        fontSize: 16,
        marginLeft: '6%',
    },


    containerItinerary: {
        flex: 1,
        paddingTop: 64,
        alignItems: 'center'
    },
    itinerariesTitle: {
        width: '100%',
        height: '8%',
        justifyContent: 'center',
        marginTop: 15,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    itinerariesList: {
        flex: 1,
        width: '95%',
        height: '100%',
        paddingVertical: 12,
    },
    
})
