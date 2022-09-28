import styled from "styled-components";
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
    padding: ${p => p.theme.space[2]}px ${p => p.theme.space[0]};
    color: ${p => p.theme.colors.black};
    display: block;
    
    :hover,:focus,:active{
        color: ${p => p.theme.colors.primary};
    }
`
