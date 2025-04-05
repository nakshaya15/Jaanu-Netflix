import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "tmb_api_key";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

interface Movie {
    id: number;
    title: string;
    poster_path: string;  // Changed from 'image' to match API response
    overview: string;     // Changed from 'description' to match API response
}

interface MovieState {
    movies: Movie[];
    status: "idle" | "loading" | "failed";
}

export const fetchMovies = createAsyncThunk<Movie[], void>("movies/fetchMovies", async () => {
    const response = await axios.get(API_URL);
    return response.data.results;
});

const initialState: MovieState = {
    movies: [],
    status: "idle",
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
                state.movies = action.payload;
                state.status = "idle";
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default movieSlice.reducer;