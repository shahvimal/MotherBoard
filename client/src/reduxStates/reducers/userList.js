import {
    GET_USER_LIST
} from '../actions/actionTypes'

const initState = {
    userList:null
}

const defaultReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USER_LIST:
            return {
                ...state,
                userList: [{ name: "Sanjay", surname: "Nayak" }, { name: "Samip", surname: "Kalyani" }]
            }
        default :
            return state;
    }
}

export default defaultReducer
