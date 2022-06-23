import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Search from './Components/Search';
import Footer from './Components/Footer';
import NoResult from './Components/NoResult';

function App() {

  const [movieName, setMovieName] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [found, setFound]=useState("True");

  const getMovies = (movie) => {

    fetch(`http://www.omdbapi.com/?apikey=6af88c21&s=${movie}`)
      .then(response => response.json())
      .then(data => { 
        if(data.Response==="False")
          setFound(data.Response)
        else{
          setFound("True");
          setMovieList(data.Search);
        }
      })
      .catch(err => console.log(err.message));
  }

  const setMovie = (e) => {
    setMovieName(e.target.value);
  }

  const getMovieList = (e) => {
    if(e.key==='Enter'){
      getMovies(movieName);
    }
  }

  return (
    <>
      <div className='main_container'>
      <div className="container my-5">
        <Search value={movieName} onChange={setMovie} onKeyPress={getMovieList}/><br/>
        <div className='movie_list container'>
          {
            (found==="False")?(<NoResult image={"../icon.jpg"}/>):movieList?.map((value, index) => (
              <Card prop={value} key={index} />
            ))
          }
        </div>
      </div>
      <br/><br/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
