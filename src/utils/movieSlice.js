import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'moveiSlice',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trailerVideo: null,
    },

    reducers: {
        addNowPlayingMovies: (state, action) => {
            console.log('hello', action)
            state.nowPlayingMovies = action.payload
        },

        addPopularMovies: (state, action) => {
            
            state.popularMovies = action.payload
        },

        addTrailerMovies: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
});


export const {addNowPlayingMovies, addPopularMovies, addTrailerMovies} = movieSlice.actions;

export default movieSlice.reducer