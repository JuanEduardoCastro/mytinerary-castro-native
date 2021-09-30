import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

const City = (props) => {

    const city = {
        "_id": "611aab05ca329a1257bdee44",
      "cityName": "Hong Kong",
      "codeISO": "HKD",
      "continent": "Asia",
      "coordinates": 0,
      "countryName": "China",
      "currency": "Hong Kong dollar",
      "currencySymbol": "$",
      "description": "Hong Kong has an energy about it that is hard to describe. Around every corner is something new and unique, whether it's an ancient temple, a shop selling the latest electronic gadget, or a man taking his bird in a cage for a walk.",
      "flag": "https://i.imgur.com/a3jvS8M.png",
      "imgSource": "https://i.imgur.com/ZcZxms2.jpg",
      "language": [
        "Chinese",
        "English",
      ],
      "textColorTag": true,
    }
    console.log(props)
    useEffect(() => {
        async function getUniqueCity() {
            try {
                await props.getUniqueCity(props.route.params.id)
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
                    <ImageBackground source={{ uri: props.city.flag }} style={styles.cityFlag} resizeMode='cover' >
                    </ImageBackground>
                    
                    
                </View>
                <View style={styles.itinerariesList}>
                    {/* <FlatList 
                        data={city.}
                        keyExtractor={}
                        renderItem={}
                    /> */}
                </View>

            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        city: state.cities.cityStore
    }
}

const mapDispatchToProps = {
    getUniqueCity: citiesActions.getUniqueCity
}

export default connect(mapStateToProps,mapDispatchToProps)(City)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerImg: {
        width: '100%',
        height: '30%',
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
        justifyContent: 'center'
    },
    cityFlag: {
        width: '45%',
        height: '80%',
    }
})
