import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import TextValidators from '../../FormValidators/TextValidators'
export default function SignupPage() {
     let [data, setData] = useState({
          name: '',
          username: '',
          phone: '',
          email: '',
          password: '',
          cpassword: '',
     })
     let [errorMessage, setErrorMessage] = useState({
          name: "Full Name Field is Mendatory",
          username: "User Name Field is Mendatory",
          email: "Email Address Field is Mendatory",
          phone: "Phone Number Field is Mendatory",
          password: "Password Field is Mendatory",
     })
     let [show, setShow] = useState(false)

     let navigate = useNavigate()

     function getInputData(e) {
          let { name, value } = e.target
          setData({ ...data, [name]: value })
          setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })
     }
     async function postData(e) {
          e.preventDefault()

          let item = Object.values(errorMessage).find(x => x !== "")
          if (item) {
               setShow(true)
               return
          }

          if (data.password !== data.cpassword) {
               setShow(true)
               setErrorMessage({
                    ...errorMessage,
                    password: "Password and Confirm Password Doesn't Matched"
               })
               return
          }

          let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`, {
               method: "POST",
               headers: {
                    "content-type": "application/json"
               },
               body: JSON.stringify({
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    role: "Buyer",
                    status: true
               })
          })
          response = await response.json()
          if (response.result === "Done")
               navigate("/login")
          else {
               setErrorMessage({ ...errorMessage, ...response.reason })
               setShow(true)
          }
     }

     return (
          <section id="pricing" className="sp position-relative inline-style-054">
               <div className="aur aur-a inline-style-070"></div>
               <div className="container position-relative inline-style-044">
                    <div className="row">
                         <div className="col-xl-8 col-lg-9 col-sm-10 col-11 m-auto">
                              <div id="fSignup" className="mt-5">
                                   <h4 className='text-center'>Create Your Free Account With Us</h4>
                                   <form onSubmit={postData}>

                                        <div className="row">

                                             <div className="col-md-6 mb-3">
                                                  <label className="olbl"><i className="fa-regular bi bi-person me-1"></i>Full name</label>
                                                  <input className={`oinp ${show && errorMessage.name ? 'border-danger' : ''}`} type="text" name="name" onChange={getInputData} placeholder="Jane Smith" />
                                                  {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                             </div>
                                             <div className="col-md-6 mb-3">
                                                  <label className="olbl"><i className="fa-regular bi bi-phone me-1"></i>Phone Number</label>
                                                  <input className={`oinp ${show && errorMessage.phone ? 'border-danger' : ''}`} type="text" name='phone' onChange={getInputData} placeholder="999999999" />
                                                  {show && errorMessage.phone ? <p className='text-danger'>{errorMessage.phone}</p> : null}
                                             </div>

                                             <div className="col-md-6 mb-3">
                                                  <label className="olbl"><i className="fa-regular bi bi-person me-1"></i>Username</label>
                                                  <input className={`oinp ${show && errorMessage.username ? 'border-danger' : ''}`} type="text" name='username' onChange={getInputData} placeholder="smith" />
                                                  {show && errorMessage.username ? <p className='text-danger'>{errorMessage.username}</p> : null}
                                             </div>

                                             <div className="col-md-6 mb-3">
                                                  <label className="olbl"><i className="fa-regular bi bi-envelope me-1"></i>Email Address</label>
                                                  <input className={`oinp ${show && errorMessage.email ? 'border-danger' : ''}`} type="email" name='email' onChange={getInputData} placeholder="youremail@gamil.com" />
                                                  {show && errorMessage.email ? <p className='text-danger'>{errorMessage.email}</p> : null}
                                             </div>

                                             <div className="col-md-6 mb-3">
                                                  <label className="olbl"><i className="fa-regular bi bi-star me-1"></i>Password</label>
                                                  <input className={`oinp ${show && errorMessage.password ? 'border-danger' : ''}`} type="password" name='password' onChange={getInputData} placeholder="*********" />
                                                  {show && errorMessage.password ? <p className='text-danger'>{errorMessage.password}</p> : null}
                                             </div>

                                             <div className="col-md-6 mb-3">
                                                  <label className="olbl"><i className="fa-regular bi bi-star me-1"></i>Confirm Password</label>
                                                  <input className={`oinp ${show && errorMessage.password ? 'border-danger' : ''}`} type="password" name='cpassword' onChange={getInputData} placeholder="*********" />
                                             </div>

                                             <button className="bgrd btn w-100 py-3 fw-semibold fs-6" id="signupBtn" type='submit'>Create Free
                                                  Account <i className="fa-solid fa-arrow-right ms-1 fa-sm"></i></button>
                                        </div>

                                        <div>
                                             <Link to="/login">Already Have An account?Login</Link>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}
