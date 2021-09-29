const usersReducer = (state = { userNameStore: null, userPhotoStore: null, userEmailStore: null }, action) => {

    switch (action.type) {
        case 'LOG_IN_USER':
            return {
                userNameStore: null,
                userPhotoStore: null,
                userEmailStore: null,
            }
        
        case 'LOG_OUT_USER':
            return {
                userNameStore: null,
                userPhotoStore: null,
                userEmailStore: null,
            }
        
        case 'GET_COUNTRIES_LIST':
            return {
                countriesList: action.payload
            }
        
        default:
            return state
    }
}

export default usersReducer