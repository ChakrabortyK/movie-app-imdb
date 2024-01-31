import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userimage from '../../images/user.jpg'
import "./header.scss"
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../../redux/slices/moviesSlice'


const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") return alert("Please enter search term!");
        dispatch(fetchMovies(term));
        setTerm("");
    };

    return (<>
        <div className="header">
            <Link to="/">
                <div className="logo header-heading">
                    Movie App
                </div>
            </Link>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={term}
                        placeholder="Search Movies or Shows"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="user-image">
                <img src={userimage} alt="user" />
            </div>
        </div>
    </>
    )
}

export default Header