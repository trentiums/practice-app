import React, { useState } from 'react'
import fb from "../assets/logo/fb.png"
import twitter from "../assets/logo/twitter.png"
import linkedin from "../assets/logo/linkedin.webp"
import Sidebar from "../containers/sidebar"

function LoginPage() {
    const initialState = {
        fields: {},
        errors: {},
    }
    const [loginDetails, setLoginDetails] = useState(initialState)
    const handleChange = (e, field) => {
        let fields = loginDetails.fields
        let errors = loginDetails.errors
        fields[field] = e.target.value
        errors[field] = undefined
        setLoginDetails({ ...loginDetails, fields, errors })
    }
    const handleSubmit = () => {

    }

    return (
        <div className="login-page">
            <div className="login-container">
                <Sidebar />
                <div className="login-form">
                    <div className="signin-block">
                        <div className="signin-option">
                            <div style={{ justifyContent: 'center' }}>
                                Sign in with
                        </div>
                            <div >
                                <img src={fb} width="40px" className="mr-2"></img>
                                <img src={twitter} width="45px" className="mr-2"></img>
                                <img src={linkedin} width="35px"></img>
                            </div>
                        </div>
                        <div className="line-container mt-0" >
                            <hr width="45%" color="E8E8E8" align="left"></hr>
                                or
                            <hr width="45%" color="E8E8E8" align="right"></hr>
                        </div>
                    </div>
                    <div className="signin-form">
                        <form className="form-signin" onSubmit={handleSubmit}>
                            <div className=" mt-3" >
                                Email Address
                                <input
                                    type="email"
                                    id="email"
                                    className={`mt-1 form-control${loginDetails?.errors?.email ? ' is-invalid' : ''}`}
                                    placeholder="Enter a valid email address"
                                    style={{ borderRadius: "25px", border: "3px solid rgb(233, 231, 231)" }}
                                    value={loginDetails?.fields?.email || ''}
                                    onChange={(e) => handleChange(e, 'email')}
                                />
                            </div>
                            <div className=" mt-3">
                                Password
                                <input
                                    type="password"
                                    id="password"
                                    className={`mt-1 form-control${loginDetails?.errors?.password ? ' is-invalid' : ''}`}
                                    placeholder="Enter password"
                                    value={loginDetails?.fields?.password || ''}
                                    style={{ borderRadius: "25px", border: "3px solid rgb(233, 231, 231)" }}
                                    onChange={(e) => handleChange(e, 'password')}
                                />
                            </div>
                            <div className="mt-2 " style={{ display: "flex" }}>
                                <div style={{ flex: "0.7" }}>
                                    <input type="checkbox" value="" />
                                    <label className="ml-1">Remember me</label>
                                </div>
                                <div
                                    onClick={() => ""}
                                    style={{ flex: "0.3", alignItems: 'center' }}
                                >
                                    Forgot Password?
                            </div>
                            </div>
                            <div className="button mt-3 " onClick={handleSubmit}>
                                <button className="button" style={{ borderRadius: "25px" }} type="submit">Login</button>
                            </div>
                            <div className="mt-2 mb-2 ">Don't have an account? <a href="#" style={{ color: "red", fontWeight: "bold" }}>Register</a> </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
