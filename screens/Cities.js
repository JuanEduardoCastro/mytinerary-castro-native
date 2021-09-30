import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , ImageBackground, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import CitiesCard from './components/CitiesCard';

const Cities = (props) => {

    const [inputFilter, setInputFilter] = useState('')
    const [citiesList, setCitiesList] = useState([])

    useEffect(() => {
        async function getCitiesList() {
            try {
                await props.getCitiesList()

            } catch (error) {
                console.log(error)
            }
        }
        getCitiesList()
        
    }, [])
    
    const inputFilterHandler = (e) => {
        console.log(e.target)
    }    

    return (
        <View style={styles.container}>
            <View style={styles.containerHero}>
                <ImageBackground source={require('../assets/turismo04.jpeg')} style={styles.imgHero} resizeMode='cover'>
                    <TextInput 
                    style={styles.textInput}
                    onChangeText={inputFilterHandler}
                    value={inputFilter}
                    placeholder="Find a city to explore" />
                </ImageBackground>
            </View>
            <View style={styles.citiesList}>
                <FlatList
                    data={props.citiesList}
                    keyExtractor={( city ) => city._id}
                    renderItem={( city ) => {
                        return (
                            <TouchableOpacity style={styles.cardLink} onPress={() => props.navigation.navigate('city', { id: city.item._id })}>
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
    }
}

const mapDispatchToProps = {
    getCitiesList: citiesActions.getCitiesList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    containerHero: {
        width: '100%',
        height: '40%',
        
    },
    imgHero: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '75%',
        height: '8%',
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 180
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
