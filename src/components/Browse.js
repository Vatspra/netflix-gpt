import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GptSearch';


const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies()
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};


export default Browse