import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../redux/actions'
import Pizza from '../components/Pizza.js'

const Homescreen = () => {

    const dispatch = useDispatch()
    const pizzasstate = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasstate

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
        <div>
            <div className='row justify-content-center' style={{ margin: 0 }}>
                {
                    loading ? (
                        <h1>Loading</h1>
                    ) : error ? (
                        <h1>Something went wrong</h1>
                    ) : (
                        pizzas.map((pizza) => {
                            return <div className='col-md-4' key={pizza._id} >
                                <div>
                                    <Pizza pizza={pizza} />
                                </div>
                            </div>
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Homescreen