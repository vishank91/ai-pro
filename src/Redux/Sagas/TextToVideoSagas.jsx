import { put, takeEvery } from "redux-saga/effects"
import { CREATE_TEXT_TO_VIDEO, CREATE_TEXT_TO_VIDEO_RED, DELETE_TEXT_TO_VIDEO, DELETE_TEXT_TO_VIDEO_RED, GET_TEXT_TO_VIDEO, GET_TEXT_TO_VIDEO_RED, UPDATE_TEXT_TO_VIDEO, UPDATE_TEXT_TO_VIDEO_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Service/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./Service/index"

function* createSaga(action) {                                                      //Worker
    let response = yield createRecord("video", action.payload)
    // let response = yield createMultipartRecord("video", action.payload)
    yield put({ type: CREATE_TEXT_TO_VIDEO_RED, payload: response })
}

function* getSaga() {                                                               //Worker
    let response = yield getRecord("video")
    yield put({ type: GET_TEXT_TO_VIDEO_RED, payload: response })
}

function* updateSaga(action) {                                                      //Worker
    yield updateRecord("video", action.payload)
    yield put({ type: UPDATE_TEXT_TO_VIDEO_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("video", action.payload)
    //yield  put({ type: CREATE_TEXT_TO_VIDEO_RED, payload: response })
}

function* deleteSaga(action) {                                                      //Worker
    yield deleteRecord("video", action.payload)
    yield put({ type: DELETE_TEXT_TO_VIDEO_RED, payload: action.payload })
}


export default function* TextToVideoSaga() {
    yield takeEvery(CREATE_TEXT_TO_VIDEO, createSaga)                            //Watcher
    yield takeEvery(GET_TEXT_TO_VIDEO, getSaga)                                  //Watcher
    yield takeEvery(UPDATE_TEXT_TO_VIDEO, updateSaga)                            //Watcher
    yield takeEvery(DELETE_TEXT_TO_VIDEO, deleteSaga)                            //Watcher
}