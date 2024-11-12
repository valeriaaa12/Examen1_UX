import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'black' }}>
      <Container fluid>
        <img
          src="/png-transparent-netflix-logo-logos-brands-in-colors-icon-removebg-preview.png"
          height={80}
          width={80}
          alt="Logo"
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#hero-carousel" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="#series" style={{ color: 'white' }}>Series</Nav.Link>
            <Nav.Link href="#movies" style={{ color: 'white' }}>Movies</Nav.Link>
            <Nav.Link href="#new" style={{ color: 'white' }}>Recently Added</Nav.Link>
            <Nav.Link href="#list" style={{ color: 'white' }}>My list</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
              <Form className="d-flex me-3">
                <div className="search-container">
                  <Button variant="link" className="search-button p-0">
                    <img src="/image (18).png" height={25} alt="Search" />
                  </Button>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="search-input"
                    aria-label="Search"
                  />
                </div>
              </Form>
              
              <Button variant="link" className="notification-bell p-0 me-3">
                <i className="fas fa-bell text-white"></i>
              </Button>
              <Nav.Link href="#kids" className="me-3 text-white">Kids</Nav.Link>
              <img
                src="/images.png"
                alt="Profile"
                className="profile-avatar"
                height={32}
                width={32}
              />
            </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
