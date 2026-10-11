import { CREATE_IMAGE_TO_IMAGE_RED, DELETE_IMAGE_TO_IMAGE_RED, GET_IMAGE_TO_IMAGE_RED, UPDATE_IMAGE_TO_IMAGE_RED } from "../Constants"

export default function ImageToImageReducer(state = [], action) {
    let index
    switch (action.type) {
        case CREATE_IMAGE_TO_IMAGE_RED:
            return [...state, action.payload]

        case GET_IMAGE_TO_IMAGE_RED:
            return action.payload

        case UPDATE_IMAGE_TO_IMAGE_RED:
            index = state.findIndex(x => x._id === action.payload._id)
            state[index] = { ...action.payload }
            return state

        case DELETE_IMAGE_TO_IMAGE_RED:
            return state.filter(x => x._id !== action.payload._id)

        default:
            return state
    }
}