import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addPopularMovies } from "../utils/moviesSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?page=1",{
        headers: API_OPTIONS.headers
      }
    );
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
