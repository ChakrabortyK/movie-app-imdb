// eslint-disable-next-line
import React, { useEffect } from 'react'
import MovieListing from '../movie-listing/MovieListing'
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/slices/moviesSlice';


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies("Formula 1"));
        // eslint-disable-next-line
    }, [dispatch]);

    return (<>
        <div>
            {/* <div className="banner-image">
                <img src="..." alt="..." />
            </div> */}
            {/* <button
                className='btn btn-outline-primary '
                onClick={() => dispatch(fetchMovies())}
            >
                fetch
            </button> */}
            <MovieListing />
        </div>
    </>

    )
}

export default Home