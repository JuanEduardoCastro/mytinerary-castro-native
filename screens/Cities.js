import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , ImageBackground, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import CitiesCard from './components/CitiesCard'
import Loader from './Loader'

const Cities = (props) => {

    const [inputValue, setInputValue] = useState('')
    const [loader, setLoader] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getCitiesList() {
            try {
                await props.getCitiesList()
                setLoader(false)
            } catch (error) {
                console.log(error)
                setLoader(false)
                setError(error)
                return false
            }
        }
        getCitiesList()
        
    }, [])
    
    if (loader) {
        return (<View><Loader /></View>)
    }

    const inputFilterHandler = (e) => {
        props.getCitiesFiltered(e.nativeEvent.text)
        setInputValue(e.nativeEvent.text)
    }    

    const citiesForRender = inputValue === '' ? props.citiesList : props.citiesFiltered

    return (
        <View style={styles.container}>
            <View style={styles.containerHero}>
                <ImageBackground source={require('../assets/turismo04.jpeg')} style={styles.imgHero} resizeMode='cover'>
                    <TextInput 
                    style={styles.textInput}
                    onChange={inputFilterHandler}
                    value={inputValue}
                    placeholder="Find a city to explore" />
                </ImageBackground>
            </View>
            <View style={styles.citiesList}>
                <FlatList
                    data={citiesForRender}
                    keyExtractor={( city ) => city._id}
                    renderItem={( city ) => {
                        return (
                            <TouchableOpacity style={styles.cardLink} 
                            onPress={() => props.navigation.navigate('city', { id: city.item._id, cityName: city.item.cityName })}>
                                <CitiesCard city={city} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        citiesList: state.cities.citiesListStore,
        citiesFiltered: state.cities.citiesFilteredStore
    }
}

const mapDispatchToProps = {
    getCitiesList: citiesActions.getCitiesList,
    getCitiesFiltered: citiesActions.getCitiesFiltered
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    containerHero: {
        width: '100%',
        height: '35%',
        
    },
    imgHero: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '75%',
        height: '12%',
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: '30%',
        fontSize: 18,
    },

    // cities
    citiesList: {
        flex: 1,
        width: '95%',
        height: '100%',
        paddingVertical: 12,
    },
    cardLink: {

    },
})
