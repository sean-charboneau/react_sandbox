import React from 'react';

export const Header = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="#" className="navbar-brand">Sandbox</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};