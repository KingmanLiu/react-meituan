import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
            console.warn(action.data)
            return action.data
        default:
            return state
    }
}