import { put, takeEvery } from "redux-saga/effects"
import { CREATE_TEXT_TO_SPEECH, CREATE_TEXT_TO_SPEECH_RED, DELETE_TEXT_TO_SPEECH, DELETE_TEXT_TO_SPEECH_RED, GET_TEXT_TO_SPEECH, GET_TEXT_TO_SPEECH_RED, UPDATE_TEXT_TO_SPEECH, UPDATE_TEXT_TO_SPEECH_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Service/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./Service/index"

function* createSaga(action) {                                                      //Worker
    let response = yield createRecord("speech", action.payload)
    // let response = yield createMultipartRecord("speech", action.payload)
    yield put({ type: CREATE_TEXT_TO_SPEECH_RED, payload: response })
}

function* getSaga() {                                                               //Worker
    let response = yield getRecord("speech")
    yield put({ type: GET_TEXT_TO_SPEECH_RED, payload: response })
}

function* updateSaga(action) {                                                      //Worker
    yield updateRecord("speech", action.payload)
    yield put({ type: UPDATE_TEXT_TO_SPEECH_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("speech", action.payload)
    //yield  put({ type: CREATE_TEXT_TO_SPEECH_RED, payload: response })
}

function* deleteSaga(action) {                                                      //Worker
    yield deleteRecord("speech", action.payload)
    yield put({ type: DELETE_TEXT_TO_SPEECH_RED, payload: action.payload })
}


export default function* TextToSpeechSaga() {
    yield takeEvery(CREATE_TEXT_TO_SPEECH, createSaga)                            //Watcher
    yield takeEvery(GET_TEXT_TO_SPEECH, getSaga)                                  //Watcher
    yield takeEvery(UPDATE_TEXT_TO_SPEECH, updateSaga)                            //Watcher
    yield takeEvery(DELETE_TEXT_TO_SPEECH, deleteSaga)                            //Watcher
}