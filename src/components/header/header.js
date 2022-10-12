import React from "react";

import './header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="#">Star DB</a>
            </h3>
            <ul>
                <li className="list-group-item">
                    <a herf="#">People</a>
                </li>
                <li className="list-group-item">
                    <a herf="#">Planets</a>
                </li>
                <li className="list-group-item">
                    <a herf="#">Starships</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;