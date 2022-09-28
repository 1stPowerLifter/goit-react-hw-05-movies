import { useEffect, useState } from "react"
import { getTrending } from "API/API"
import { Link, useLocation } from "react-router-dom"
import { Box } from "components/Box"

export const Home = () => {
    const [movies, setMovies] = useState([])

    const location = useLocation();

    useEffect(() => {
        getTrending().then(data => setMovies(data.results))
    }, [])
    
    return (
        <main>
            <h1>Trending today</h1>
            
            <Box as="ul">
                {movies.map(({ to, id, title }) => (
                    < li key={id} >
                        <Link to={`movies/${id}`} state={{ from: location }}>
                            {title}
                        </Link>
                    </li>
                ))}
            </Box>
        </main>
    )
}