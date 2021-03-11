const messageReducer = (state = {messages: []}, action) => {
    switch(action.type) {
        case 'MESSAGES_GET_SUCCESS':
            return {
                ...state,
                messages: action.payload
            }
        default:
            return state       
    }
}

export default messageReducer