const usersReducer = (state = { toke: null, userNameStore: null, userPhotoStore: null, userEmailStore: null }, action) => {

    switch (action.type) {
        case 'LOG_IN_USER':
            return {
                token: action.payload.token, 
                userNameStore: action.payload.userName,
                userPhotoStore: action.payload.userPhoto,
                userEmailStore: action.payload.userEmail,
            }
        
        case 'LOG_OUT_USER':
            return {
                token: null,
                userNameStore: null,
                userPhotoStore: null,
                userEmailStore: null,
            }
        
        default:
            return state
    }
}

export default usersReducer