import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchById from '../hooks/useFetchById';


const MovieDetail = () => {
  const params = useParams();
  const {data:movie} = useFetchById(params.id);
  console.log(movie);
  const posterPath = movie.poster_path;
  const image =  posterPath != null
  ? `https://image.tmdb.org/t/p/w500/${posterPath}` 
  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCkLGD5QILxxv_hoeqqNeAySv0a3_2kg9xw&s';


  return (
    <main>
      <section className='flex justify-around flex-wrap py-5'>
        <div className='max-w-sm'>
          <img src={image} alt={movie.title} className='rounded'/>
        </div>
        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
            <h1 className='font-bold text-4xl my-3 text-center lg:text-left'>{movie.title}</h1>
            <p className='my-4'>{movie.overview}</p>
            <p className='my-7 flex flex-wrap gap-2'>
              {
               movie.genre ? movie.genres.map((genre, index) => (
                  <span key={index} className='mr-2 border border-gray-200 dark:border-gray-600 rounded p-2'>{genre.name}</span>
                )) : null
              }
            </p>
            
        <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p className="ms-2 text-gray-900 dark:text-white">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
        </div>
            <p className='my-4'>
              <span className='mr-2 font-bold'>Runtime:</span>
              <span>{movie.runtime}mins</span>
            </p>
            <p className='my-4'>
              <span className='mr-2 font-bold'>Budget:</span>
              <span>{movie.budget}</span>
            </p>
            <p className='my-4'>
              <span className='mr-2 font-bold'>Revenue:</span>
              <span>{movie.revenue}</span>
            </p>
            <p className='my-4'>
              <span className='mr-2 font-bold'>Released Date:</span>
              <span>{movie.release_date}</span>
            </p>
            <p className='my-4'>
              <span className='mr-2 font-bold'>IMDB code:</span>
              <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank' rel='noreference'>{movie.imdb_id}</a>
            </p>
        </div>
      </section>
    </main>
  )
}

export default MovieDetail;