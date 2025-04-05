import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "tmb_api_key";
const API_URL = `http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

interface Movie {
    id: number;
    title: string;
    image: string;  // Changed from 'image' to match API response
    description: string;     // Changed from 'description' to match API response
}
interface MovieState {
    movies: Movie[];
    status: "idle" | "loading" | "failed";
}

export const fetchMovies = createAsyncThunk<Movie[], string>("movies/fetchMovies", async (query="") => {
    const response = await axios.get(
        query
        ?`https://api.themoviedb.org/3/serach/movie?api_key=${API_KEY}&query=${query}`: API_URL);
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