import {
    GET_USER_LIST
} from './actionTypes'

export const getUserList = () => {
    return dispatch => {
        type: GET_USER_LIST
    }
}