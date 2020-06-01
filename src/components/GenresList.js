import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap'

export default function GenresList(props) {
    async function sayHello(id) {

        const apiKey = process.env.REACT_APP_APIKEY;
        console.log(id)
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
        let res = await fetch(url)
        let data = await res.json()
        console.log(data, "data from genres")
        let movieList = data.results
        props.giveDataToApp(movieList)


    }
    function giveDataToApp(data) {

    }

    console.log("hehhee ra chua", props.genres)
    return (
        <div>
            {
                props.genres.map(theloai1 => {

                    return (
                        <>
                            <Button className="genres-button" onClick={() => sayHello(theloai1.id)} variant="outline-secondary">{theloai1.name}</Button>{' '}
                        </>


                    )

                })
            }
        </div>
    )
}
