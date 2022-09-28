import { Box } from "components/Box"
import { StyledLink } from "./MoviesList.styled"

export const MoviesList = ({ movies, location, to = "" }) => {
    return (
        <Box as="ul" pt={4}>
            {movies.map(({ id, title }) => (
                < li key={id} >
                    <StyledLink to={`${to + id}`} state={{ from: location }}>
                        {!title ? "????" : title}
                    </StyledLink>
                </li>
            ))}
        </Box>
    )
}