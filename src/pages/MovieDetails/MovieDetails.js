import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "API/API";
import { Suspense, useEffect, useState } from "react";
import { BackLink } from "components/BackLink/BackLink";
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { AdditionalLink } from "components/AdditionalLink/AdditionalLink";

const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/products";

    
    useEffect(() => {
        getMovieDetails(movieId).then(data => setMovie(data))
    }, [movieId])


    return (
        <main>
                <BackLink to={backLinkHref}>
                    Back to movies
                </BackLink>

                <MovieInfo movie={movie} />

                <AdditionalLink />

                <Suspense fallback={<div>Loading information...</div>}>
                    <Outlet />
                </Suspense>
        </main>
    );
}


export default MovieDetails
