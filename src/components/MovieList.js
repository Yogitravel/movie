import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
    if (props.MovieList === null) {
        return <div>loading</div>;
    }
    return (
        <div>
            <div className="movieList row">
                {props.movieList.map((item) => {
                    return <MovieCard movie={item} genresFromMovieList={props.genresFromApp} handleShow={props.handleShow} YoutubeSearch={props.YoutubeSearch} />;
                })}
            </div>
        </div>
    );
}
