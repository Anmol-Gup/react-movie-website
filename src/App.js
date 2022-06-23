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
            (found==="False")?(<NoResult image={"https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?t=st=1655978263~exp=1655978863~hmac=9b64e25a97dd58ea4244356c67cafa0e058ba900c10a516104515cec826b3730&w=740"}/>):movieList?.map((value, index) => (
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
