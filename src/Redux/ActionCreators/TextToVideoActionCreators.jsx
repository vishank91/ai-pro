import { CREATE_TEXT_TO_VIDEO, DELETE_TEXT_TO_VIDEO, GET_TEXT_TO_VIDEO, UPDATE_TEXT_TO_VIDEO } from "../Constants"

export function createTextToVideo(data) {
    return {
        type: CREATE_TEXT_TO_VIDEO,
        payload: data
    }
}

export function getTextToVideo() {
    return {
        type: GET_TEXT_TO_VIDEO
    }
}

export function updateTextToVideo(data) {
    return {
        type: UPDATE_TEXT_TO_VIDEO,
        payload: data
    }
}

export function deleteTextToVideo(data) {
    return {
        type: DELETE_TEXT_TO_VIDEO,
        payload: data
    }
}