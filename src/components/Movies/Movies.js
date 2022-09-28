import { getMovies } from "API/API"
import { Box } from "components/Box"
import { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom"

export const Movies = () => {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");


    useEffect(() => {
        if (!query) return
        getMovies(query).then(data => setMovies(data.results))
    }, [query, searchParams])
    
    const handleSearch = (e) => {
        e.preventDefault()
        const searchString = e.target.elements.search.value.trim()
        setSearchParams({ query: searchString })
    }

    const location = useLocation();

    return (
        <main>
            <Box as="form" onSubmit={handleSearch}>
                <input type="text" name="search" defaultValue={query} />
                <button type="submit">X</button>
            </Box>

            <Box as="ul">
                {movies.map(({ to, id, title }) => (
                    < li key={id} >
                        <Link to={`${id}`} state={{ from: location }}>
                            {title}
                        </Link>
                    </li>
                ))}
            </Box>

        </main>
    )
}
