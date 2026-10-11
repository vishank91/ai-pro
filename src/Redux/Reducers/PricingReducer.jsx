import { CREATE_PRICING_RED, DELETE_PRICING_RED, GET_PRICING_RED, UPDATE_PRICING_RED } from "../Constants"

export default function PricingReducer(state = [], action) {
    let index
    switch (action.type) {
        case CREATE_PRICING_RED:
            return [...state, action.payload]

        case GET_PRICING_RED:
            return action.payload

        case UPDATE_PRICING_RED:
            index = state.findIndex(x => x._id === action.payload._id)
            state[index] = { ...action.payload }
            return state

        case DELETE_PRICING_RED:
            return state.filter(x => x._id !== action.payload._id)

        default:
            return state
    }
}