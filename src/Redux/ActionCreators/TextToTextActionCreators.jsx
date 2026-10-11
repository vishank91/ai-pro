import { CREATE_TEXT_TO_TEXT, DELETE_TEXT_TO_TEXT, GET_TEXT_TO_TEXT, UPDATE_TEXT_TO_TEXT } from "../Constants"

export function createTextToText(data) {
    return {
        type: CREATE_TEXT_TO_TEXT,
        payload: data
    }
}

export function getTextToText() {
    return {
        type: GET_TEXT_TO_TEXT
    }
}

export function updateTextToText(data) {
    return {
        type: UPDATE_TEXT_TO_TEXT,
        payload: data
    }
}

export function deleteTextToText(data) {
    return {
        type: DELETE_TEXT_TO_TEXT,
        payload: data
    }
}