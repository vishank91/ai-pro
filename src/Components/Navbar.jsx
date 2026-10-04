import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  let [settingData, setSettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITE_NAME
  })
  return (
    <>
      <nav id="nbar">
        <div className="container-fluid mx-5">
          <div className="d-flex align-items-center justify-content-between w-100">
            <Link to="/" className="d-flex align-items-center gap-2 inline-style-001">
              <div className="logo-i"><i className="fa-solid fa-layer-group"></i></div>
              <span>{settingData.siteName}</span>
            </Link>
            <div className="d-none d-lg-flex align-items-center gap-1 mx-auto">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
              <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
              <NavLink to="/feature" className="nav-link">Feature</NavLink>
              <NavLink to="/faq" className="nav-link">Faq</NavLink>
              <NavLink to="/generation" className="nav-link">Generation</NavLink>
              <NavLink to="/testimonial" className="nav-link">Testimonial</NavLink>
              <NavLink to="/contactus" className="nav-link">Contact Us</NavLink>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button className="boc d-flex align-items-center justify-content-center inline-style-002" id="thbtn"
                aria-label="Toggle theme">
                <i className="fa-solid fa-sun inline-style-003" id="suni"></i>
                <i className="fa-solid fa-moon" id="mooni"></i>
              </button>
              <button className="boc px-3 py-2 d-none d-sm-flex align-items-center gap-1"
                data-bs-toggle="offcanvas" data-bs-target="#lofc" onclick="swTab('login')">
                <i className="fa-regular fa-user fa-sm"></i> Log in
              </button>
              <button className="bgrd btn px-3 py-2 d-none d-sm-flex align-items-center gap-1"
                data-bs-toggle="offcanvas" data-bs-target="#lofc" onclick="swTab('signup')">
                Get Started <i className="fa-solid fa-arrow-right fa-sm"></i>
              </button>
              <button className="boc d-lg-none px-2 py-2 inline-style-004" id="mbtog">
                <i className="fa-solid fa-bars" id="barIcon"></i>
                <i className="fa-solid fa-xmark inline-style-003" id="xIcon"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div id="mbmenu">
        <a href="#features" className="nav-link d-block py-3 border-bottom inline-style-005">Features</a>
        <a href="#integrations" className="nav-link d-block py-3 border-bottom inline-style-005">Integrations</a>
        <a href="#pricing" className="nav-link d-block py-3 border-bottom inline-style-005">Pricing</a>
        <a href="#faq" className="nav-link d-block py-3">FAQ</a>
        <div className="d-flex gap-2 mt-3">
          <button className="boc flex-fill py-2 btn" data-bs-toggle="offcanvas" data-bs-target="#lofc"
            onclick="swTab('login')">Log in</button>
          <button className="bgrd flex-fill py-2 btn" data-bs-toggle="offcanvas" data-bs-target="#lofc"
            onclick="swTab('signup')">Get Started</button>
        </div>
      </div>
    </>
  )
}
