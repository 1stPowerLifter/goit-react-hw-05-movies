import { useEffect, useState } from "react"
import { getTrending } from "API/API"
import { useLocation } from "react-router-dom"
import { MoviesList } from "components/MoviesList/MoviesList"

const Home = () => {
    const [movies, setMovies] = useState([])

    const location = useLocation();

    useEffect(() => {
        getTrending().then(data => setMovies(data.results))
    }, [])
    
    return (
        <main>
            <h1>Trending today</h1>
            
            <MoviesList movies={movies} location={location} to={"movies/"} />
        </main>
    )
}

export default Home;