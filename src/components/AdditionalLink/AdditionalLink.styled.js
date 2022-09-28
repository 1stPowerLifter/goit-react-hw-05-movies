import { Link } from "react-router-dom";
import styled from "styled-components";

export const AdditionalBox = styled.div`
    width: calc(100% + ${p => p.theme.space[4] * 2}px);
    padding: ${p => p.theme.space[4]}px;
    margin-top:${p => p.theme.space[4]}px;
    margin-left: -${p => p.theme.space[4]}px;
    border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`

export const StyledLink = styled(Link)`
    color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: underline;
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[3]}px 0;
  display: block;

  :hover,:focus,:active{
    text-decoration: none;
    color: ${p => p.theme.colors.primary};
  }
`