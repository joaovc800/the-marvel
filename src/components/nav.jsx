import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import marvelNav from "../assets/marvel-nav.png";

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-light">
          <Navbar.Brand className="p-2" href="/home">
            <img width="100px" src={marvelNav}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Sair
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default NavBar;