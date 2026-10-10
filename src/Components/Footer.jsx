import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  let [settingData, setSettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITE_NAME,
    map1: import.meta.env.VITE_APP_MAP1,
    address: import.meta.env.VITE_APP_ADDRESS,
    email: import.meta.env.VITE_APP_EMAIL,
    phone: import.meta.env.VITE_APP_PHONE,
    whatsapp: import.meta.env.VITE_APP_WHATSAPP,
    facebook: import.meta.env.VITE_APP_FACEBOOK,
    twitter: import.meta.env.VITE_APP_TWITTER,
    linkedin: import.meta.env.VITE_APP_LINKEDIN,
    youtube: import.meta.env.VITE_APP_YOUTUBE,
  })
  return (
    <footer id="foot">
      <div className="container">
        <div className="row g-5 mb-5">
          <div className="col-6 col-md-3">
            <Link className="d-flex align-items-center gap-2 mb-3 inline-style-086" to="/">
              <div className="logo-i"><i className="fa-solid fa-layer-group"></i></div>
              {settingData.siteName}
            </Link>
            <p className="inline-style-087">{settingData.siteName} is a powerful generative AI platform that transforms ideas into text, images, videos, and speech with intelligent, creative, and easy-to-use AI tools.</p>
            <div className="d-flex gap-2 mt-3"><input className="nli inline-style-088" type="email"
              placeholder="Enter Your Email Address" /><button
                className="bgrd btn px-3 py-2 inline-style-089">Subscribe</button></div>
          </div>
          <div className="col-6 col-md-2 fcol">
            <h5>Generate</h5>
            <Link to="/text-to-text">Text</Link>
            <Link to="/text-to-image">Image</Link>
            <Link to="/image-to-image">Image to Image</Link>
            <Link to="/text-to-video">Video</Link>
            <Link to="/text-to-speech">Speech</Link>
          </div>
          <div className="col-6 col-md-2 fcol">
            <h5>Quick Links</h5>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/feature">Feature</Link>
            <Link to="/faq">Faq</Link>
          </div>
          <div className="col-6 col-md-2 fcol">
            <h5>Company</h5>
            <Link to="/generation">Generation</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/tc">Terms And Conditions</Link>
          </div>
          <div className="col-6 col-md-3 fcol">
            <h5>Contact Us</h5>
            <Link to={setSettingData.map1} target='_blank'>
              <i className='bi bi-geo-alt me-2'></i>
              {settingData.address}</Link>
            <Link to={`mailto:${setSettingData.email}`} target='_blank'>
              <i className='bi bi-envelope me-2'></i>
              {settingData.email}</Link>
              <Link to={`mailto:${setSettingData.phone}`} target='_blank'>
              <i className='bi bi-telephone me-2'></i>
              {settingData.phone}</Link>
              <Link to={`mailto:${setSettingData.whatsapp}`} target='_blank'>
              <i className='bi bi-whatsapp me-2'></i>
              {settingData.whatsapp}</Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 pt-4 inline-style-090">
          <p className="inline-style-091 text-light">@ {new Date().getFullYear()} {settingData.siteName}, Inc. All rights reserved</p>
          <div className="d-flex gap-2">
            <Link to={settingData.facebook} className="sico"><i className="text-light fa-brands fa-facebook"></i></Link>
            <Link to={settingData.twitter} className="sico"><i className="text-light fa-brands fa-twitter"></i></Link>
            <Link to={settingData.linkedin} className="sico"><i className="text-light fa-brands fa-linkedin"></i></Link>
            <Link to={settingData.instagram} className="sico"><i className="text-light fa-brands fa-instagram"></i></Link>
            <Link to={settingData.youtube} className="sico"><i className="text-light fa-brands fa-youtube"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
