// eslint-disable-next-line
import React, { useEffect } from 'react'
import MovieListing from '../movie-listing/MovieListing'
import { useDispatch } from 'react-redux';
// import { API_KEY } from "../../common/APIs/API_KEY";
// import movieApi from "../../common/APIs/movieApi";
import { fetchMovies } from '../../redux/slices/moviesSlice';


const Home = () => {
    const dispatch = useDispatch();
    // const movieSearchText = "harry";
    useEffect(() => {
        // eslint-disable-next-line
        // const fetchMovie = async () => {
        // const response = await movieApi.get(`?apiKey=${API_KEY}&s=${movieSearchText}`)
        // .catch((e => console.log(e)))
        // console.log('respons:', response.data)
        dispatch(fetchMovies());
        // }
        // fetchMovie()
        // eslint-disable-next-line
    }, [dispatch]);

    return (<>
        <div>
            <div className="banner-image">
                <img src="..." alt="..." />
            </div>
            <MovieListing />
        </div>
    </>

    )
}

export default Home