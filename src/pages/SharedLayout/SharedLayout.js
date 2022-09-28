import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, HeaderLink } from "./SharedLayout.styled";


export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <HeaderLink to="/" end>
                        Home
                    </HeaderLink>
                    <HeaderLink to="/movies">
                        Movies
                    </HeaderLink>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    )
}