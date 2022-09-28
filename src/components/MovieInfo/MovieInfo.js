import { Box } from "components/Box"
import { BoxInfo } from "components/BoxInfo/BoxInfo"
import { Img } from "./MovieInfo.styled"

export const MovieInfo = ({ movie }) => {
    const { backdrop_path = undefined, title, vote_average, overview, genres } = movie

    return (
        <Box display="flex" gridGap={5} >
            <Box width="350px" height="500px">
            <Img src={backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                : 'https://st.depositphotos.com/1653909/4590/i/600/depositphotos_45905265-stock-photo-movie-clapper.jpg'}
                    alt={title} />
            </Box>
            <Box display="flex" gridGap={5} flexDirection="column" width="calc(100% - 382px)">
                <BoxInfo title={title} text={`Use score : ${(vote_average * 10).toFixed(2)}%`} />
                {overview && <BoxInfo title={"Overview"} text={overview} />}
                {genres && <BoxInfo title={"Ganres"} text={genres?.reduce((acc, genre) => acc + genre.name + " ", "")} />}
            </Box>
        </Box>
    )
}