import './App.css'
import './css/main.css'
import Layout from './components/Layout'
import {useEffect, useState} from 'react'


function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  const getMovies = async () => {
  
    const response = await fetch(`http://www.omdbapi.com/?s=${search}*&apikey=7d1d6ea4&type=movie`)
    const data = await response.json()
  /*Først og fremst henter vi data fra API via fetch (på search får vi bare data på poster, title og year), og setter inn search 
  som parameter slik at vi får brukt search for å søke frem data i API. Videre, setter jeg også inn wildcard character (*)
  etter paramteren slik at hvis jeg f.eks søker på  /
    
  /*Jeg skjønte ikke helt hvordan jeg skulle få til å få mer informasjon fra det samme API-kallet, så jeg bestemte meg for å
  lage enda et API-kall. Denne henter fram ekstra informasjon som ble kalt i det første APi-kallet (f.eks genre, actors, osv)
  Setter inn en betingelse som sjekker om API faktisk gir noe data, slik at hele nettsiden ikke får noen error ved å ikke 
  fremstille data som ikke eksisterer*/
    if (data.Search && data.Search.length >= 1) {
  /*I og med at vi henter ekstra-data til flere elementer, må
  vi bruke promise.all for å lage flere asynkroniske API-kall (via mapping) slik at de kan rendre samtidig på UI
  Bruker map for å lage flere promises som henter data fra API-kall med imdbID via url, slik at vi får data som f.eks genre,
  director, awards, og lignende*/
      const movieDetails = await Promise.all(

        data.Search.map(async (movie) => {
          const detailsResponse = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=7d1d6ea4&type=movie`)
          const detailsData = await detailsResponse.json()

          return detailsData
        })
      )
  /*Hvis betingelsen ovenfor blir oppfylt, vil setMovies (oppdateringsvariabel) oppdatere seg med movieDetails som gir flere
  detaljer om filmen. Hvis det motsatte skjer derimot så vil setMovies bli oppdatert med en tom array.*/
      setMovies(movieDetails)
    } else {
      setMovies([])
    }
  }
  /*getMovies blir kalt når search state-variabelen endres. Sørger for at UI rendrer på nytt og endres når man endrer på søke*/
  useEffect(() => {
    getMovies()
  }, [search])


  return (
     <Layout movies={movies} setSearch={setSearch} getMovies={getMovies}/>
  );
}

export default App;