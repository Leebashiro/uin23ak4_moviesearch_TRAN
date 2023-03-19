export default function Search({setSearch, getMovies}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search"  className="search-bar" placeholder="James Bond...." onChange={handleSearch} />
            <button type="submit" className="search-button" onClick={getMovies}>Search</button>
        </form>
    )
}