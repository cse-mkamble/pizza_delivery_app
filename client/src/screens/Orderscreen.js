import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserOrders } from '../redux/actions'

const Orderscreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserOrders())
    }, [])

    return (
        <div>
            My Orders
        </div>
    )
}

export default Orderscreen