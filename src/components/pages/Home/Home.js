import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Home = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand href="/">Waiter.app</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>     
            </Nav>
        </Navbar>
    )
}

export default Home;