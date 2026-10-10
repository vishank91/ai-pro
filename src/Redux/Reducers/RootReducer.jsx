import { combineReducers } from "@reduxjs/toolkit";
import FeatureReducer from "./FeatureReducer";
import FaqReducer from "./FaqReducer";
import SettingReducer from "./SettingReducer";0
import TestimonialReducer from "./TestimonialReducer";
import NewsletterReducer from "./NewsletterReducer";
import ContactUsReducer from "./ContactUsReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
    FeatureStateData: FeatureReducer,
    FaqStateData: FaqReducer,
    SettingStateData: SettingReducer,
    TestimonialStateData: TestimonialReducer,
    NewsletterStateData: NewsletterReducer,
    ContactUsStateData: ContactUsReducer,
    UserStateData: UserReducer,
})