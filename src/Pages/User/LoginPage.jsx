import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
     let [data, setData] = useState({
          username: '',
          password: '',
     })
     let [errorMessage, setErrorMessage] = useState("")

     let navigate = useNavigate()

     function getInputData(e) {
          let { name, value } = e.target
          setData({ ...data, [name]: value })
     }
     async function postData(e) {
          e.preventDefault()

          let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/login`, {
               method: "POST",
               headers: {
                    "content-type": "application/json"
               },
               body: JSON.stringify({ ...data })
          })
          response = await response.json()
          if (response.result === "Done") {
               localStorage.setItem("login", true)
               localStorage.setItem("name", response.data?.name)
               localStorage.setItem("userid", response.data?._id)
               localStorage.setItem("role", response.data?.role)
               localStorage.setItem("token", response.token)
               if (response.data?.role === "Admin" || response.data?.role === "Super Admin")
                    navigate("/admin")
               else
                    navigate("/profile")
          }
          else {
               setErrorMessage(response.reason)
          }
     }

     return (
          <section id="pricing" className="sp position-relative inline-style-054">
               <div className="aur aur-a inline-style-070"></div>
               <div className="container position-relative inline-style-044">
                    <div className="row">
                         <div className="col-xl-8 col-lg-9 col-sm-10 col-11 m-auto">
                              <div id="fSignup" className="mt-5">
                                   <h4 className='text-center'>Login To Your Account</h4>
                                   <form onSubmit={postData}>

                                        <div className="my-3">

                                             <div className="mb-3">
                                                  <label className="olbl"><i className="fa-regular bi bi-person me-1"></i>Username</label>
                                                  <input className={`oinp ${errorMessage ? 'border-danger' : ''}`} type="text" name='username' onChange={getInputData} placeholder="smith" />
                                                  {errorMessage ? <p className='text-danger'>{errorMessage}</p> : null}
                                             </div>


                                             <div className="mb-3">
                                                  <label className="olbl"><i className="fa-regular bi bi-star me-1"></i>Password</label>
                                                  <input className={`oinp ${errorMessage ? 'border-danger' : ''}`} type="password" name='password' onChange={getInputData} placeholder="*********" />
                                             </div>


                                             <button className="bgrd btn w-100 py-3 fw-semibold fs-6" id="signupBtn" type='submit'>Login<i className="fa-solid fa-arrow-right ms-1 fa-sm"></i></button>
                                        </div>

                                        <div className='d-flex justify-content-between'>
                                             <Link to="/forget-password">Forget Password?</Link>
                                             <Link to="/signup">Doesn't Have An account?Signup</Link>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}
