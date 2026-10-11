import { combineReducers } from "@reduxjs/toolkit";
import FeatureReducer from "./FeatureReducer";
import FaqReducer from "./FaqReducer";
import SettingReducer from "./SettingReducer"; 0
import TestimonialReducer from "./TestimonialReducer";
import NewsletterReducer from "./NewsletterReducer";
import ContactUsReducer from "./ContactUsReducer";
import UserReducer from "./UserReducer";
import TextToTextReducer from "./TextToTextReducer";
import TextToImageReducer from "./TextToImageReducer";
import ImageToImageReducer from "./ImageToImageReducer";
import TextToVideoReducer from "./TextToVideoReducer";
import TextToSpeechReducer from "./TextToSpeechReducer";
import PricingReducer from "./PricingReducer";

export default combineReducers({
    FeatureStateData: FeatureReducer,
    FaqStateData: FaqReducer,
    SettingStateData: SettingReducer,
    TestimonialStateData: TestimonialReducer,
    NewsletterStateData: NewsletterReducer,
    ContactUsStateData: ContactUsReducer,
    UserStateData: UserReducer,
    TextToTextStateData: TextToTextReducer,
    TextToImageStateData: TextToImageReducer,
    ImageToImageStateData: ImageToImageReducer,
    TextToVideoStateData: TextToVideoReducer,
    TextToSpeechStateData: TextToSpeechReducer,
    PricingStateData: PricingReducer,
})