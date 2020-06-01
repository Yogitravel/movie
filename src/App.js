import React, { useEffect, useState } from "react";
import './App.css'
import MovieList from "./components/MovieList";
import Menu from './components/Menu';
import Banner from "./components/Banner";
import GenresList from './components/GenresList'
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap'


const apiKey = process.env.REACT_APP_APIKEY;
function App() {

  let [movieList, setMovieList] = useState(null);
  let [genreList, setGenreList] = useState(null);
  let [searchByCategory, setSearchByCategory] = useState(null);



  const getNowPlayingMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    let data = await fetch(url);
    let result = await data.json();
    let category = null
    console.log("here is ok", result.results)
    let filteredList = result.results.filter(function (movie) {
      if (category == null) {
        return movie
      }
      else {
        return movie.genre_ids.includes(category)
      }


    });
    console.log("here is aldul movie", filteredList.length)

    setMovieList(filteredList);
    console.log("movies hehe", result);
  };



  const getGenreList = async () => {

    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    let data = await fetch(url);
    let result = await data.json();
    getNowPlayingMovie()
    // SearchByCategory()
    setGenreList(result.genres)

  };





  useEffect(() => {
    getGenreList();
  }, []);

  if (movieList === null || genreList === null) {
    return <div>loading</div>;
  }


  //tao page size
  // let pageSize = 20
  // const pageSize1() {
  //   movieList += 20
  //   ovieList()
  //   numberArticle = `No. of Articles:${pageSize}`
  // }

  function getDatafromGenres(data) {
    setMovieList(data)
  }


  return (

    <div>
      <Menu />

      <div className="bodydiv mx-auto ">
        <div>
          <Banner />
          <GenresList genres={genreList} giveDataToApp={getDatafromGenres} ></GenresList>
        </div>

        <div>
          <MovieList movieList={movieList} genresFromApp={genreList} />
        </div>

        <Button variant="outline-secondary">Click for more</Button>{' '}







      </div>
    </div>
  );
}

export default App;
