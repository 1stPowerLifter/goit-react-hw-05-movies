import { getMovieReviews } from "API/API";
import { Box } from "components/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Li } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviewsList, setReviewsList] = useState([])

    useEffect(() => {
        getMovieReviews(movieId).then(data => setReviewsList(data.results))
    }, [movieId])

    return (
        <Box as="ul" py={4} display="flex" gridGap={4} flexDirection="column">
            {reviewsList.map(({ author, id, content}) => (
                <Li key={id}>
                    <h3>{author}</h3>
                    <p>{content}</p>
                </Li>)
            )}
        </Box>
    )
}

export default Reviews