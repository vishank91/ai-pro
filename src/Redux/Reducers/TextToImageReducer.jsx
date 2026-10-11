import { CREATE_TEXT_TO_IMAGE_RED, DELETE_TEXT_TO_IMAGE_RED, GET_TEXT_TO_IMAGE_RED, UPDATE_TEXT_TO_IMAGE_RED } from "../Constants"

export default function TextToImageReducer(state = [], action) {
    let index
    switch (action.type) {
        case CREATE_TEXT_TO_IMAGE_RED:
            return [...state, action.payload]

        case GET_TEXT_TO_IMAGE_RED:
            return action.payload

        case UPDATE_TEXT_TO_IMAGE_RED:
            index = state.findIndex(x => x._id === action.payload._id)
            state[index] = { ...action.payload }
            return state

        case DELETE_TEXT_TO_IMAGE_RED:
            return state.filter(x => x._id !== action.payload._id)

        default:
            return state
    }
}