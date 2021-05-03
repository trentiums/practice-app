import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import logo from "../assets/logo/mail.png"
function FPModal({ isShow, setShow}) {
    return (
        <Modal show={isShow} onHide={() => setShow(false)} >
        <Modal.Body>
            {console.log(isShow,"object")}
          <div className="row m-0 p-0 justify-content-center align-items-center text-center">
            <img src={logo} alt="" width={100} height={100} />
          </div>
          <div className="mt-3" style={{textAlign:"center"}}>
                Reset password link has been successfully send to your registered email ID.
            </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="secondary" >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   
    )
}

export default FPModal
