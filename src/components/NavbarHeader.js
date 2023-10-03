import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarHeader = () => {

    return (
        <Navbar sticky="top">
            <Container>
                <Navbar.Brand>Fergus Brown</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#Projects">Projects</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarHeader;