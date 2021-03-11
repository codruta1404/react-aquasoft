import axios from 'axios'

const messageAction = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get('http://localhost:5000/')
        dispatch({
            type: 'MESSAGES_GET_SUCCESS',
            payload: data,
        })
    } catch (err) {
        console.log(err)
    }
}

export default messageAction