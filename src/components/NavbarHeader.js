import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarHeader = () => {

    window.onscroll = function() {
        const scrolledClass = "navbar-scrolled";
        const scrollTrigger = 100;
        // We add pageYOffset for compatibility with IE.
        if (window.scrollY >= scrollTrigger) {
          document.getElementsByClassName("navbar")[0].classList.add(scrolledClass);
        } else {
          document.getElementsByClassName("navbar")[0].classList.remove(scrolledClass);
        }
      };

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