import axios from 'react-native-axios'

const citiesActions = {
    getCitiesList: () => {
        return async (dispatch) => {
            let response = await axios.get('https://mytinerary-castro.herokuapp.com/api/information/cities')
            if (!response.data.success) {
                throw new Error("Error with database")
            }
            let data = response.data.response
            dispatch({ type: 'GET_CITIES_LIST', payload: data })
        }
    },

    // getCitiesFiltered: (letter) => {
    //     return (dispatch) => {
    //         dispatch({ type: 'GET_CITIES_FILTERED', payload: letter })
    //     }
    // },

    // getUniqueCity: (id) => {
    //     return (dispatch) => {
    //         dispatch({ type: 'GET_UNIQUE_CITY', payload: id })
    //     }
    // },
}

export default citiesActions