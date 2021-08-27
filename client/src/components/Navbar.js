import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav style={{ justifyContent: 'space-between' }} className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded ">
                <a className="navbar-brand" href="#">PIZZA</a>
                <div id="navbarNav">
                    <ul style={{ display: 'flex', listStyle: 'none' }} >
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;