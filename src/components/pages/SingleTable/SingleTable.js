import PageTitle from "../../common/PageTitle/PageTitle";

const SingleTable = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Waiter.app</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>     
                </Nav>
            </Navbar>
            <PageTitle>Table </PageTitle>
        </>
    )
}

export default SingleTable;