const usersReducer = (state = { userNameStore: null, userPhotoStore: null, userEmailStore: null, countriesListStore: [] }, action) => {

    switch (action.type) {
        case 'LOG_IN_USER':
            return {
                userNameStore: action.payload.userName,
                userPhotoStore: action.payload.userPhoto,
                userEmailStore: action.payload.userEmail,
            }
        
        case 'LOG_OUT_USER':
            return {
                userNameStore: null,
                userPhotoStore: null,
                userEmailStore: null,
            }
        
        case 'GET_COUNTRIES_LIST':
            let countriesList = action.payload.map(country => country.name.common)
            countriesList = countriesList.sort()
            return {
                countriesListStore: countriesList
            }
        
        default:
            return state
    }
}

export default usersReducer