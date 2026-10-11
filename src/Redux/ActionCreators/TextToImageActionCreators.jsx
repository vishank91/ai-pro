import { CREATE_TEXT_TO_IMAGE, DELETE_TEXT_TO_IMAGE, GET_TEXT_TO_IMAGE, UPDATE_TEXT_TO_IMAGE } from "../Constants"

export function createTextToImage(data) {
    return {
        type: CREATE_TEXT_TO_IMAGE,
        payload: data
    }
}

export function getTextToImage() {
    return {
        type: GET_TEXT_TO_IMAGE
    }
}

export function updateTextToImage(data) {
    return {
        type: UPDATE_TEXT_TO_IMAGE,
        payload: data
    }
}

export function deleteTextToImage(data) {
    return {
        type: DELETE_TEXT_TO_IMAGE,
        payload: data
    }
}