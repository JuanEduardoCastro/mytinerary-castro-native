import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , ImageBackground, TextInput, FlatList} from 'react-native'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

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
            <ImageBackground source={require('../assets/turismo04.jpeg')} style={styles.imgHero} resizeMode='cover'>
                <TextInput 
                style={styles.textInput}
                onChangeText={inputFilterHandler}
                value={inputFilter}
                placeholder="Find a city to explore" />
            </ImageBackground>
            {/* <View style={styles.citiesList}>
                <FlatList
                    data={props.citiesList}
                />
            </View> */}
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
    },
    imgHero: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '80%',
        height: '5%',
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderRadius: 5,
        paddingHorizontal: 10
    },
})
