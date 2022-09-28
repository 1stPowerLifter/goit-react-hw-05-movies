import { getMovies } from "API/API"
import { MoviesList } from "components/MoviesList/MoviesList"
import { useEffect, useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import { Button, Form, Input } from "./Movies.styled"
import {ImFilm} from "react-icons/im"

const Movies = () => {
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
            <Form onSubmit={handleSearch}>
                <Input type="text" name="search" defaultValue={query} />
                <Button type="submit"><ImFilm size={32}/></Button>
            </Form>

            <MoviesList movies={movies} location={location} />

        </main>
    )
}

export default Movies