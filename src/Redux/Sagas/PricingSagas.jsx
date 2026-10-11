import { put, takeEvery } from "redux-saga/effects"
import { CREATE_PRICING, CREATE_PRICING_RED, DELETE_PRICING, DELETE_PRICING_RED, GET_PRICING, GET_PRICING_RED, UPDATE_PRICING, UPDATE_PRICING_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Service/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./Service/index"

function* createSaga(action) {                                                      //Worker
    let response = yield createRecord("pricing", action.payload)
    // let response = yield createMultipartRecord("pricing", action.payload)
    yield put({ type: CREATE_PRICING_RED, payload: response })
}

function* getSaga() {                                                               //Worker
    let response = yield getRecord("pricing")
    yield put({ type: GET_PRICING_RED, payload: response })
}

function* updateSaga(action) {                                                      //Worker
    yield updateRecord("pricing", action.payload)
    yield put({ type: UPDATE_PRICING_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("pricing", action.payload)
    //yield  put({ type: CREATE_PRICING_RED, payload: response })
}

function* deleteSaga(action) {                                                      //Worker
    yield deleteRecord("pricing", action.payload)
    yield put({ type: DELETE_PRICING_RED, payload: action.payload })
}


export default function* PricingSaga() {
    yield takeEvery(CREATE_PRICING, createSaga)                            //Watcher
    yield takeEvery(GET_PRICING, getSaga)                                  //Watcher
    yield takeEvery(UPDATE_PRICING, updateSaga)                            //Watcher
    yield takeEvery(DELETE_PRICING, deleteSaga)                            //Watcher
}