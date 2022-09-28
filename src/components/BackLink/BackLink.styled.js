import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]};
  color: ${p => p.theme.colors.black};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: -${p => p.theme.space[5]}px;

  :hover {
    color: ${p => p.theme.colors.primary};
  }
`;
