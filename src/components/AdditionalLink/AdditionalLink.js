import { AdditionalBox, StyledLink } from "./AdditionalLink.styled"

export const AdditionalLink = () => {
    return (
        <AdditionalBox >
            <h2>Additional information</h2>
            <ul>
                <li><StyledLink to="cast">Cast</StyledLink></li>
                <li><StyledLink to="reviews">Reviews</StyledLink></li>
            </ul>
        </AdditionalBox>
    )
}