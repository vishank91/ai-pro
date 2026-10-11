import { put, takeEvery } from "redux-saga/effects"
import { CREATE_TEXT_TO_TEXT, CREATE_TEXT_TO_TEXT_RED, DELETE_TEXT_TO_TEXT, DELETE_TEXT_TO_TEXT_RED, GET_TEXT_TO_TEXT, GET_TEXT_TO_TEXT_RED, UPDATE_TEXT_TO_TEXT, UPDATE_TEXT_TO_TEXT_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Service/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./Service/index"

function* createSaga(action) {                                                      //Worker
    let response = yield createRecord("text", action.payload)
    // let response = yield createMultipartRecord("text", action.payload)
    yield put({ type: CREATE_TEXT_TO_TEXT_RED, payload: response })
}

function* getSaga() {                                                               //Worker
    let response = yield getRecord("text")
    yield put({ type: GET_TEXT_TO_TEXT_RED, payload: response })
}

function* updateSaga(action) {                                                      //Worker
    yield updateRecord("text", action.payload)
    yield put({ type: UPDATE_TEXT_TO_TEXT_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("text", action.payload)
    //yield  put({ type: CREATE_TEXT_TO_TEXT_RED, payload: response })
}

function* deleteSaga(action) {                                                      //Worker
    yield deleteRecord("text", action.payload)
    yield put({ type: DELETE_TEXT_TO_TEXT_RED, payload: action.payload })
}


export default function* TextToTextSaga() {
    yield takeEvery(CREATE_TEXT_TO_TEXT, createSaga)                            //Watcher
    yield takeEvery(GET_TEXT_TO_TEXT, getSaga)                                  //Watcher
    yield takeEvery(UPDATE_TEXT_TO_TEXT, updateSaga)                            //Watcher
    yield takeEvery(DELETE_TEXT_TO_TEXT, deleteSaga)                            //Watcher
}