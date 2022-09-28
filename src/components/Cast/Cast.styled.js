import styled from "styled-components"

export const Li = styled.li`
display: flex;
align-items: center;
gap: ${p => p.theme.space[4]}px;
list-style: inherit;
border: ${p => p.theme.borders.dashed} ${p => p.theme.colors.black};

:hover{
    color: ${p => p.theme.colors.primary};
    border-color: ${p => p.theme.colors.primary};
}
`

export const Img = styled.img`
object-fit: contain;
width: 150px;
height: 200px;
`