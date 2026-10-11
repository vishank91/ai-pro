import { CREATE_TEXT_TO_SPEECH, DELETE_TEXT_TO_SPEECH, GET_TEXT_TO_SPEECH, UPDATE_TEXT_TO_SPEECH } from "../Constants"

export function createTextToSpeech(data) {
    return {
        type: CREATE_TEXT_TO_SPEECH,
        payload: data
    }
}

export function getTextToSpeech() {
    return {
        type: GET_TEXT_TO_SPEECH
    }
}

export function updateTextToSpeech(data) {
    return {
        type: UPDATE_TEXT_TO_SPEECH,
        payload: data
    }
}

export function deleteTextToSpeech(data) {
    return {
        type: DELETE_TEXT_TO_SPEECH,
        payload: data
    }
}