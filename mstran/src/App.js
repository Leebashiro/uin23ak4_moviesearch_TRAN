import './App.css'
import './css/main.css'
import Layout from './components/Layout'
import {useEffect, useState} from 'react'


function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('Avatar')

  const getMovies = async() => {
    const response = await fetch (`http://www.omdbapi.com/?s=${search}&apikey=7d1d6ea4&Type=movie`);
    const data = await response.json()
    console.log(data.Search)
    setMovies(data.Search)

  }

  useEffect(() => {
    getMovies()
  },[]);

  return (
     <Layout movies={movies} setSearch={setSearch} getMovies={getMovies}/>
  );
}

export default App;