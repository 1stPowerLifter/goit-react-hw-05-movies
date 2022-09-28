import styled from "styled-components"

export const Li = styled.li`
list-style: inherit;
border: ${p => p.theme.borders.dashed} ${p => p.theme.colors.black};
padding: ${p => p.theme.space[2]}px;

:hover{
    color: ${p => p.theme.colors.primary};
    border-color: ${p => p.theme.colors.primary};
}

h3 {
    color: inherit;
    padding-bottom: ${p => p.theme.space[3]}px;
}
p{
    color:${p => p.theme.colors.black};
}
`