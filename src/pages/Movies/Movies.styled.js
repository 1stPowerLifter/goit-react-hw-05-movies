import styled from "styled-components";

export const Input = styled.input`
    border: ${p => p.theme.borders.bold};
    border-color: inherit;
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.sm} 0 0 ${p => p.theme.radii.sm};
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
`

export const Button = styled.button`
    border: ${p => p.theme.borders.bold};
    border-color: inherit;
    border-left: ${p => p.theme.borders.none};

    :hover{
        svg{
            fill: ${p => p.theme.colors.primary};
        }
    }
`

export const Form = styled.form`
    display: flex;
    border-color: ${p => p.theme.colors.black};

    :hover,:focus{
        border-color: ${p => p.theme.colors.primary};
    }
`