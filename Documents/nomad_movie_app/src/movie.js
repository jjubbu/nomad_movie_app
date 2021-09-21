import React from "react";
import Proptypes, { string } from "prop-types";
import "./movie.css";

function Movie({id, year, title, summary, image, genres}) {
    
    summary = summary.length > 0 ? summary.slice(0,140) + "..." : ""

    return (
        <div className="_movie">
            <img className="movie_poster" src={image} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <div className="movie_option">
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map(
                        (genres,number) => (<li key={number} className="genres_genre">{genres}</li>)
                    )}
                </ul>
                </div>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.prototype = {
    id: Proptypes.number.isRequired,
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    image: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes,string)
}

export default Movie;