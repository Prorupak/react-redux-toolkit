import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {fetchMoviesAsync, fetchShowsAsync, getAllMovies } from './movieSlice'
const Movies = () => {
    const movies = useAppSelector(getAllMovies)
    console.log('movies', movies)
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(fetchMoviesAsync())
        dispatch(fetchShowsAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
      <div>
          <h1>{movies?.Search?.map(mov => mov.Title) }</h1>
      </div>
  )
}

export default Movies