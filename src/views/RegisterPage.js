import React, { useMemo, useEffect, useState } from 'react'
import bgImage from "../assets/img/thumbnail.svg"
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import Sidebar from "../containers/sidebar"
function RegisterPage() {
    const initialState = {
        fields: {},
        errors: {},
    }
    const [registerDetails, setRegisterDetails] = useState(initialState)
    const handleChange = (e, field) => {
        let fields = registerDetails.fields
        let errors = registerDetails.errors
        if (field === "phone") {
            fields[field] = e
        } else {
            fields[field] = e.target.value
        }
        errors[field] = undefined
        setRegisterDetails({ ...registerDetails, fields, errors })
    }
    const handleSubmit = () => {

    }

    return (
        <div className="login-page">
            <div className="login-container">
                <Sidebar />
                <div className="login-form">
                    <div className="signin-form">
                        <h4 style={{ textAlign: "center" }}>Create your Account </h4>
                        <hr width="100%" color="E8E8E8" align="left"></hr>
                        <form className="form-signin mt-3" onSubmit={handleSubmit}>
                            <div className=" col-md-12 mt-5 pl-0 pr-1" style={{ display: "flex" }} >
                                <div className=" col-md-6" >
                                    First Name
                                <input
                                        type="firstName"
                                        id="firstName"
                                        className={`mt-1 form-control${registerDetails?.errors?.firstName ? ' is-invalid' : ''}`}
                                        placeholder="First Name"
                                        style={{ borderRadius: "25px", border: "3px solid rgb(233, 231, 231)" }}
                                        value={registerDetails?.fields?.name || ''}
                                        onChange={(e) => handleChange(e, 'firstName')}
                                    />
                                </div>
                                <div className=" col-md-6" >
                                    Last Name
                                <input
                                        type="lastName"
                                        id="lastName"
                                        className={`mt-1 form-control${registerDetails?.errors?.lastName ? ' is-invalid' : ''}`}
                                        placeholder="Last Name"
                                        style={{ borderRadius: "25px", border: "3px solid rgb(233, 231, 231)" }}
                                        value={registerDetails?.fields?.lastName || ''}
                                        onChange={(e) => handleChange(e, 'lastName')}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 mt-3" >
                                Email Address
                                <input
                                    type="email"
                                    id="email"
                                    className={`mt-1 form-control${registerDetails?.errors?.email ? ' is-invalid' : ''}`}
                                    placeholder="Enter a valid email address"
                                    style={{ borderRadius: "25px", border: "3px solid rgb(233, 231, 231)" }}
                                    value={registerDetails?.fields?.email || ''}
                                    onChange={(e) => handleChange(e, 'email')}
                                />
                            </div>
                            <div className="col-md-12 mt-3">
                                Password
                                <input
                                    type="password"
                                    id="password"
                                    className={`mt-1 form-control${registerDetails?.errors?.password ? ' is-invalid' : ''}`}
                                    placeholder="Enter password"
                                    value={registerDetails?.fields?.password || ''}
                                    style={{ borderRadius: "25px", border: "3px solid rgb(233, 231, 231)" }}
                                    onChange={(e) => handleChange(e, 'password')}
                                />
                            </div>
                            <div className=" col-md-12 mt-3 pl-0 pr-0" style={{ display: "flex" }} >
                                <div className=" col-md-6" style={{ display: "flex", flexDirection: "column" }}>
                                    Phone Number
                                    <div class="input-group">
                                        <PhoneInput
                                            name="phoneNumber"
                                            type="text"
                                            country={"in"}
                                            value={registerDetails?.fields?.phone || ''}
                                            onChange={(e) => handleChange(e, 'phone')}
                                            containerStyle={{ border: "3px solid rgb(233, 231, 231)", borderRadius: "25px" }}
                                            inputStyle={{ width: "100%", borderRadius: "25px" }}
                                            buttonStyle={{ borderRadius: "25px" }}
                                            autoFormat={false}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className=" col-md-6" >
                                    <label>Gender</label>
                                    <br />
                                    <input type="Radio" name="Gender" value="Male" />&nbsp;Male &nbsp;&nbsp;
                                <input type="Radio" name="Gender" value="Female" />&nbsp;Female
                                </div>
                            </div>
                            <div className="col-md-12 mt-3 " style={{ display: "flex" }}>
                                <div style={{ flex: "0.7" }}>
                                    <input type="checkbox" value="" />
                                    <label className="ml-1">&nbsp; I accept the Terms & Conditions</label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="col-md-12 button mt-4 mb-3" onClick={handleSubmit}>
                                    <button className="button" style={{ borderRadius: "25px" }} type="submit">Sign up</button>
                                </div>
                                <div className="mt-2 mb-2 ">Already have an account? <a href="#" style={{ color: "red", fontWeight: "bold" }}>Login</a> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
