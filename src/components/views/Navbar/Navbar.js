import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const AppNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark" className="my-4 rounded px-3">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Waiter.app</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default AppNavbar;