import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Filter = () => {
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded' style={{ margin: 0 }} >
                    <div className="col-md-3 w-100">
                        <input type="text" className="form-control w-100" placeholder="search" />
                    </div>
                    <div className="col-md-3 w-100">
                        <select className="form-control w-100" style={{ marginTop: '10px' }}  >
                            <option value="all">All</option>
                            <option value="veg">Veg</option>
                            <option value="nonveg">Non-Veg</option>
                        </select>
                    </div>
                    <div className="col-md-3 w-100">
                        <button className="btn btn-danger w-100" style={{ marginTop: '10px' }} >FILTER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter