import React, { memo } from 'react'
import fbWhite from "../../assets/logo/fb-white.png"
import GPWhite from "../../assets/logo/g-plus-white.png"
import twtrWhite from "../../assets/logo/twitter-128.png"
import lnkdWhite from "../../assets/logo/linkedIn-white.png"

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-copyright">Copyright @ 2021. All rights reserved.</div>
      <div className="footer-logos mt-2 mb-2">
        <img src={fbWhite} width="8px"></img>
        <img className="ml-4" src={GPWhite} width="25px"></img>
        <img className="ml-4" src={lnkdWhite} width="17px"></img>
        <img className="ml-4" src={twtrWhite} width="18px"></img>
      </div>
    </div>
  )
}
export default memo(Footer)
