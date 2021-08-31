import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from "../redux/actions";

const Loginscreen = () => {

    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    
    const dispatch = useDispatch()

    const login = () => {
        if (!password) {
            alert("password filled!")
        } else {
            const user = { phone, password }
            dispatch(loginUser(user))
        }
    }

    return (
        <div>
            <div className="justify-content-center mt-5" style={{ display: 'flex' }} >
                <div className="col-md-5 text-left">
                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Login</h2>
                    <div>

                        <input
                            required
                            type="text"
                            placeholder="phone"
                            className="form-control"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                        />

                        <input
                            required
                            type="text"
                            placeholder="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />

                        <button onClick={login} className='btn mt-3'>LOGIN</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginscreen