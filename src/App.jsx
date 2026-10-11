import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import FeaturePage from './Pages/FeaturePage'
import FaqPage from './Pages/FaqPage'
import GenerationPage from './Pages/generationPage'
import TestimonialPage from './Pages/TestimonialPage'
import ContactUsPage from './Pages/ContactUsPage'
import ErrorPage from './Pages/ErrorPage'
import PricingPage from './Pages/PricingPage'

import AdminHomePage from './Pages/Admin/AdminHomePage'

import AdminFeaturePage from './Pages/Admin/Feature/AdminFeaturePage'
import AdminFeatureCreatePage from './Pages/Admin/Feature/AdminFeatureCreatePage'
import AdminFeatureUpdatePage from './Pages/Admin/Feature/AdminFeatureUpdatePage'

import AdminFaqPage from './Pages/Admin/Faq/AdminFaqPage'
import AdminFaqCreatePage from './Pages/Admin/Faq/AdminFaqCreatePage'
import AdminFaqUpdatePage from './Pages/Admin/Faq/AdminFaqUpdatePage'

import AdminSettingPage from './Pages/Admin/Setting/AdminSettingPage'

import AdminNewsletterPage from './Pages/Admin/Newsletter/AdminNewsletterPage'

import AdminContactUsPage from './Pages/Admin/ContactUs/AdminContactUsPage'
import AdminContactUsShowPage from './Pages/Admin/ContactUs/AdminContactUsShowPage'

import AdminUserPage from './Pages/Admin/User/AdminUserPage'
import AdminUserCreatePage from './Pages/Admin/User/AdminUserCreatePage'
import AdminUserUpdatePage from './Pages/Admin/User/AdminUserUpdatePage'
import SignupPage from './Pages/User/SignupPage'
import LoginPage from './Pages/User/LoginPage'
import ProfilePage from './Pages/User/ProfilePage'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/feature' element={<FeaturePage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/generation' element={<GenerationPage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />

        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* User Routes */}
        <Route path='/profile' element={<ProfilePage />} />


        {/* Admin Routes */}
        <Route path='/admin' element={<AdminHomePage />} />

        <Route path='/admin/feature' element={<AdminFeaturePage />} />
        <Route path='/admin/feature/create' element={<AdminFeatureCreatePage />} />
        <Route path='/admin/feature/update/:_id' element={<AdminFeatureUpdatePage />} />

        <Route path='/admin/faq' element={<AdminFaqPage />} />
        <Route path='/admin/faq/create' element={<AdminFaqCreatePage />} />
        <Route path='/admin/faq/update/:_id' element={<AdminFaqUpdatePage />} />

        <Route path='/admin/setting' element={<AdminSettingPage />} />

        <Route path='/admin/newsletter' element={<AdminNewsletterPage />} />

        <Route path='/admin/contact' element={<AdminContactUsPage />} />
        <Route path='/admin/contact/show/:_id' element={<AdminContactUsShowPage />} />

        <Route path='/admin/user' element={<AdminUserPage />} />
        <Route path='/admin/user/create' element={<AdminUserCreatePage />} />
        <Route path='/admin/user/update/:_id' element={<AdminUserUpdatePage />} />


        <Route path='/*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
