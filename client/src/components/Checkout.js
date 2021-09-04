import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from '../redux/actions'

const Checkout = ({ subTotal }) => {

    const [addressType, setAddressType] = useState("");
    const [address, setAddress] = useState("")
    const [latt, setLatt] = useState("")
    const [lngt, setLngt] = useState("")
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

    const handleClose = () => {
        setAddress("")
        setAddressType("")
        setShow(false)
    }
    const handleShow = () => setShow(true);

    const handleOrder = () => {
        if (!addressType) {
            alert("Please Select Address!")
        } else {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLatt(position.coords.latitude)
                setLngt(position.coords.longitude)
            })
            var lattLngt = latt + ',' + lngt
            if (lattLngt) {
                dispatch(placeOrder(subTotal, lattLngt, address))
                setLatt("")
                setLngt("")
                setAddress("")
                setAddressType("")
                setShow(false)
            }
        }
    }

    return (
        <div>
            <button className="btn btn-danger " onClick={handleShow}>CHECK OUT</button>




            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Address</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <div>
                        <div>
                            <div className="flexRow">
                                <div style={{ display: 'flex' }}>
                                    <input
                                        required
                                        type="radio"
                                        onClick={() => setAddressType("home")}
                                        name="addressType"
                                        value="home"
                                    />
                                    <div style={{ margin: '4px' }}>Current Location</div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <input
                                        required
                                        type="radio"
                                        onClick={() => setAddressType("another")}
                                        name="addressType"
                                        value="another"
                                    />
                                    <div style={{ margin: '4px' }}>Add Address</div>
                                </div>
                            </div>
                        </div>
                        {
                            addressType === 'another' ? (
                                <div>
                                    <textarea
                                        style={{ width: '100%' }}
                                        rows="6"
                                        placeholder="Address ( Area And Street )"
                                        name="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    ></textarea>
                                </div>
                            ) : ""
                        }

                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={handleOrder}>ORDER NOW</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Checkout