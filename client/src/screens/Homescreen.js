import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../redux/actions'
import Pizza from '../components/Pizza.js'
import pizzas from '../pizzasdata.js'

const Homescreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
        <div>
            <div className='row' style={{ margin: 0 }}>
                {
                    pizzas.map(pizza => {
                        return <div className='col-md-4' >
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Homescreen