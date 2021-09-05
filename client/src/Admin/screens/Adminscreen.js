import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import Addpizza from './Addpizza'
import Orderslist from './Orderslist'
import Pizzaslist from './Pizzaslist'
import Userslist from './Userslist'

const Adminscreen = () => {

    const dispatch = useDispatch()
    const userstate = useSelector(state => state.loginUserReducer)
    const { user } = userstate

    useEffect(() => {
        if (user.isAdmin === 'false') {
            window.location.href = '/'
        }
    }, [])

    return (
        <div>
            <div className='row w-100' style={{ margin: 0 }}>
                <div className='col-md-12' >
                    <h2 style={{ fontSize: '30px' }} >Admin Panel</h2>
                    <hr />
                    <ul className='adminfunctions'>
                        <li>
                            <Link to={'/admin/userslist'} style={{ color: 'white' }} >Users List</Link>
                        </li>
                        <li>
                            <Link to={'/admin/pizzaslist'} style={{ color: 'white' }} >Pizzas List</Link>
                        </li>
                        <li>
                            <Link to={'/admin/addpizza'} style={{ color: 'white' }} >Add New Pizza</Link>
                        </li>
                        <li>
                            <Link to={'/admin/orderslist'} style={{ color: 'white' }} >Orders List</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route path="/admin" component={Userslist} exact />
                        <Route path="/admin/userslist" component={Userslist} exact />
                        <Route path="/admin/orderslist" component={Orderslist} exact />
                        <Route path="/admin/pizzaslist" component={Pizzaslist} exact />
                        <Route path="/admin/addpizza" component={Addpizza} exact />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Adminscreen