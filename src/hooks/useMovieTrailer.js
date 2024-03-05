import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerMovies } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {

    const data = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}"/videos?language=en-US"`, {
        headers: API_OPTIONS.headers
    })
    console.log('data is', data)
    // const json = await data.json();

    const filterData = data.data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.data.results[0];
    dispatch(addTrailerMovies(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;