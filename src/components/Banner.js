import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'

export default function Banner() {
    return (
        <>

            <Carousel  >
                <Carousel.Item>
                    <img
                        className="img"
                        src="https://static3.srcdn.com/wordpress/wp-content/uploads/2019/11/Fantasy-Island-2020-movie-logo.jpg"

                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img"
                        src="https://static.wixstatic.com/media/884862_fa92c090bb6540a7aa0115e74b4c0564~mv2.jpg"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img"
                        src="https://i1.wp.com/2.bp.blogspot.com/-XmACHofjfTc/VCQGLtltVQI/AAAAAAAAAC8/FHhoheFlWZ0/s1600/interstellar%2Bnew%2Bbanner.jpg"

                    />
                </Carousel.Item>
            </Carousel>



            <div className="button-typemovie">

                <div>
                    <genreList />
                </div>



            </div>
        </>
    )
}
