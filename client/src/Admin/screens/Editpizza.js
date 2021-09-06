import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaById } from '../../redux/actions'

const Editpizza = ({ match }) => {

    const dispatch = useDispatch()
    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    const { pizzas, error, loading } = getpizzabyidstate

    useEffect(() => {
        dispatch(getPizzaById(match.params.pizzaid))
    }, [])

    return (
        <div>
            Edit Pizza
            <hr />
            Pizza Id = {match.params.pizzaid}
        </div>
    );
};

export default Editpizza;