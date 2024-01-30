import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../movie-card/MovieCard';
import "./movieListing.scss"

const MovieListing = () => {
    const movies = useSelector((state) => state.movieReducer.movies)
    const responseType = movies.Response;
    const searchValues = movies.Search;//array of objects [{},{},{},...]

    let renderMovies = "";
    renderMovies = responseType !== "True" || "" ? (
        <div className="movies-error">
            <h3>No Movies To Show {movies.Error}</h3>
        </div>
    ) : (
        searchValues.map((movie) => (
            <MovieCard key={movie.imdbID} data={movie} />
        ))
    );

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
        </div>
    )
}

export default MovieListing