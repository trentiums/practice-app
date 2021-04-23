import React, { memo } from 'react'
import componyLogo from "../../assets/logo/company-logo.jpg"

function Header() {
    return (
        <div className="header-container mt-3 ml-5">
            <img width="100" style={{ borderRadius: "50%" }} src={componyLogo}></img>
        </div>
    )
}
export default memo(Header)
