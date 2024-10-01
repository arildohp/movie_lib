'use client';
import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
         getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'ed786fb609fa8353f541c222da570fe3',
                language: 'pt-br'
            }
        }).then(response => {
            setMovies(response.data.results)
        })
    }

   
        
    return (    
        <ul className="movie-list">
            {movies.map((movie) =>
              <li className='movie-card'>
                {movie.title}
              </li>
            )}          
        </ul>
    );
}