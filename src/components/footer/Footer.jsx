import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <div className="container">
            <footer className="">
                <ul className="nav justify-content-center border-top p-2 ">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer