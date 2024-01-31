import React from 'react'
import './movieCard.scss'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    const { data } = props
    return (
        <Link className='linkTo' to={`/movie/${data.imdbID}`}>
            <div className='movie-card'>
                <div>
                    <img src={data.Poster} alt="..." />
                </div>
                <div>
                    <h3>
                        {data.Title}
                    </h3>
                    <span>
                        Category : {data.Type}-{data.Year}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard