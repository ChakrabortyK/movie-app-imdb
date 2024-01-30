import React from 'react'
import './movieCard.scss'

const MovieCard = (props) => {
    const { data } = props
    return (
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
    )
}

export default MovieCard