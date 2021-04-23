import React, { useState } from 'react'
import forgotPassword from "../assets/logo/forgot_password.png"
import frgtPswdThumbnail from "../assets/logo/forgot-password.png"
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
                <Sidebar image={""} />
                <div className="login-form " >
                    <div style={{ width: "75%", textAlign: "left" }}>
                        <p style={{ fontWeight: "bold", fontSize: "30px" }}>Forgot Passsword ?</p>
                    </div>
                    <div className="signin-block mt-4">
                        <div className="signin-option" style={{ flexDirection: "column" }}>
                            <div style={{ flex: "0.3" }}>
                                <img src={forgotPassword} width="70%"></img>
                            </div>
                        </div>
                    </div>
                    <div className="signin-form" >
                    <div className="mt-3" style={{ fontSize: "15px", textAlign: "center" }}>
                            Enter your registered email address below
                        </div>
                         <div className="line-container mt-0" >
                            <hr width="100%" color="E8E8E8" align="left"></hr>
                        </div>
                        
                        <form className=" form-signin" onSubmit={handleSubmit}>
                            <div className="col-md-12 mt-3" >
                                   Email Address
                                <input
                                    type="email"
                                    id="email"
                                    className={`mt-1 form-control${loginDetails?.errors?.email ? ' is-invalid' : ''}`}
                                    placeholder="xyz@gmail.com"
                                    style={{ borderRadius: "25px", border: "3px solid rgb(233, 231, 231)" }}
                                    value={loginDetails?.fields?.email || ''}
                                    onChange={(e) => handleChange(e, 'email')}
                                />
                            </div>
                            <div className="col-md-12">
                                <div className=" button mt-4" style={{ display: "flex", justifyContent: "center" }} onClick={handleSubmit}>
                                    <button className="button" type="submit">Send</button>
                                </div>
                                <div className="ml-1 mt-3 mb-0 " style={{textAlign:"center"}} ><a href="#" style={{ color: "black" }}>Not a member? <a href="#" style={{ color: "red", fontWeight: "bold" }}>Register</a> </a></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
