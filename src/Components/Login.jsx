import React from 'react'

export default function Login() {
    return (
        <>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="lofc">
                <div className="offcanvas-header">
                    <div className="d-flex align-items-center gap-2">
                        <div className="logo-i inline-style-092"><i className="fa-solid fa-layer-group"></i></div>
                        <h5 className="offcanvas-title mb-0">NexusAI</h5>
                    </div>
                    <button type="button" className="btn-close inline-style-093" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body p-4">
                    <div className="tab-switch"><button className="tab-sw-btn on" id="tabLogin" onclick="swTab('login')">Log
                        In</button><button className="tab-sw-btn" id="tabSignup" onclick="swTab('signup')">Sign Up</button>
                    </div>
                    <div id="fLogin">
                        <div id="loginErr" className="err-msg"><i className="fa-solid fa-circle-exclamation me-1"></i><span
                            id="loginErrMsg">Invalid email or password.</span></div>
                        <label className="olbl"><i className="fa-regular fa-envelope me-1"></i>Email address</label>
                        <input className="oinp" type="email" id="loginEmail" placeholder="you\@company.com" />
                        <label className="olbl"><i className="fa-solid fa-lock me-1"></i>Password</label>
                        <input className="oinp" type="password" id="loginPass" placeholder="\*\*\*\*\*\*\*\*" />
                        <div className="text-end mb-3 inline-style-094"><a href="#" className="inline-style-095">Forgot password?</a>
                        </div>
                        <button className="bgrd btn w-100 py-3 fw-semibold fs-6" id="loginBtn" onclick="doLogin()">Log In <i
                            className="fa-solid fa-arrow-right ms-1 fa-sm"></i></button>
                        <div className="odiv">or continue with</div>
                        <button className="oauth" onclick="quickLogin('google')"><i className="fa-brands fa-google me-2"></i>Continue
                            with Google</button>
                        <button className="oauth" onclick="quickLogin('github')"><i className="fa-brands fa-github me-2"></i>Continue
                            with GitHub</button>
                        <p className="text-center mt-4 inline-style-078">Don't have an account? <a href="#" className="inline-style-014"
                            onclick="swTab('signup');return false">Sign up free</a></p>
                    </div>
                    <div id="fSignup" className="inline-style-003">
                        <div id="signupErr" className="err-msg"><i className="fa-solid fa-circle-exclamation me-1"></i><span
                            id="signupErrMsg">Please fill all fields.</span></div>
                        <label className="olbl"><i className="fa-regular fa-user me-1"></i>Full name</label>
                        <input className="oinp" type="text" id="signupName" placeholder="Jane Smith" />
                        <label className="olbl"><i className="fa-regular fa-envelope me-1"></i>Work email</label>
                        <input className="oinp" type="email" id="signupEmail" placeholder="you\@company.com" />
                        <label className="olbl"><i className="fa-solid fa-lock me-1"></i>Password</label>
                        <input className="oinp" type="password" id="signupPass" placeholder="Min. 8 characters" />
                        <button className="bgrd btn w-100 py-3 fw-semibold fs-6" id="signupBtn" onclick="doSignup()">Create Free
                            Account <i className="fa-solid fa-arrow-right ms-1 fa-sm"></i></button>
                        <div className="odiv">or sign up with</div>
                        <button className="oauth" onclick="quickLogin('google')"><i className="fa-brands fa-google me-2"></i>Continue
                            with Google</button>
                        <button className="oauth" onclick="quickLogin('github')"><i className="fa-brands fa-github me-2"></i>Continue
                            with GitHub</button>
                        <p className="text-center mt-3 inline-style-020">By signing up, you agree to our <a href="#"
                            className="inline-style-014">Terms</a> &amp; <a href="#" className="inline-style-014">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
