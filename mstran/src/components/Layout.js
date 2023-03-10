import Search from './Search'
import SearchResults from './SearchResults'

export default function Layout(movies, setSearch, getMovies){
    return (
        <div id="container">
          <header>
                <h1>Movie Search</h1>
          </header>

          <main>
          <Search setSearch={setSearch} getMovies={getMovies}/>
          </main>
          
          <section>
          <SearchResults movies={movies} setSearch={setSearch} getMovies={getMovies} />
          </section>
          
          <footer>
    
          </footer>
        </div>
    )
}