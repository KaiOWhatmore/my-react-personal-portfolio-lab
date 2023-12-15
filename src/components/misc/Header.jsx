import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

function Header() {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>Life Moves Pretty Fast</h1>
                    <h2>and if you don't stop to look around once in a while you could miss it</h2>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;