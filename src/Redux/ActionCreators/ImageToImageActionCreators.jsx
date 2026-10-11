import { CREATE_IMAGE_TO_IMAGE, DELETE_IMAGE_TO_IMAGE, GET_IMAGE_TO_IMAGE, UPDATE_IMAGE_TO_IMAGE } from "../Constants"

export function createImageToImage(data) {
    return {
        type: CREATE_IMAGE_TO_IMAGE,
        payload: data
    }
}

export function getImageToImage() {
    return {
        type: GET_IMAGE_TO_IMAGE
    }
}

export function updateImageToImage(data) {
    return {
        type: UPDATE_IMAGE_TO_IMAGE,
        payload: data
    }
}

export function deleteImageToImage(data) {
    return {
        type: DELETE_IMAGE_TO_IMAGE,
        payload: data
    }
}