import { getMovieCast } from "API/API";
import { Box } from "components/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img, Li } from "../Cast/Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [castList, setCastList] = useState([])

    useEffect(() => {
        getMovieCast(movieId).then(data => setCastList(data.cast))
    }, [movieId])

    return (
        <Box as="ul" py={4} display="flex" gridGap={4} flexDirection="column" >
            {castList.map(({ id, name, character, profile_path }) => (
                <Li key={id}>
                    <Img src={profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : 'https://as2.ftcdn.net/v2/jpg/01/80/29/33/1000_F_180293326_tKL2OSHmi40WhYM9L7zgSjsjtWzUoJZY.jpg'}
                        alt={name} width="200" />
                    <Box>
                        <h3>{name}</h3>
                        <h3>{character}</h3>
                    </Box>
                </Li>)
            )}
        </Box>
    )
}

export default Cast