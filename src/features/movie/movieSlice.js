// movieSlice.js
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        recommend: [],
        newDisney: [],
        original: [],
        trending: [],
    },
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        },
    },
});

export const { setMovies } = movieSlice.actions;

// Selector
export const selectTrending = (state) => state.movie.trending; 
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectRecommend = (state) => state.movie.recommend;

export default movieSlice.reducer;
