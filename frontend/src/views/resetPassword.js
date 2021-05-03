import React, { useState } from 'react'
import resetPassword from "../assets/logo/reset-password.png"
import Sidebar from "../containers/sidebar"
function RPPage() {
    const initialState = {
        fields: {},
        errors: {},
    }
    const [isShow, setShow] = useState(false)
    const [loginDetails, setLoginDetails] = useState(initialState)
    const handleChange = (e, field) => {
        let fields = loginDetails.fields
        let errors = loginDetails.errors
        fields[field] = e.target.value
        errors[field] = undefined
        setLoginDetails({ ...loginDetails, fields, errors })
    }
    const handleSubmit = () => {
        setShow(true)
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <Sidebar image={""} />
                <div className="login-form " >
                    <div style={{ width: "75%", textAlign: "left" }}>
                        <p style={{ fontWeight: "bold", fontSize: "30px" }}>Reset Passsword </p>
                    </div>
                    <div className="signin-block mt-4">
                        <div className="signin-option" style={{ flexDirection: "column" }}>
                            <div style={{ flex: "0.3" }}>
                                <img src={resetPassword} width="70%"></img>
                            </div>
                        </div>
                    </div>
                    <div className="signin-form" >
                        <div className="mt-3" style={{ fontSize: "15px", textAlign: "center" }}>
                            Add New Password 
                        </div>
                        {/* <div className="line-container mt-0" >
                            <hr width="100%" color="E8E8E8" align="left"></hr>
                        </div> */}

                        <form className=" form-signin" onSubmit={handleSubmit}>
                            <div className="col-md-12 mt-3" >
                                Password
                                <input
                                    type="password"
                                    id="password"
                                    className={`mt-1 form-control${loginDetails?.errors?.password ? ' is-invalid' : ''}`}
                                    placeholder="Password"
                                    style={{ borderRadius: "25px", border: "3px solid rgb(233, 231, 231)" }}
                                    value={loginDetails?.fields?.password || ''}
                                    onChange={(e) => handleChange(e, 'password')}
                                />
                            </div>
                            <div className="col-md-12 mt-3" >
                                Confirm Password
                                <input
                                    type="password"
                                    id="cnfPwd"
                                    className={`mt-1 form-control${loginDetails?.errors?.cnfPwd ? ' is-invalid' : ''}`}
                                    placeholder="Confirm Password"
                                    style={{ borderRadius: "25px", border: "3px solid rgb(233, 231, 231)" }}
                                    value={loginDetails?.fields?.cnfPwd || ''}
                                    onChange={(e) => handleChange(e, 'cnfPwd')}
                                />
                            </div>
                           <div className="col-md-12">
                                <div className=" button mt-4" style={{ display: "flex", justifyContent: "center" }}>
                                    <button className="button" type="submit" >Send</button>
                                </div>
                                <div className="ml-1 mt-3 mb-0 " style={{ textAlign: "center" }} >Not a member? <a href="/register" style={{ color: "red", fontWeight: "bold" }}>Register</a> </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RPPage
