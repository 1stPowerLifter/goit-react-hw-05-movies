import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: ${p => p.theme.space[0]} auto;
  border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};

  > nav {
    display: flex;
  }
`;


export const HeaderLink = styled(NavLink)`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};

  :hover:not(.active) {
    color: ${p => p.theme.colors.primary};
  }

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
  }
`;