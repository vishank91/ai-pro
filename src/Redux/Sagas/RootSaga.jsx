import { all } from "redux-saga/effects";
import FeatureSaga from "./FeatureSagas";
import FaqSaga from "./FaqSagas";
import SettingSaga from "./SettingSagas";
import TestimonialSaga from "./TestimonialSagas";
import NewsletterSaga from "./NewsletterSagas";
import ContactUsSaga from "./ContactUsSagas";
import UserSaga from "./UserSagas";

export default function* RootSaga() {
    yield all([
        FeatureSaga(),
        FaqSaga(),
        SettingSaga(),
        TestimonialSaga(),
        NewsletterSaga(),
        ContactUsSaga(),
        UserSaga(),
    ])
}