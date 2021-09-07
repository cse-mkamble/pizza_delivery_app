import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../redux/actions'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Orderslist = () => {

    const dispatch = useDispatch()

    const getallodersstate = useSelector(state => state.getAllOdersReducer)
    const { orders, error, loading } = getallodersstate

    useEffect(() => {
        dispatch(getAllOrders())
    }, [])

    return (
        <div>
            Orders List
            <hr />
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong!' />)}
            <table className="table table-striped table-bordered" >
                <thead className="thead-dark">
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order => {
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.email}</td>
                            <td>{order.userid}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>Status</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Orderslist;