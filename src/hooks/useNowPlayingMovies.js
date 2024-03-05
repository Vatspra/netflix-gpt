import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from '../utils/constant';
import { addNowPlayingMovies } from "../utils/movieSlice";
import axios from "axios";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    const data =  await axios.get("https://api.themoviedb.org/3/movie/now_playing?page=1", {
      headers: API_OPTIONS.headers
    })
    dispatch(addNowPlayingMovies(data.data.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;