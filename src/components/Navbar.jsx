import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary" style={{position : "fixed" , top : 0 , left : 0  , width : "100%" , zIndex : 1000}}>
      <Container>
        <Navbar.Brand className='fw-bold text-light'>Product Showcase</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Header;