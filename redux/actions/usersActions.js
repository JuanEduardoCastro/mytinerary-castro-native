import axios from 'axios'

const usersActions = {

    addNewUser: (userData) => {
        return async (dispatch) => {
            let response = await axios.post('https://mytinerary-castro.herokuapp.com/api/user/signup', { ...userData })
            if (response.data.success) {
                dispatch({ type: 'LOG_IN_USER', payload: response.data.response })
            }
            return response
        }
    },

    logInUser: (logInData) => {
        return async (dispatch) => {
            let response = await axios.post('https://mytinerary-castro.herokuapp.com/api/user/login', { ...logInData })
            if (response.data.response) {
                dispatch({ type: 'LOG_IN_USER', payload: response.data.response })
            }
            return response
        }
    },

    logOutUser: () => {
        return (dispatch) => {
            dispatch({ type: 'LOG_OUT_USER' })
        }
    },

    logInLocalStorage: (token) => {
        return async (dispatch) => {
            try {
                let response = await axios.get("https://mytinerary-castro.herokuapp.com/api/verifyToken", { headers: { Authorization: "Bearer " + token }})
                dispatch({type: 'LOG_IN_USER', payload: { token, userName: response.data.userName, userPhoto: response.data.userPhoto, userEmail: response.data.userEmail }})
            } catch (error) {
                return dispatch({ type: "LOG_OUT_USER" })
            }    
        }
    },

    getCountriesList: () => {
        return async (dispatch) => {
            let response = await axios.get('https://restcountries.com/v3.1/all')
            if (!response.status === '200') {
                throw new Error("Error with database")
            }
            return response.data
            
        }
    },

}

export default usersActions