import { CREATE_PRICING, DELETE_PRICING, GET_PRICING, UPDATE_PRICING } from "../Constants"

export function createPricing(data) {
    return {
        type: CREATE_PRICING,
        payload: data
    }
}

export function getPricing() {
    return {
        type: GET_PRICING
    }
}

export function updatePricing(data) {
    return {
        type: UPDATE_PRICING,
        payload: data
    }
}

export function deletePricing(data) {
    return {
        type: DELETE_PRICING,
        payload: data
    }
}