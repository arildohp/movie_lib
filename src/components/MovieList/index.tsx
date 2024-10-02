'use client';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading'
import './index.scss';
import axios from 'axios';
import { Movie } from '@/app/Types/movie';
import MovieCard from '../MovieCard';


export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
         getMovies();
    }, []);

    const getMovies = async () => {
       await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'ed786fb609fa8353f541c222da570fe3',
                language: 'pt-br'
            }
        }).then(response => {
            setMovies(response.data.results)
        })

        setLoading(false);
    }  

    if (isLoading) {
        return (
            <div className='loading-container'>
                <ReactLoading type="spin" color="#6046ff" height={'6%'} width={'5%'} />
            </div>
        )
    }
        
    return (    
        <ul className="movie-list">
            {movies.map((movie) =>
               <MovieCard 
                  key={movie.id}
                  movie={movie}
               />
            )}          
        </ul>
    );
}