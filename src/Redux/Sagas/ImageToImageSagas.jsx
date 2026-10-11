import { put, takeEvery } from "redux-saga/effects"
import { CREATE_IMAGE_TO_IMAGE, CREATE_IMAGE_TO_IMAGE_RED, DELETE_IMAGE_TO_IMAGE, DELETE_IMAGE_TO_IMAGE_RED, GET_IMAGE_TO_IMAGE, GET_IMAGE_TO_IMAGE_RED, UPDATE_IMAGE_TO_IMAGE, UPDATE_IMAGE_TO_IMAGE_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Service/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./Service/index"

function* createSaga(action) {                                                      //Worker
    let response = yield createRecord("image", action.payload)
    // let response = yield createMultipartRecord("image", action.payload)
    yield put({ type: CREATE_IMAGE_TO_IMAGE_RED, payload: response })
}

function* getSaga() {                                                               //Worker
    let response = yield getRecord("image")
    yield put({ type: GET_IMAGE_TO_IMAGE_RED, payload: response })
}

function* updateSaga(action) {                                                      //Worker
    yield updateRecord("image", action.payload)
    yield put({ type: UPDATE_IMAGE_TO_IMAGE_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("image", action.payload)
    //yield  put({ type: CREATE_IMAGE_TO_IMAGE_RED, payload: response })
}

function* deleteSaga(action) {                                                      //Worker
    yield deleteRecord("image", action.payload)
    yield put({ type: DELETE_IMAGE_TO_IMAGE_RED, payload: action.payload })
}


export default function* ImageToImageSaga() {
    yield takeEvery(CREATE_IMAGE_TO_IMAGE, createSaga)                            //Watcher
    yield takeEvery(GET_IMAGE_TO_IMAGE, getSaga)                                  //Watcher
    yield takeEvery(UPDATE_IMAGE_TO_IMAGE, updateSaga)                            //Watcher
    yield takeEvery(DELETE_IMAGE_TO_IMAGE, deleteSaga)                            //Watcher
}