import {Navbar, Container, Nav} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { useTheme } from "../../ThemeContext";
import ToggleTheme from "./ToggleTheme";

function NavBar () {

    const [theme] = useTheme();

    return (
        <Navbar bg={theme ? 'light' : 'dark'}
                variant={theme ? 'light' : 'dark'}
                expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to="/">
                    <Nav.Link href="/">Songs</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favorites">
                    <Nav.Link href="/favorites">Favorite Songs</Nav.Link>
                </LinkContainer>
            </Nav>
            <ToggleTheme/>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar;