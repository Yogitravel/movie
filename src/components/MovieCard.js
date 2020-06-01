import React from 'react'
import { Card, ListGroupItem, ListGroup, Badge, Button } from "react-bootstrap";

export default function MovieCard(props) {
    let movie = props.movie;
    let genres = props.genresFromMovieList
    return (

        <React.Fragment>
            <div class="card-movie col-md-6">
                <div class="row">
                    <div class="col-4">
                        <img className="img-fluid" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                        />
                    </div>

                    <div class="col-8">
                        <div className="movieName"> {movie.original_title}</div>
                        <div className="description-scroll" >{movie.overview} </div>
                        <div className="date">Date Release  {movie.release_date}</div>
                        <div>{movie.genre_ids.map(id => {
                            return (
                                <Badge variant="light">{genres.find(genre => id === genre.id).name}</Badge>


                            )
                        })} </div>
                        <div className="date">Rating: {movie.vote_average}/10</div>

                        <Button variant="outline-secondary"> Trailer </Button>



                    </div>
                </div>

            </div>
            {/* </div> */}


        </React.Fragment >

    );
}
