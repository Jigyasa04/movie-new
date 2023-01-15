import App from '../App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function SingleMovie() {
    const { id } = useParams();
    console.log(id)
    const [newMovie, setNewMovie] = useState([]);

    useEffect(async () => {
        try {

            const url = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=4a3bcc72`);
            const data = await url.json();
            console.log(data)
            setNewMovie([data])
        } catch (error) {
            console.log(error.message)
        }
    }, [])
    return (
        <>
            <div className="single_mainmovie_box">
                <div className="single_movie_box">
                    {newMovie.map((movie) => {
                        return (
                            <div key={movie.imdbID} className="single_movie_item" >
                                <div className="single_movie_poster">
                                    <img className="single_movie_img" src={movie.Poster} alt={movie.Title} />
                                </div>
                                <div className="single_movie_title">
                                    <h3>{movie.Title} <span className="single_movie_rating">{movie.imdbRating}</span></h3>
                                    <h5>Year: {movie.Year}  Released: {movie.Released}</h5>
                                    <h5 className="single_movie_genre">Genre: {movie.Genre}</h5>
                                    <h5>Writers: {movie.Writer}</h5>
                                    <h5>Actors: {movie.Actors} </h5>
                                    <h5>Language: {movie.Language} </h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SingleMovie