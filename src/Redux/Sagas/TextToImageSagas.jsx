import { put, takeEvery } from "redux-saga/effects"
import { CREATE_TEXT_TO_IMAGE, CREATE_TEXT_TO_IMAGE_RED, DELETE_TEXT_TO_IMAGE, DELETE_TEXT_TO_IMAGE_RED, GET_TEXT_TO_IMAGE, GET_TEXT_TO_IMAGE_RED, UPDATE_TEXT_TO_IMAGE, UPDATE_TEXT_TO_IMAGE_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Service/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./Service/index"

function* createSaga(action) {                                                      //Worker
    let response = yield createRecord("image", action.payload)
    // let response = yield createMultipartRecord("image", action.payload)
    yield put({ type: CREATE_TEXT_TO_IMAGE_RED, payload: response })
}

function* getSaga() {                                                               //Worker
    let response = yield getRecord("image/"+localStorage.getItem("userid"))
    yield put({ type: GET_TEXT_TO_IMAGE_RED, payload: response })
}

function* updateSaga(action) {                                                      //Worker
    yield updateRecord("image", action.payload)
    yield put({ type: UPDATE_TEXT_TO_IMAGE_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("image", action.payload)
    //yield  put({ type: CREATE_TEXT_TO_IMAGE_RED, payload: response })
}

function* deleteSaga(action) {                                                      //Worker
    yield deleteRecord("image", action.payload)
    yield put({ type: DELETE_TEXT_TO_IMAGE_RED, payload: action.payload })
}


export default function* TextToImageSaga() {
    yield takeEvery(CREATE_TEXT_TO_IMAGE, createSaga)                            //Watcher
    yield takeEvery(GET_TEXT_TO_IMAGE, getSaga)                                  //Watcher
    yield takeEvery(UPDATE_TEXT_TO_IMAGE, updateSaga)                            //Watcher
    yield takeEvery(DELETE_TEXT_TO_IMAGE, deleteSaga)                            //Watcher
}