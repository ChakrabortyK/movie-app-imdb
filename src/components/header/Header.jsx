import React from 'react'
import { Link } from 'react-router-dom'
import userimage from '../../images/user.jpg'
import "./header.scss"


const Header = () => {
    return (<>
        <div className="header">
            <h2 className='header-heading'>
                <Link className="Link" to='/'>
                    LogoHead
                </Link>
            </h2>
            <div className="user-image">
                <img src={userimage} alt="" />
            </div>
        </div>
    </>
    )
}

export default Header