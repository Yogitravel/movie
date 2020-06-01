import React, { useEffect, useState } from "react";
import './App.css'
import MovieList from "./components/MovieList";
import Menu from './components/Menu';
import Banner from "./components/Banner";
import GenresList from './components/GenresList'
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap';
import Trailer from './components/Trailer';

const apiKey = process.env.REACT_APP_APIKEY;
let page = 1;

function App() {

  let [movieList, setMovieList] = useState(null);
  let [genreList, setGenreList] = useState(null);
  let [searchByCategory, setSearchByCategory] = useState(null);
  let [Youtubeid, setYoutubeid] = useState('');
  let [totalpage, settotalpage] = useState(null);

  // let [page, setpage] = useState(1);


  const [buttonHTML, setButtonHTML] = useState([]);


  const getNowPlayingMovie = async (page) => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page= ${page}`;
    let data = await fetch(url);
    let result = await data.json();
    let category = null

    settotalpage(result.total_pages)
    console.log(totalpage)
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
    console.log("movies hehe", false);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getGenreList = async () => {

    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    let data = await fetch(url);
    let result = await data.json();
    getNowPlayingMovie()
    // SearchByCategory()
    sotrang();
    console.log(totalpage)
    setGenreList(result.genres)

  };

  //tao search Youtube
  //1. asyns API ve
  // 2. bien movie id - dynamic
  //3. lam function de nhap lieu 
  //4. nut chay function

  const YoutubeSearch = async (id) => {
    console.log("hien ra id chua", id)
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;
    let data = await fetch(url);
    let result = await data.json();
    handleShow()
    setYoutubeid(result.results[0])
    console.log("rachua", result.results[0].key)

  };


  //tao 20 trang moi
  const loadmore = () => {
    page++;
    getNowPlayingMovie(page)

  }

  const sotrang = () => {
    for (let i = 1; i <= totalpage; i++) {
      setButtonHTML(...buttonHTML, `
      <Button onClick={() => getNowPlayingMovie(${i})} variant="outline-secondary"> ${i}</Button>
      `)
    }
  }

  useEffect(() => {
    getGenreList();
  }, []);

  if (movieList === null || genreList === null) {
    return <div>loading</div>;
  }




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
          <MovieList movieList={movieList} genresFromApp={genreList} handleShow={handleShow} YoutubeSearch={YoutubeSearch} />
        </div>

        <div>
          <Trailer onHide={handleClose} show={show}
            Youtubeid={Youtubeid} />

        </div>



        {buttonHTML}
        <Button onClick={() => loadmore()} variant="outline-secondary"> Click for more</Button>{' '}







      </div>
    </div >
  );
}

export default App;
