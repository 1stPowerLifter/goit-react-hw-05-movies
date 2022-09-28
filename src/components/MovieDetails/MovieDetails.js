import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { BackLink } from "./MovieDetails.styled";
import { HiArrowLeft } from "react-icons/hi";
import { getMovieDetails } from "API/API";
import { Suspense, useEffect, useState } from "react";
import { Box } from "components/Box";

export const MovieDetails = () => {
    const [{ backdrop_path, title, overview, genres,vote_average}, setMovie] = useState({})
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/products";

    
    useEffect(() => {
        getMovieDetails(movieId).then(data => {
            console.log(data)
            return setMovie(data)
        })
    }, [movieId])


    return (
        <main>
            <BackLink to={backLinkHref}>
                <HiArrowLeft size="24" />
                Back to movies
            </BackLink>

            <Box>
                <img src={backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    : 'https://st.depositphotos.com/1653909/4590/i/600/depositphotos_45905265-stock-photo-movie-clapper.jpg'}
                    alt={title} />
                <Box>
                    <Box>
                        <h1>{title}</h1>
                        {vote_average && <p>Use score : {vote_average * 10}%</p>}
                    </Box>
                    {overview && (<Box>
                        <h2>Overview</h2>
                        <p>{overview}</p>
                    </Box>)}
                    {genres && (<Box>
                        <h2>Ganres</h2>
                        <p>{genres?.reduce((acc, genre) => acc + genre.name + " ", "")}</p>
                    </Box>)}
                </Box>
            </Box>

            <Box>
                <h2>Additional information</h2>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
            </Box>

            <Suspense fallback={<div>Loading information...</div>}>
                <Outlet />
            </Suspense>
        </main>
    );
}

