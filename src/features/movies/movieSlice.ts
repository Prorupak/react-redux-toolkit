import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import moviesAPI from './moviesAPI';
import { APIKey } from './APIKey';


export interface Movie {
    movies: {
        Search?: [{
            Title?: string;
            Year?: string;
            poster?: string;
            type?: string;
        }],
        Response: string;
        Error: string;
    };
    shows: {
        Search?: [{
            Title?: string;
            Year?: string;
            poster?: string;
            type?: string;
        }],
        Response: string;
        Error: string;
    }
    status: 'idle' | 'loading' | 'failed';
    [propName: string]: any;
}

const initialState: Movie = {
    movies: {
        Search: [{
            Title: "",
            Year: "",
            poster: "",
        }],
        Response: "",
        Error: "",
    },
    shows: {
        Search: [{
            Title: "",
            Year: "",
            poster: "",
            type: "",
        }],
        Response: "",
        Error: "",
    },
    status: 'idle',
    selectedMovieOrShow: {}
}

export const fetchMoviesAsync = createAsyncThunk(
    'movies/fetchMovies',
    async (args, {rejectWithValue}) => {
        try {
            const movieText = "batman"
            const { data } = await moviesAPI.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);

            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const fetchShowsAsync = createAsyncThunk(
    'movies/fetchShows',
    async (args, {rejectWithValue}) => {
        try {
            const movieText = "robin"
            const { data } = await moviesAPI.get(`?apiKey=${APIKey}&s=${movieText}&type=series`);

            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id, {rejectWithValue}) => {
    try {const {data} = await moviesAPI.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return data;}
    catch (err) {
        return rejectWithValue(err);
    }
  }
);

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => initialState,
            },
    extraReducers: builder => {
        builder
            .addCase(fetchMoviesAsync.pending, (state) => {
                state.status = 'loading';
            }).addCase(fetchMoviesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.movies = action.payload;
            }).addCase(fetchMoviesAsync.rejected, (state) => {
                state.status = 'failed';
            }
            ).addCase(fetchShowsAsync.pending, (state) => {
                state.status = 'loading';
            }).addCase(fetchShowsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.movies = action.payload;
            }).addCase(fetchShowsAsync.rejected, (state) => {
                state.status = 'failed';
            }).addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
                state.selectedMovieOrShow = action.payload;
            })
    }
});


export const getAllMovies = (state: RootState) => state.movies.movies;
export const getAllShows = (state: RootState) => state.movies.shows;
export const getMoviesStatus = (state: RootState) => state.movies.status;


export default moviesSlice.reducer;